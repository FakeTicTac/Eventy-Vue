import httpRequest from "@/services/common/http-request";
import useIdentityStore from "@/stores/identity/identityStore";

import type { AxiosError } from "axios";
import type { IFetchResponce } from "@/domains/IFetchResponce";

import { IdentityService } from "@/services/identity/identity-service";


/**
 * Basic Operations Processed With Backend.
 *  - Connect And Retreive Data.
 */
export class BaseService<TEntity> {

    /**
     * Defines Access To Identity Store - JWT Tokens.
     */
    identityStore = useIdentityStore();


    /**
     * Basic Service Constructor. Defines Specific Path To Be Accessed In Backend.
     */
    constructor(private path: string) {}

  
    /**
    * Method Requests Backends' To Add Data Into Database.
    * @param entity Defines Data To Be Inserted In Database.
    * @returns {Promise<IFetchResponce<TEntity>>} Response From API.
     */
    async add(entity : TEntity) : Promise<IFetchResponce<TEntity>> {

        let response;

        try {

            response = await httpRequest.post(`/${this.path}`, entity, {
                headers: {  // Manage Authorization Of The Data.
                    "Authorization": `bearer ${this.identityStore.$state.jwt?.accessToken}`
                }
            });

        } catch (error) {

            // Check If Error Occured Because of Refresh Token.
            if ((error as AxiosError).response!.status == 401 && this.identityStore.jwt) {

                // Try To Refresh Token.
                await this.tokenRefreser();

                // Token Is Not Refreshed.
                if (!this.identityStore.$state.jwt) {

                    return {
                        statusCode: (error as AxiosError).response!.status,
                        message: (error as AxiosError).response!.data as string
                    };
                } 

                // Access Data Again.
                response = await httpRequest.post(`/${this.path}`, entity, {
                    headers: {  // Manage Authorization Of The Data.
                        "Authorization": `bearer ${this.identityStore.$state.jwt?.accessToken}`
                    }
                });

                return { 
                    statusCode: response.status,
                    data: response.data
                };
            }

            return {
                statusCode: (error as AxiosError).response!.status,
                message: (error as AxiosError).response!.data as string
            };
        } 
       
        return { 
            statusCode: response.status,
            data: response.data
         };
    }

    /**
    * Method Requests Backends' To Update Data In Database.
     * @param {string} id Defines Record ID To Be Updated.
     * @param entity Defines Data To Be Updated In Database.
     * @returns {Promise<IFetchResponce<TEntity>>} Response From API.
     */
    async update(id : string, entity : TEntity) : Promise<IFetchResponce<TEntity>> {

        let response;

        // Manage Errors Sent From Backend.
        try {

            response = await httpRequest.put(`/${this.path}/${id}`, entity, {
                headers: {  // Manage Authorization Of The Data.
                    "Authorization": `bearer ${this.identityStore.$state.jwt?.accessToken}`
                }
            });

        } catch (error) {

            // Check If Error Occured Because of Refresh Token.
            if ((error as AxiosError).response!.status == 401 && this.identityStore.jwt) {

                // Try To Refresh Token.
                await this.tokenRefreser();

                // Token Is Not Refreshed.
                if (!this.identityStore.$state.jwt) {
                    
                    return {
                        statusCode: (error as AxiosError).response!.status,
                        message: (error as AxiosError).response!.data as string
                    };
                }

                // Access Data Again.
                response = await httpRequest.put(`/${this.path}/${id}`, entity, {
                    headers: {  // Manage Authorization Of The Data.
                        "Authorization": `bearer ${this.identityStore.$state.jwt?.accessToken}`
                    }
                });

                return { statusCode: response.status };
            }

            return {
                statusCode: (error as AxiosError).response!.status,
                message: (error as AxiosError).response!.data as string
            };
        } 

        return { statusCode: response.status };
    }

