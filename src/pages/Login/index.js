import React, { PureComponent } from 'react';
import { Button, Row, Form, Input } from 'antd';

import config from 'config';

import { Container, Logo } from './style';

const FormItem = Form.Item;

class Login extends PureComponent {
  render() {
    const { form } = this.props;
    const { getFieldDecorator } = form;

    return (
      <>
        <Container>
          <Logo>
            <img alt="logo" src={config.logoPath} />
            <span>{config.siteName}</span>
          </Logo>
          <form>
            <FormItem hasFeedback>
              {getFieldDecorator('username', {
                rules: [
                  {
                    required: true,
                  },
                ],
              })(<Input placeholder="Username" />)}
            </FormItem>
            <FormItem hasFeedback>
              {getFieldDecorator('password', {
                rules: [
                  {
                    required: true,
                  },
                ],
              })(<Input type="password" placeholder="Password" />)}
            </FormItem>
            <Row>
              <Button type="primary">Sign in</Button>
            </Row>
          </form>
        </Container>
      </>
    );
  }
}

export default Form.create()(Login);
