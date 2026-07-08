import api from "./api";

export const createContactMessage = (data) => {
    return api.post("/contacts", data);
};