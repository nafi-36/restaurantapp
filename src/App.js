import React from "react";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { CreateContainer, Header, MainContainer } from "./components";

const App = () => {
    return (
        <AnimatePresence exitBeforeEnter>
            <div className="w-screen h-auto flex flex-col bg-primary">
                <Header />

                <main className="mt-24 p-8 w-full">
                    <Routes>
                        <Route path="/*" element={<MainContainer />} />
                        <Route path="/createItem" element={<CreateContainer />} />
                    </Routes>
                </main>
            </div>
        </AnimatePresence>
    )
}

export default App;

// createItems is for admin purpose only because only the admin able to add the items and all those things not the normal user
// we need to wrap the entire app component into the animate presence, this will make sure that all the animation whatever we are going to do it's going to be presence inside this entire component 