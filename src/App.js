import React from 'react'
import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";
import ContentContainer from "./components/content-container/content-container.component";
import {GlobalStyle} from './global.styles'
import {AppStyles, AppHeaderStyles, AppContentStyles, AppFooterStyles} from './App.styles'
import {checkIsAuthorized} from "./redux/auth/auth.actions";
import {connect} from "react-redux";

class App extends React.Component {

    componentDidMount() {
        this.props.checkUserSession()
    }

    render () {
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
}

const mapDispatchToProps = dispatch => ({
    checkUserSession: () => dispatch(checkIsAuthorized())
})

export default connect(null, mapDispatchToProps)(App)