// we need to have few more informations

export const actionType = {
    SET_USER : 'SET_USER'
    // if we wanna update the user information we will call this action type then we will dispatch the updated value to that action type
}

// this is the action type and we are calling this object to set this value where and the insede the reducer we are checking this if that is is equals to set user we are updating the user information

// create the reduce of const reducer 
const reducer = (state, action) => {
    console.log(action);
    // what kind of action whenever the action is tringgering we will see what kind of access action is triggering

    switch(action.type){
        // whenever we are dispatching we will pass a type, through the type only we are going to change the case
        case actionType.SET_USER: 
        // that means if that type, whatever the type we are sending if that is equals to set user then use this case
            return{
                ...state,
                user : action.user,
            };
            // whatever the state keep all the state assets 
            // using the spread operator we are keeping the state value everything as it is and we are just updating only our user information
            // through action we will get the user information we are just updating that user information to our state
        default: 
            return state;
    }
}

export default reducer;

// whenever you are doing something we can do it by using the action type
// we can update the state by value by using the action type only so we are using the action type

// we are creating a data layer that data layer will be at the top of our entire component so that will add that layer will be accessible for our all the child components
// so that we can access it whenever we need it from data layer if there is any changes we are making, we will push it again to that data layer so that we will have the updated information
// so by this way we don't need to pass the state information from one component to another in case if you are having multiple child components you don't need to pass the state information to the entire child component 

// these things is not useable because we need to wrap our state reducer in our complete top level where our app is get initialized so go to our index.js we need to wrap our app into the state provider  