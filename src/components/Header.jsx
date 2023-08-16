import React, { useState } from "react";
import { MdShoppingBasket, MdAdd, MdLogout } from "react-icons/md";
import { motion } from "framer-motion";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase.config";

import Logo from "../img/logo.png";
import Avatar from "../img/avatar.png";
import { Link } from "react-router-dom";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";

const Header = () => {
    const firebaseAuth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const [{ user }, dispatch] = useStateValue();
    // useStateValue() which is coming from our state provider our custom hook, this is going to take an object that is our user object [{user}, dispatch => oject, function]

    const [isMenu, setIsMenu] = useState(false); // initially that is gonna be false only if that is true we are going to render the menu

    const login = async () => {
        // if there is no user the login should happen
        if (!user) {
            const { user: { refreshToken, providerData } } = await signInWithPopup(firebaseAuth, provider)
            // now we having taht user refresh token and the provider data, we need to dispatch this provider data to our context that our data layer so that's why we created this (StateProvider.js) custom hook to do that, so import that
            dispatch({
                type: actionType.SET_USER,
                user: providerData[0],

                // we are setting the type as action type dot user that means we are calling this object (SET_USER in reducer.js) to set this value where 
                // and inside the reducer we are checking this if that is is equals to set user, we are updating the user information 

                // if we have a look at the console (inspect) we go to the provider data, it is an array, so we are accessing the zeroth index and that's having all the user information, we are getting tht and we are supplying it to our user state 
            });
            // push that logged in user information to the lcal storage
            localStorage.setItem('user', JSON.stringify(providerData[0]));
        } else {
            setIsMenu(!isMenu);
        }
    };
    // once the successfully logged in we are getting some response, that response it's returning the entire thing
    // if i'm logging in it's opening the pop-up, it's providing the user token and all the information, so we need this user only (user object)

    // when we successfully logged in we need to push this information to our user, we need to dispatch that informatio to that particular context.provider 

    // we need to use the user information in everywhere
    // we need to access the information so that's why we are gonna use the redux reducer as a conntext provider for our entire component

    return (
        <header className="fixed z-50 w-screen p-3 px-4 md:p-6 md:px-16">
            {/* desktop & tablet */}
            <div className="hidden md:flex w-full h-full items-center justify-between">
                <Link to={"/"} className="flex items-center gap-2">
                    <img src={Logo} className="w-8 object-cover" alt="logo" />
                    <p className="text-headingColor text-xl font-bold"> City</p>
                </Link>

                <div className="flex items-center gap-8">
                    <motion.ul
                        initial={{ opacity: 0, x: 200 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 200 }}
                        className="flex items-center gap-8">
                        <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">Home</li>
                        <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">Menu</li>
                        <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">About Us</li>
                        <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">Service</li>
                    </motion.ul>

                    <div className="relative flex items-center justify-center">
                        <MdShoppingBasket className="text-textColor text-2xl cursor-pointer" />
                        <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
                            <p className="text-xs text-white font-semibold">2</p>
                        </div>
                    </div>

                    <div className="relative">
                        <motion.img
                            whileTap={{ scale: 0.6 }}
                            src={user ? user.photoURL : Avatar}
                            // if that is user, print the user photo URL otherwise print the avatar
                            className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full"
                            alt="userprofile"
                            onClick={login}
                        />
                        {
                            isMenu && ( // if the only is that menu then render it (that means if it true render it)
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.6 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.6 }}
                                    className="w-40 bg-primary shadow-xl rounded-lg flex flex-col absolute top-12 right-0">
                                    {
                                        user && user.email === "jeonnafi123@gmail.com" && (
                                            <Link to={"/createItem"}>
                                                <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base">New Item <MdAdd /></p>
                                            </Link>
                                        )
                                    }
                                    <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base">Logout <MdLogout /></p>
                                </motion.div>
                            )
                        }
                    </div>
                </div>
            </div>

            {/* mobile */}
            <div className="flex items-center justify-between md:hidden w-full h-full">
                <Link to={"/"} className="flex items-center gap-2">
                    <img src={Logo} className="w-8 object-cover" alt="logo" />
                    <p className="text-headingColor text-xl font-bold"> City</p>
                </Link>
                <div className="relative">
                    <motion.img
                        whileTap={{ scale: 0.6 }}
                        src={user ? user.photoURL : Avatar}
                        // if that is user, print the user photo URL otherwise print the avatar
                        className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full"
                        alt="userprofile"
                        onClick={login}
                    />
                    {
                        isMenu && ( // if the only is that menu then render it (that means if it true render it)
                            <motion.div
                                initial={{ opacity: 0, scale: 0.6 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.6 }}
                                className="w-40 bg-primary shadow-xl rounded-lg flex flex-col absolute top-12 right-0">
                                {
                                    user && user.email === "jeonnafi123@gmail.com" && (
                                        <Link to={"/createItem"}>
                                            <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base">New Item <MdAdd /></p>
                                        </Link>
                                    )
                                }

                                <ul
                                    className="flex flex-col px-4 py-2 gap-8">
                                    <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">Home</li>
                                    <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">Menu</li>
                                    <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">About Us</li>
                                    <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">Service</li>
                                </ul>

                                <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base">Logout <MdLogout /></p>
                            </motion.div>
                        )
                    }
                </div>
            </div>
        </header>
    )
}

export default Header;