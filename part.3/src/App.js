import React, {Component,Fragment} from 'react';
import Blend from './Blend';
import Test from './Test';
import Nature from './Nature';

class App extends Component {
    render(){
        return(
            <Fragment>
                <div>App</div>
                <Blend />
                <Test />
                <Nature />
            </Fragment>
            
        ) 
    }
}


export default App;