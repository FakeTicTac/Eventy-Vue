
/**
 * Data Response From Backend Server.
 */
 export interface IFetchResponce<TData> {

    statusCode: number;
    data?: TData;
    message?: string;

}
