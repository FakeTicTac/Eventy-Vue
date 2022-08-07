
/**
 * Identity Related Response From Backend Server.
 */
 export interface IJWTResponse {

    accessToken: string;
    refreshToken: string;
    username?: string;

}
