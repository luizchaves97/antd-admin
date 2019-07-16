import React from 'react';
import { useDispatch } from 'react-redux';
import { Row, Form, Icon, Input, Button } from 'antd';

import config from '~/config';
import { signInRequest } from '~/store/modules/auth/actions';

import { Container, Logo } from './style';

const FormItem = Form.Item;

function SignIn({ form }) {
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    form.validateFields((err, { email, password }) => {
      if (!err) {
        dispatch(signInRequest(email, password));
      }
    });
  }

  const { getFieldDecorator } = form;

  return (
    <>
      <Container>
        <Logo>
          <img alt="logo" src={config.logoPath} />
          <span>{config.siteName}</span>
        </Logo>
        <form onSubmit={handleSubmit}>
          <FormItem hasFeedback>
            {getFieldDecorator('email', {
              rules: [
                {
                  required: true,
                  message: 'Please input your username!',
                },
              ],
            })(<Input prefix={<Icon type="user" />} placeholder="Email" />)}
          </FormItem>
          <FormItem hasFeedback>
            {getFieldDecorator('password', {
              rules: [
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ],
            })(
              <Input
                prefix={<Icon type="lock" />}
                type="password"
                placeholder="Password"
              />
            )}
          </FormItem>
          <Row>
            <Button type="primary" htmlType="submit">
              Sign in
            </Button>
          </Row>
        </form>
      </Container>
    </>
  );
}

export default Form.create()(SignIn);
