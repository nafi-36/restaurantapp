// this is our main supply 
// this is where we are going to crerte our context information on all those things

import React, { createContext, useContext, useReducer } from "react";

export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => (
    // this is our initial state and reducer which is coming from initalState dan reducer file
    // state context provider
    // the children is our component
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);
// reduccer as a parameter that we will pass this reducer over here
// this provider information is going to have value prop, and that value of prop is going to use reducer because we are sending the reducer 
// so it should use the user hook to pass those information so pass this reducer with our initial state 

// custom hook
export const useStateValue = () => useContext(StateContext);
// because every time you don't need to import use context that particular context name 
// so you don't need to use it like that you can directly use our use state value to dispatch and use all the child parameters inside it that's why we are exporting here

// how you can understand that our context provider is it's the top of that so you need to import this react component extension so go and install that extension 
// and if you click that this is our app for the top level of app we'll be having our state provider and the initial state we're having the initial state and we're having teh reducer function over here initially the user value is null so now we can access this user value anywhere inside this component
// we can access this user, value, context.provider in the context.provider you're having the values and inside the values you're having the user and user it's so far now
// when we successfully logged in we need to push this information to our user, we need to dispatch that informatio to that particular context.provider 