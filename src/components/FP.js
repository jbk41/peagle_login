import React from 'react';
import { Form, Input, Button, Card, Space} from 'antd';
import "../css/Landing.css";
import {SendOutlined} from '@ant-design/icons';

import "antd/dist/antd.css";

const layout = {
  labelCol: {
    span: 0,
  },
  wrapperCol: {
    span: 24,
  },
}
const tailLayout = {
  wrapperCol: {
    span: 24,
  },
}



class ForgotPassword extends React.Component {

    state = {
        email: 'root'
    }

    onChangeEmail = e => {
        this.setState({
            email: e.target.value
        });
        console.log(this.state.email);
    }

    onFinish = values => {
        this.setState({
            email: values.email
        })
        console.log(this.state.email)
    }

    onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    render (){
        return (
            <>
                <Card title="Forgot password?" headStyle={{backgroundColor: '#e8b189', textAlign: 'center', color: 'white'}} style={{ width: 300 }} bordered='false '>
                    <p>Enter your email and we'll send you a reset password link.</p>
                    <Form
                        {...layout}
                        name="basic"
                        initialValues={{
                        remember: true,
                        }}
                        onFinish={this.onFinish}
                        onFinishFailed={this.onFinishFailed}
                    >
                        <Space>
                            <Form.Item
                                    name="email"
                                    rules={[
                                    {
                                        required: true,
                                        message: 'Email required.',
                                    },
                                    ]}
                                    onChange={this.onChangeEmail}
                            >
                                <Input placeholder="Email address"/>
                            </Form.Item>

                            <Form.Item {...tailLayout}>
                                <Button style={{ background: "#7184dc", border: "none"}}type="primary" htmlType="submit" icon={<SendOutlined />} shape="circle" >
                                </Button>
                            </Form.Item>
                        </Space>
                    </Form>
                </Card>
            </>
        )
    }



}

export default ForgotPassword;


//
// <div>
//     <p class="maintext">Forgot your password?</p>
//     <p class="secondarytext"> Enter your email below to reset your password..</p>
// </div>
// <Form
//     {...layout}
//     name="basic"
//     initialValues={{
//     remember: true,
//     }}
//     onFinish={this.onFinish}
//     onFinishFailed={this.onFinishFailed}
// >
//     <Form.Item
//             name="email"
//             rules={[
//             {
//                 required: true,
//                 message: 'Email required.',
//             },
//             ]}
//             onChange={this.onChangeEmail}
//     >
//         <Input placeholder="Email address"/>
//     </Form.Item>
//
//     <Form.Item {...tailLayout}>
//         <Button type="primary" htmlType="submit" shape="round">
//             Submit
//         </Button>
//     </Form.Item>
//
// </Form>
