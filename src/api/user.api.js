import api from "./api";

export const registerUser = async (data) => {
    return api.post("/users/register", data);
}

export const loginUser = async (data) => {
    return api.post("/users/login", data);
}

export const getUserProfile = async () => {
    return api.get("/users/profile");
}

export const updatedUserProfile = async (data) => {
    return api.put("/users/profile", data);
}

export const updatedUserPassword = async (data) => {
    return api.put("/users/password", data);
}