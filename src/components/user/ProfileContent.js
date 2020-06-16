import React, {useState} from 'react';
import { Row, Col, Divider, Layout } from 'antd';
import { Form, Input, Button, Checkbox, DatePicker, Drawer, Descriptions, Card } from 'antd';
import moment from 'moment';
import Nav from './Nav';
import "antd/dist/antd.css";
import {EditOutlined} from '@ant-design/icons';


const { Header, Content, Footer, Sider } = Layout;

class ProfileContent extends React.Component {

    state = {
        userID: 'jbkr1',
        firstName: 'justin',
        lastName: 'kim',
        email: 'jbk41@duke.adu',
        doB: '12/12/1912',
        org: 'Duke',
        headshot: 'google.com',
        drawerVisible: false

    }
    dateFormat = 'MM-DD-YYYY';



    onFinish = values => {
        this.setState({
            userID: values.userID,
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            doB: values.birthday.format(this.dateFormat),
            org: values.organization
        });
        console.log(values);
        this.onClose();
    }

    onCancel = () => {
        this.onClose();
    }

    onClose= () => {
        this.setState({
            drawerVisible: false,
        });
    }

    onEdit= () => {
        this.setState({
            drawerVisible: true,
        });
    }

    profileForm = () => {

        return (
            <Drawer
            title="Edit your profile."
            width={720}
            onClose={this.onClose}
            visible={this.state.drawerVisible}
            bodyStyle={{ paddingBottom: 80 }}
            >
                <Form
                layout="vertical"
                hideRequiredMark
                onFinish={this.onFinish}
                initialValues={{
                    userID: this.state.userID,
                    firstName: this.state.firstName,
                    lastName: this.state.lastName,
                    email: this.state.email,
                    birthday: moment(this.state.doB, this.dateFormat),
                    organization: this.state.org
                }}
                >

                            <Row>
                                <Col offset={1} span={16}>
                                    <Form.Item
                                        label="User ID"
                                        name="userID"
                                    >
                                        <Input/>
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row>
                                <Col offset={1} span={16}>
                                    <Form.Item
                                        label="First Name"
                                        name="firstName"
                                    >
                                        <Input/>
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row>
                                <Col offset={1} span={16}>
                                    <Form.Item
                                        label="Last Name"
                                        name="lastName"
                                    >
                                        <Input />
                                    </Form.Item>
                                </Col>
                            </Row>

                            <Row>
                                <Col offset={1} span={16}>
                                    <Form.Item
                                        label="Email"
                                        name="email"
                                    >
                                        <Input/>
                                    </Form.Item>
                                </Col>
                            </Row>

                            <Row>
                                <Col offset={1} span={16}>
                                    <Form.Item
                                        label="Birthday"
                                        name="birthday"
                                    >
                                        <DatePicker format={this.dateFormat} />
                                    </Form.Item>
                                </Col>
                            </Row>

                            <Row>
                                <Col offset={1} span={16}>
                                    <Form.Item
                                        label="Organization"
                                        name="organization"
                                    >
                                        <Input/>
                                    </Form.Item>
                                </Col>
                            </Row>

                            <Layout>
                                <Footer style={{background: 'white'}}>
                                    <div style={{align: 'left'}}>
                                        <Button onClick={this.onCancel} style={{color: "#7184dc", marginRight: 8}}>
                                            Cancel
                                        </Button>


                                        <Button type="primary" htmlType="submit" style={{backgroundColor: "#e8b189", color: "white"}}>
                                            Submit
                                        </Button>
                                    </div>
                                </Footer>
                            </Layout>
                </Form>
            </Drawer>
        )
    }

    profileView = () => {
        return (
            <Card title="Profile" headStyle={{backgroundColor: '#e8b189', textAlign: 'center', color: 'white', textSize: 'large'}} style={{ width: 300 }} bordered='false '>

                <Descriptions title="" column={1}>
                    <Descriptions.Item label="User ID">{this.state.userID}</Descriptions.Item>
                    <Descriptions.Item label="First Name">{this.state.firstName}</Descriptions.Item>
                    <Descriptions.Item label="Last Name">{this.state.lastName}</Descriptions.Item>
                    <Descriptions.Item label="Email">{this.state.email}</Descriptions.Item>
                    <Descriptions.Item label="Birthday">{this.state.doB}</Descriptions.Item>
                    <Descriptions.Item label="Organization">{this.state.org}</Descriptions.Item>
                </Descriptions>
            </Card>
        )
    };




        render () {
            return (
                <>
                <div class="fp-container">
                    <Header style={{backgroundColor: "#7184dc"}} layout="inline">
                        <Row justify="end" gutter={16}>
                            <Col>
                                <p style={{color: "white", fontSize: 30, fontWeight: "lighter"}}> Peagle </p>
                            </Col>
                        </Row>
                        <Row justify="end" align="middle">
                            <Button style={{color: "#7184dc"}} size="large" icon={<EditOutlined />}  onClick={this.onEdit} />
                        </Row>
                        <Row justify="center" align="middle">
                            <Button style={{color: "#7184dc"}} size="large" >
                                Profile Settings
                            </Button>
                        </Row>
                    </Header>
                    <Content>
                        <Row  justify="center" align="middle">
                            <Col>
                                {this.profileView()}
                            </Col>
                        </Row>
                    </Content>
                </div>
                {this.profileForm()}
                </>
            )
        }
    }

export default ProfileContent;
