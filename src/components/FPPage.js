import React from 'react';
import { Form, Input, Button} from 'antd';
import "antd/dist/antd.css";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
}
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
}



class ForgotPasswordPage extends React.Component {
    
    state = {
        email: 'root'
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
            <Form
                {...layout}
                name="basic"
                initialValues={{
                remember: true,
                }}
                onFinish={this.onFinish}
                onFinishFailed={this.onFinishFailed}
                    
            >
                <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                        {
                            required: true,
                            message: 'Email required.',
                        },
                        ]}
                >
                    <Input />
                </Form.Item>
            
                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>

            </Form>
        )
    }
}
                           
export default ForgotPasswordPage;