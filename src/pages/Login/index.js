import React, { Component } from 'react';
import { Row, Form, Icon, Input, Button } from 'antd';

import config from 'config';
import api from 'services/api';
import { login } from 'services/auth';

import { Container, Logo } from './style';

const FormItem = Form.Item;

class Login extends Component {
  state = {
    email: '',
    password: '',
  };

  handleSignIn = async e => {
    e.preventDefault();
    const { email, password } = this.state;
    const { form } = this.props;
    form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
    try {
      const { history } = this.props;
      const response = await api.post('/session', { email, password });
      login(response.data.token);
      // Verificar se usuario existe
      // Criar Sessao
      // Adicionar reducer do usuario
      history.push('/dashboard');
    } catch (err) {
      console.log('Error na autenticação dos dados');
    }
  };

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
          <form onSubmit={this.handleSignIn}>
            <FormItem hasFeedback>
              {getFieldDecorator('username', {
                rules: [
                  {
                    required: true,
                    message: 'Please input your username!',
                  },
                ],
              })(
                <Input
                  prefix={<Icon type="user" />}
                  placeholder="Username"
                  onChange={e => this.setState({ username: e.target.value })}
                />
              )}
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
                  onChange={e => this.setState({ password: e.target.value })}
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
}

export default Form.create()(Login);
