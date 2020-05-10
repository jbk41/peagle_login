import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import "antd/dist/antd.css";


const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};




class LoginPage extends React.Component {

    state = {
        username: "root",
        password: "pass",
    }


    onFinish = values => {
      console.log('Success:', values);
      this.setState({
          username: values.username,
          password: values.password
      });
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
            <Form
                {...layout}
                name="basic"
                onFinish = {this.onFinish}
                onFinishFailed = {this.onFinishFailed}
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                    {
                        required: true,
                        message: 'Username required.',
                    },
                    ]}
                    onChange={this.onChangeUsername}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                    {
                    required: true,
                    message: 'Password required.',
                    },
                    ]}
                    onChange={this.onChangePassword}
                >
                    <Input.Password/>
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        Login
                    </Button>
                    <Link to="/reset-password">
                        Forgot Password?
                    </Link>
                </Form.Item>
            </Form>
        )
    }
}

export default LoginPage;
