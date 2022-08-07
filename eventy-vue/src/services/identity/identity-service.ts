import httpRequest from "@/services/common/http-request";

import type { AxiosError } from "axios";

import type { ILogin } from "@/domains/identity/ILogin";
import type { IRegister } from "@/domains/identity/IRegister";

import type { IFetchResponce } from "@/domains/IFetchResponce";
import type { IJWTResponse } from "@/domains/identity/IJwtResponse";

import useIdentityStore from "@/stores/identity/identityStore";


/**
 * Account Related Operations With Backend.
 */
export class IdentityService {

    /**
     * Defines Access To Identity Store - JWT Tokens.
     */
    identityStore = useIdentityStore();


    /**
     * Method Allows User To Login Into System.
     * @param {ILogin} login Defines Login Data.
     * @returns {Promise<IFetchResponce<IJWTResponse>>} Response From API.
     */
    async login(login: ILogin): Promise<IFetchResponce<IJWTResponse>> {
        return this.fetchData("login", login);
    }

    /**
     * Method Allows User To Register Into System.
     * @param {IRegister} register Defines Register Data
     * @returns {Promise<IFetchResponce<IJWTResponse>>} Response From API.
     */
    async register(register: IRegister): Promise<IFetchResponce<IJWTResponse>> {
        return this.fetchData("register", register);
    }

    /**
     * Method Refreshes Users Access Token For Content Access.
     * @returns {Promise<IFetchResponce<IJWTResponse>>} Response From API.
     */
    async refreshIdentity(): Promise<IFetchResponce<IJWTResponse>> {
        return this.fetchData("refreshtoken", {
            accessToken: this.identityStore.$state.jwt?.accessToken as string,
            refreshToken: this.identityStore.$state.jwt?.refreshToken as string,
        });
    }


    // Helping Methods.


    /**
     * Method Allows To Create Identity Related Fetch To Backend.
     * @param {string} path Defines Action Method In Backend Identity Controller.
     * @param {ILogin | IRegister | IJWTResponse} parseObj Defines Object To Be Sent To Backend.
     * @returns {Promise<IFetchResponce<IJWTResponse>>} Response From API.
     */
    async fetchData(path: string, parseObj: ILogin | IRegister | IJWTResponse) : Promise<IFetchResponce<IJWTResponse>> {

        let response;

        try {

            response = await httpRequest.post(`/identity/account/${path}`, parseObj);

            return {
                statusCode: response.status,
                data: response.data as IJWTResponse
            }

        } catch (error) {

            return {
                statusCode: (error as AxiosError).response!.status,
                message: (error as AxiosError).response!.data as string

            }
        }
    }
}