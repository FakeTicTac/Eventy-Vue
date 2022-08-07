import httpRequest from "@/services/common/http-request";

import { BaseService } from "@/services/common/base-service";

import type { AxiosError } from "axios";
import type { IFetchResponce } from "@/domains/IFetchResponce";

import type { IEvent } from "@/domains/IEvent";


/**
 * Event Service Basic Operations With Backend. 
 *  - Connect And Retreive Data.
 */
export class EventService extends BaseService<IEvent> {

    /**
     * Basic Service Constructor. Defines Specific Path To Be Accessed In Backend.
     */
    constructor() {
        super("event");
    }


    /**
     * Method Requests Backends' To Send All Data From Database.
     * @returns {Promise<IFetchResponce<TEntity[]>>} Response From API.
     */
    async getAllByPartialName(partialName: string): Promise<IFetchResponce<IEvent[]>> {

        let response;

        // Manage Errors Sent From Backend.
        try {

            response = await httpRequest.get(`/event/${partialName}}`, {
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
                response = await httpRequest.get(`/event`, {
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
}
