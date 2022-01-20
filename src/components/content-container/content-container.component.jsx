import React from "react";
import {Routes, Route} from 'react-router-dom';
import Homepage from "../../pages/home-page/home-page.component";
import SignInAndSignUp from "../../pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page.component";
import EventPage from "../../pages/event-page/event-page.component";

const ContentContainer = () => {
    return <>
        <Routes>
            <Route exact path='/' element={<Homepage/>}/>
            <Route exact path='/sign-in-and-sign-up' element={<SignInAndSignUp/>}/>
            <Route exact path='/event/:eventId' element={<EventPage />}/>
        </Routes>
    </>
}

export default ContentContainer