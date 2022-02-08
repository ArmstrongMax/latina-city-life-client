import React from "react";
import {Routes, Route} from 'react-router-dom';
import Homepage from "../../pages/home-page/home-page.component";
import SignInAndSignUp from "../../pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page.component";
import EventPage from "../../pages/event-page/event-page.component";
import UserPage from "../../pages/user-page/user-page.component";
import EditUserDataPage from "../../pages/edit-user-data-page/edit-user-data-page.component";
import AddNewEventPage from "../../pages/add-new-event-page/add-new-event-page.component";
import {ContentContainerStyles} from "./content-container.styles";




const ContentContainer = () => {
    return <ContentContainerStyles>
        <Routes>
            <Route exact path='/' element={<Homepage/>}/>
            <Route exact path='/sign-in-and-sign-up' element={<SignInAndSignUp/>}/>
            <Route exact path='/event/:eventId' element={<EventPage />}/>
            <Route exact path='/users/:userId' element={<UserPage/>}/>
            <Route exact path='/edit-profile' element={<EditUserDataPage/>}/>
            <Route exact path='/add-event' element={<AddNewEventPage/>}/>
        </Routes>
    </ContentContainerStyles>
}

export default ContentContainer