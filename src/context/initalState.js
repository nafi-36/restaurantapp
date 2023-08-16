import { fetchUser } from "../utils/fetchLocalStorageData";

// we are going to define all the initial state of our user

// we need to verify whenever the browser refresh check the local storage if there is user use it otherwise set it to now
// utils folder => inside the utils folder we're going to write our support function to fetch all the local storage informations and all those things

const userInfo = fetchUser();

export const initialState = {
    user: userInfo,
};