    /**
    * Method Requests Backends' To Remove Data From Database.
     * @param {string} id Defines Record ID To Be Deleted.
     * @returns {Promise<IFetchResponce<TEntity>>} Response From API.
     */
    async remove(id : string) : Promise<IFetchResponce<TEntity>> {

        let response;

        // Manage Errors Sent From Backend.
        try {

            response = await httpRequest.delete(`/${this.path}/${id}`, {
                headers: {  // Manage Authorization Of The Data.
                    "Authorization": `bearer ${this.identityStore.$state.jwt?.accessToken}`
                }
            });

        } catch (error) {

            // Check If Error Occured Because of Refresh Token.
            if ((error as AxiosError).response!.status == 401 && this.identityStore.jwt) {

                // Try To Refresh Token.
                await this.tokenRefreser();

                // Token Is Not Refreshed.
                if (!this.identityStore.$state.jwt) {

                    return {
                        statusCode: (error as AxiosError).response!.status,
                        message: (error as AxiosError).response!.data as string
                    };
                } 

                // Access Data Again.
                response = await httpRequest.delete(`/${this.path}/${id}`, {
                    headers: {  // Manage Authorization Of The Data.
                        "Authorization": `bearer ${this.identityStore.$state.jwt?.accessToken}`
                    }
                });

                return { statusCode: response.status };
            }

            return {
                statusCode: (error as AxiosError).response!.status,
                message: (error as AxiosError).response!.data as string
            };
        } 

        return { statusCode: response.status };
    }

    /**
    * Method Requests Backends' To Send All Data From Database.
     * @returns {Promise<IFetchResponce<TEntity[]>>} Response From API.
     */
    async getAll() : Promise<IFetchResponce<TEntity[]>> {
        
        let response;

        // Manage Errors Sent From Backend.
        try {

            response = await httpRequest.get(`/${this.path}`, {
                headers: {  // Manage Authorization Of The Data.
                    "Authorization": `bearer ${this.identityStore.$state.jwt?.accessToken}`
                }
            });

        } catch (error) {

            // Check If Error Occured Because of Refresh Token.
            if ((error as AxiosError).response!.status == 401 && this.identityStore.jwt) {

                // Try To Refresh Token.
                await this.tokenRefreser();

                // Token Is Not Refreshed.
                if (!this.identityStore.$state.jwt) {

                    return {
                        statusCode: (error as AxiosError).response!.status,
                        message: (error as AxiosError).response!.data as string
                    };
                } 

                // Access Data Again.
                response = await httpRequest.get(`/${this.path}`, {
                    headers: {  // Manage Authorization Of The Data.
                        "Authorization": `bearer ${this.identityStore.$state.jwt?.accessToken}`
                    }
                });

                return { 
                    statusCode: response.status,
                    data: response!.data
                };
            }

            return {
                statusCode: (error as AxiosError).response!.status,
                message: (error as AxiosError).response!.data as string
            };
        } 

        return { 
            statusCode: response.status,
            data: response!.data
        };
    }

    /**
    * Method Requests Backends' To Send Particular Data From Database.
     * @param {string} id Defines Record ID To Search For.
     * @returns {Promise<IFetchResponce<TEntity>>} Response From API.
     */
    async get(id : string) : Promise<IFetchResponce<TEntity>> {

        let response;

        // Manage Errors Sent From Backend.
        try {

            response = await httpRequest.get(`/${this.path}/${id}`, {
                headers: {  // Manage Authorization Of The Data.
                    "Authorization": `bearer ${this.identityStore.$state.jwt?.accessToken}`
                }
            });

        } catch (error) {

            // Check If Error Occured Because of Refresh Token.
            if ((error as AxiosError).response!.status == 401 && this.identityStore.jwt) {
                      
                // Try To Refresh Token.
                await this.tokenRefreser();

                // Token Is Not Refreshed.
                if (!this.identityStore.$state.jwt) {

                    return {
                        statusCode: (error as AxiosError).response!.status,
                        message: (error as AxiosError).response!.data as string
                    };
                } 

                // Access Data Again.
                response = await httpRequest.get(`/${this.path}/${id}`, {
                    headers: {  // Manage Authorization Of The Data.
                        "Authorization": `bearer ${this.identityStore.$state.jwt?.accessToken}`
                    }
                });

                return { 
                    statusCode: response.status,
                    data: response!.data
                };
            }

            return {
                statusCode: (error as AxiosError).response!.status,
                message: (error as AxiosError).response!.data as string
            };
        } 

        return { 
            statusCode: response.status,
            data: response!.data
        };
    }


    // Helping Methods.


    /**
     * Method Refreshes Tokens In Identity Storage.
     */
    async tokenRefreser() {
        
        // Define Identity Service For Token Refreshment And Refresh It.
        let identityService = new IdentityService();

        let refreshTokenResponse = await identityService.refreshIdentity();
        this.identityStore.$state.jwt = refreshTokenResponse.data === undefined ? null : refreshTokenResponse.data;
    }
}
