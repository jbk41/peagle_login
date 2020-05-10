import React from 'react';
import Login from './Login';
import { Row, Col, Divider } from 'antd';
import '../css/LoginPage.css';


class LoginPage extends React.Component {
    render () {
        return (
            <div class="container">
                
                <Row  justify="center" align="middle">
                    <Col xs={{span:20, offset: 0}} sm={{span:16, offset: 0}} md={{span:12, offset: 0}} lg={{span:8, offset: 10}} xl={{span:8, offset: 10}}>
                        <Login />
                    </Col>
                </Row>
            </div>
        )
    }
}

export default LoginPage;
