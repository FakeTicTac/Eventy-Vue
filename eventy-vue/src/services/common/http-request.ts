import axious from "axios";

/**
 * Basic HTTPS Request To The Backend.
 *  - Predifined Common Headers and URL.
 */
const httpRequest = axious.create({

    baseURL: "https://localhost:7199/api/v1",
    headers: {
        "Content-Type": "application/json"
    }

})

export default httpRequest;