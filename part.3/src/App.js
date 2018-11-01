import React, {Component,Fragment} from 'react';
import Header from './Header';
import Container from './Container';
import Footer from './Footer';

class App extends Component{
    render(){
        return(
            <Fragment>
                <Header />
                <Container />
                <Footer />
            </Fragment>
        )
    }
};

export default App;