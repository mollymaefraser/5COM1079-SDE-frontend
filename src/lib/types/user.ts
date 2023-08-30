import { writable } from "svelte/store";

export default writable({
    userID: 0,
    userFirstName: "",
    userLastName: "",
    userEmail: "",
    isUserAdmin: false
})