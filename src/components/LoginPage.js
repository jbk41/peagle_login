import React from 'react';
import Login from './Login';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import { Row, Col, Divider } from 'antd';
import '../css/Landing.css';
import "antd/dist/antd.css";
import {ReactComponent as Logo} from '../assets/logo.svg'

class LoginPage extends React.Component {
    render () {
        return (
            <>
            <div className='container'>
                <Row justify="start" align="middle">
                    <Col>
                        <Logo />
                    </Col>
                    <Col xs={{span:12, offset: 12}} sm={{span:12, offset: 12}} md={{span:12, offset: 12}} lg={{span:12, offset: 12}} xl={{span:12, offset: 12}}>
                        <Login />
                    </Col>
                </Row>
            </div>
            </>
        )
    }
}

// <Row  justify="start" align="middle">
//     <Col xs={{span:12, offset: 12}} sm={{span:12, offset: 12}} md={{span:12, offset: 12}} lg={{span:12, offset: 12}} xl={{span:12, offset: 12}}>
//         <div class="container">
//             <Login />
//         </div>
//     </Col>
//
//     <Col xs={{span:10, offset: 0}} sm={{span:10, offset: 0}} md={{span:10, offset: 0}} lg={{span:10, offset: 0}} xl={{span:10, offset: 0}}>
//         <div class="container">
//             <Logo />
//         </div>
//     </Col>
// </Row>

// <div class='logo-container'>
//     <Logo />
// </div>
// <div class="container">
//<Col xs={{span:12, offset: 0}} sm={{span:12, offset: 0}} md={{span:12, offset: 0}} lg={{span:12, offset: 0}} xl={{span:12, offset: 0}}>
//    <Logo />
//</Col>
//     <Row  justify="center" align="middle">
//         <Col xs={{span:20, offset: 0}} sm={{span:16, offset: 0}} md={{span:12, offset: 0}} lg={{span:9, offset: 10}} xl={{span:8, offset: 10}}>
//             <Login />
//         </Col>
//     </Row>
export default LoginPage;
