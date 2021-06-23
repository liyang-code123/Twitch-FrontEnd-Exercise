import React, {Component} from 'react';
import {Modal, Button, Form, Input, message} from 'antd';
import {UserOutlined, LockOutlined} from '@ant-design/icons';
import {register} from "../utils";

class Register extends Component {
    state = {
        displayModal : false
    }
    render() {
        const {displayModel} = this.state;
        return (
            <div>
                <Button shape="round"
                        type = "primary"
                        onClick={this.signupOnClick}
                        style={{marginRight: 20}}
                >
                    Register
                </Button>
                <Modal title="Register"
                       visible={displayModel}
                       onCancel={this.handleCancel}
                       footer={null}
                       destroyOnClass={true}
                >

                    <Form
                        name="normal_register"
                        onFinish={this.onFinish}
                        preserve={false}
                    >
                        <Form.Item
                            name="user_id"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Username!',
                                },
                            ]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="Username"/>
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Password!',
                                },
                            ]}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon"/>}
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Item>
                        <Form.Item
                            name="first_name"
                            rules={[{ required: true, message: 'Please input your Firstname!' }]}
                        >
                            <Input
                                placeholder="firstname"
                            />
                        </Form.Item>
                        <Form.Item
                            name="last_name"
                            rules={[{ required: true, message: 'Please input your Lastname!' }]}
                        >
                            <Input
                                placeholder="lastname"
                            />
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                Login</Button>
                        </Form.Item>
                    </Form>
                </Modal>
            </div>
        );
    }

    signupOnClick = () => {
        // displayModel => true
        this.setState({displayModel: true})
    }

    handleCancel = () => {
        // displayModel => false
        this.setState({displayModel: false})
    }

    onFinish = (values) => {
        // step1: collect username/password/firstname/lastname from the form
        // step2: send data to the server
        console.log('Received values of form: ', values);
        register(values)
            .then( res => {
                console.log(res)
                // close the modal
                this.setState({displayModel : false})
                message.success('Register successfully!')
            })
            .catch(err => {
                message.error(err.message)
            })
    };

}

export default Register;