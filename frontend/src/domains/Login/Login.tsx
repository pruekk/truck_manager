import React from 'react'
import { Form, Button, Input, Space, Divider, message } from 'antd'
import { LoginFormSubmitValue } from '../../types/domains/Login'

const DomainsLogin: React.FC = () => {
    const [formLogin] = Form.useForm()
    const handleSubmitForm = async (values: LoginFormSubmitValue) => {
        console.log(values.username)
        console.log(values.password)
    }
    return (
        <Form 
        form={formLogin}
        name="formLogin"
        layout="vertical"
        onFinish={handleSubmitForm}
        onReset={() => formLogin.resetFields()}
        >
            <Form.Item
            label="Username or Email"
            name="username"
            rules={[
                {
                    required: true,
                    message: "Please enter your email or username"
                }
            ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
            label="Password"
            name="password"
            rules={[
                {
                    required: true,
                    message: "Please enter your password"
                }
            ]}
            >
                <Input.Password />
            </Form.Item>
            <Form.Item>
                <Divider />
                <Space>
                    <Button type="primary" htmlType="submit">
                        Sign In
                    </Button>
                </Space>
                <Space>
                    <Button htmlType="reset">
                        Reset Form
                    </Button>
                </Space>
                <Space>
                    <Button onClick={() => {
                        formLogin.setFieldsValue({
                            username: 'pruek',
                            password: 'test1234'
                        })
                    }}>
                        Auto Fill Data
                    </Button>
                </Space>
            </Form.Item>
        </Form>
    )
}

export default DomainsLogin