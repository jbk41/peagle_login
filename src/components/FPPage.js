import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import ForgotPassword from './FP';
import { Row, Col, Divider, Layout, Menu, Button, Space } from 'antd';
import '../css/Landing.css';
import "antd/dist/antd.css";
import {ReactComponent as Logo} from '../assets/logo.svg'

const { Header, Content, Footer } = Layout;

class ForgotPasswordPage extends React.Component {

//                    <p style={{color: "white", fontSize: 30, fontWeight: "lighter"}}> Peagle </p>

    render () {
        return (
            <>
            <div class="fp-container">
                <Header style={{backgroundColor: "#7184dc"}} layout="inline">
                    <Row justify="end" gutter={16}>
                        <Col>
                            <p style={{color: "white", fontSize: 30, fontWeight: "lighter"}}> Peagle </p>
                        </Col>
                        <Col>
                            <Button style={{color: "#7184dc"}} size="large">
                                <Link to="/">Login</Link>
                            </Button>
                        </Col>
                        <Col>
                            <Button style={{backgroundColor: "#e8b189", color: "white"}} size="large">
                                <Link to="/signup">Register</Link>
                            </Button>
                        </Col>
                    </Row>
                </Header>
                <Content>
                    <Row  justify="center" align="middle">
                        <Col>
                            <ForgotPassword />
                        </Col>
                    </Row>
                </Content>
            </div>
            </>
        )
    }
}

export default ForgotPasswordPage;
