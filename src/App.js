import React from 'react'
import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";
import ContentContainer from "./components/content-container/content-container.component";
import {GlobalStyle} from './global.styles'
import {AppStyles, AppHeaderStyles, AppContentStyles, AppFooterStyles} from './App.styles'

const App = () => {
    return <>
        <GlobalStyle/>
        <AppStyles>
            <AppHeaderStyles>
                <Header/>
            </AppHeaderStyles>
            <AppContentStyles>
                <ContentContainer/>
            </AppContentStyles>
            <AppFooterStyles>
                <Footer/>
            </AppFooterStyles>
        </AppStyles>
    </>
}

export default App