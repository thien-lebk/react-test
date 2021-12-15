import { Form, Input, Button, Row, Col, Card } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";

const Login = () => {

  const onFinish = (values: any) => {
    alert("Login success!")
  };
  
  const [form] = Form.useForm();
  const [, forceUpdate] = useState({});
  const layout = {
    labelCol: { span: 24 },
    wrapperCol: { span: 24 },
  };

  // To disable submit button at the beginning.
  useEffect(() => {
    forceUpdate({});
  }, []);

  /* eslint-disable no-template-curly-in-string */
  const validateMessages = {
    required: "Please input your ${name}! ",
    types: {
      email: "Email is not a valid!",
    },
  };
  /* eslint-enable no-template-curly-in-string */

  async function validateEmail( email:any) {
    if (email) {
      var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if(!email.match(mailformat))
      {
        return Promise.reject(
          new Error(
            "Email is not a valid!"
          )
        );
      }
    }
    return Promise.resolve();
  };
  
  return (
    <Row justify="center" align="middle" style={{ minHeight: "80vh" }}>
      <Col>
        <Card style={{ minWidth: "300px" }}>
          <Form
            {...layout}
            name="basic"
            onFinish={onFinish}
            autoComplete="off"
            validateMessages={validateMessages}
            form={form}
          >
            <Row justify="center">
              <Col span="8" >
                <h1>Login</h1>
              </Col>
            </Row>
           
            <Form.Item
              name="email"
              rules={[
                {
                 
                  required: true,
                  whitespace: false,
                },
                ({ getFieldValue }) => ({
                  validator(_, email) {
                   return validateEmail(email);
                  },
                }),
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Email"
                size="large"
              />
            </Form.Item>

            <Form.Item name="password" rules={[{ required: true }]}>
              <Input.Password
                prefix={<LockOutlined className="site-form-item-icon" />}
                placeholder="Password"
                size="large"
              />
            </Form.Item>
            <Form.Item shouldUpdate wrapperCol={{ offset: 8, span: 16 }}>
              {() => (
                <Button
                  type="primary"
                  htmlType="submit"
                  size="large"
                  disabled={
                    !form.isFieldsTouched(true) ||
                    !!form
                      .getFieldsError()
                      .filter(({ errors }) => errors.length).length
                  }
                >
                  Submit
                </Button>
              )}
            </Form.Item>
          </Form>
        </Card>
      </Col>
    </Row>
  );
};

export default Login;
