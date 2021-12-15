import { Form, Input, Button, Row, Col, Card } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";

const Login = () => {
  const layout = {
    labelCol: { span: 24 },
    wrapperCol: { span: 24 },
  };
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  /* eslint-disable no-template-curly-in-string */
  const validateMessages = {
    required: "Please input your ${name}! ",
    types: {
      email: "Email is not a valid!",
    },
  };
  /* eslint-enable no-template-curly-in-string */


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
          >
            <Row>
              <Col span="8"></Col>
              <Col span="8">
                {" "}
                <h1>Login</h1>
              </Col>
            </Row>
            <Form.Item
              name="email"
              rules={[
                {
                  type: "email",
                  required: true,
                  whitespace: false,
                },
                ({ getFieldValue }) => ({
                  validator(_, email) {
                    if (email) {
                      const localPart = email.split("@")[0];
                      let pattern = /[a-zA-Z0-9]/g;
                      let result = localPart.match(pattern);
                      if (!result && localPart) {
                        return Promise.reject(
                          new Error(
                            "Local Part have special character is not valid"
                          )
                        );
                      }
                    }                  
                    return Promise.resolve();
                  },
                }),
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Email"
              />
            </Form.Item>

            <Form.Item name="password" rules={[{ required: true }]}>
              <Input.Password
                prefix={<LockOutlined className="site-form-item-icon" />}
                placeholder="Password"
              />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button
                type="primary"
                htmlType="submit"
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Col>
    </Row>
  );
};

export default Login;

