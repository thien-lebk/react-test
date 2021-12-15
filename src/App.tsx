import React from 'react';
import './App.css';
import { Form, Input, Button, Checkbox } from 'antd';

function App() {
  const onFinish = (values: any) => {    
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    // console.log('Failed:', errorInfo);
  };
/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
  },

};
/* eslint-enable no-template-curly-in-string */
let form;
  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      validateMessages={validateMessages}
      form={form}
    >
      <Form.Item
        label="Email"
        name="email"
       
        rules={[{ 
          type: 'email',required:true, whitespace: false, 

      },
      ({ getFieldValue }) => ({
         validator(_, email) {
                  
          
          if(email){
            const localPart = email.split('@')[0];
            let pattern = /[a-zA-Z0-9]/g;
            let result = localPart.match(pattern);
            if(!result && localPart){
              return Promise.reject(new Error('Local Part have all special character is not valid'));
            }
            // if(email.indexOf(' ') !== -1){
            //   return Promise.reject(new Error('Whitespace is not allowed !'));
            // }
          }
         
          if(email && email.length > 30){
            return Promise.reject(new Error('Email too large!'));
          }
          return Promise.resolve();

        },
      }),
    ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

export default App;
