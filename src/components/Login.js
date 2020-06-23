import React from 'react';
import { Form, Input, Button, Space } from 'antd';
import { Link} from 'react-router-dom';
import UserProfileInfoContext from '../context/UserProfileInfoContext';
import "../css/Landing.css";
import "antd/dist/antd.css";


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
    static contextType = UserProfileInfoContext;

    state = {
        username: "root",
        password: "pass",
    }

    loginAccount = (loginID, password) => {
        // blah blah somehow gets stuff from user info endpoint
        // it returns some profile object

        const profile = {
            userID: 'diffJbk',
            firstName: 'Justin Diff',
            lastName: 'asd',
            email: 'asfdsaf@duke.adu',
            doB: '1/1/2000',
            org: 'DUKE UNIVERSITY'
        }

        this.context.onProfileUpdate(profile);
    }


    onFinish = values => {
      this.setState({
          username: values.username,
          password: values.password
      });

      this.loginAccount(values.username, values.password);
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
            password: e.target.value
        });
        console.log(this.state.password);
    }

    onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    render() {
        return (
            <>

            <div>
                <p class="maintext">Welcome to Peagle.</p>
                <p class="secondarytext">Login with your email or username.</p>
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
                    <Input placeholder='Username or email'/>
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
                    <Input.Password placeholder='Password' class="form-input"/>
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <div class="tail">
                        <Space>
                            <Link to='user-profile'>
                                <Button type="primary" htmlType="submit" size="medium"  shape="round" class="submit-button">
                                    Login
                                </Button>
                            </Link>
                            <Link to="/reset-password">
                                Forgot Password?
                            </Link>
                        </Space>
                    </div>
                </Form.Item>
            </Form>
            <div>
                <p>
                    Need an account? Sign up <Link to="/signup">here!</Link>
                </p>
            </div>
            </>
        )
    }
}

export default Login;
