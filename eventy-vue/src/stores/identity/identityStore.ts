import { defineStore } from "pinia";

import type { IJWTResponse } from "@/domains/identity/IJwtResponse";


/**
 * User Data Storage - JWT Sent From Backend.
 */
const useIdentityStore = defineStore({

    id: "identity",
    
    state: () => ({
        jwt: null as IJWTResponse | null,
    }),

    getters: {},
    actions: {}

});

export default useIdentityStore;