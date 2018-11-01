import React, {Component,Fragment} from 'react';

class Header extends Component{
    render(){
        return(
            <Fragment>
                <div id="header">
                    <div className="inner">
                        <h1 className="logo">LOGO</h1>
                        <ul className="gnb">
                            <li><a href="http://google.com" target="_blank" rel="">Google</a></li>
                            <li><a href="http://naver.com" target="_blank" rel="">Naver</a></li>
                            <li><a href="http://daum.net" target="_blank" rel="">Daum</a></li>
                        </ul>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Header;