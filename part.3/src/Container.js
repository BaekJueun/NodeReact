import React, {Component,Fragment} from 'react';

class Container extends Component{
    state = {
        num : 0
    };
    btnPlus = () => {
        this.setState({
            num : this.state.num +1
        })
    }
    btnMius = () =>{
        this.setState({
            num : this.state.num -1
        })
    }
    render(){
        return(
            <Fragment>
                <div id="container">
                    <div className="inner">
                        <div className="mainVisual">MainVisual</div>
                        <div className="count">
                            <h2>카운터</h2>
                            <p>값 : {this.state.num} </p>
                            <button onClick={this.btnPlus}>+</button>
                            <button onClick={this.btnMius}>-</button>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Container;