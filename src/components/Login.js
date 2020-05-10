import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { Row, Col, Divider, Space } from 'antd';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import "antd/dist/antd.css";
import "../css/Login.css";


const layout = {
  labelCol: {
    span: 0
  },
  wrapperCol: {
    span: 24
  },
};
const tailLayout = {
  wrapperCol: {
    span: 24
  },
};




class Login extends React.Component {

    state = {
        username: "root",
        password: "pass",
    }


    onFinish = values => {
      this.setState({
          username: values.username,
          password: values.password
      });
      console.log(this.state.username);
      console.log(this.state.password);
    };

    onChangeUsername = e => {
        this.setState({
            username: e.target.value
        });
        console.log(this.state.username);
    }

    onChangePassword = e => {
        this.setState({
            password: e.target.password
        });
        console.log(this.state.password);
    }

    onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    render() {
        return (
            <>
            <div class="login-text">
                Peagle Login
            </div>

            <Form
                {...layout}
                name="basic"
                onFinish = {this.onFinish}
                onFinishFailed = {this.onFinishFailed}
            >
                <Form.Item
                    name="username"
                    rules={[
                    {
                        required: true,
                        message: 'Username required.',
                    },
                    ]}
                    onChange={this.onChangeUsername}
                >
                    <Input placeholder='Username'/>
                </Form.Item>

                <Form.Item
                    name="password"
                    rules={[
                    {
                    required: true,
                    message: 'Password required.',
                    },
                    ]}
                    onChange={this.onChangePassword}
                >
                    <Input placeholder='Password'/>
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Space>
                        <Button type="primary" htmlType="submit">
                            Login
                        </Button>
                        <Link to="/reset-password">
                            Forgot Password?
                        </Link>
                    </Space>
                </Form.Item>
            </Form>
            </>
        )
    }
}

export default Login;
