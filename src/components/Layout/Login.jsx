import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Form, Icon, Input, Button, Checkbox, Col, Modal } from 'antd';
import { emailCheck, passwordCheck } from '../../utils/index';
import userAuth, { handleResponse, endpoint } from '../../utils/userAuth';

const initialState = {
  user: { email: '', password: '' },
  error: '',
  showModal: false,
};
const options = {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({}),
};

const Login = () => {
  const [state, setState] = useState(initialState);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: '/users' } };
  const toggleModal = () => setState({ ...state, showModal: false, error: '' });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    const formData = { ...state.user, [name]: value };
    setState({ ...state, user: { ...formData } });
  };

  const checkFormError = () => {
    const emailError = emailCheck(state.user.email, 'email');
    const passwordError = passwordCheck(state.user.password, 'password');

    if (emailError || passwordError) {
      setState({
        ...state,
        error: emailError || passwordError,
        showModal: true,
      });
      return true;
    }
    return;
  };

  const userLogin = (e) => {
    e.preventDefault();
    const errorExists = checkFormError();
    if (errorExists) return;
    options.body = JSON.stringify({ ...state.user });

    fetch(`${endpoint}accounts/login/`, options)
      .then(handleResponse)
      .then((res) => {
        sessionStorage.setItem('token', res.token);
        userAuth.authenticate(() => history.replace(from));
      })
      .catch((err) => {
        setState({
          ...state,
          error: err.message.non_field_errors[0],
          showModal: true,
        });
      });
  };

  return (
    <div className="login">
      <div className="login__body">
        <Modal
          title="Basic Modal"
          visible={state.showModal}
          onOk={toggleModal}
          onCancel={toggleModal}
        >
          <p>{state.error}</p>
        </Modal>
        <div className="login__body__title">
          <h2>Member Login</h2>
        </div>
        <div className="login__body__form">
          <Col xs={24}>
            <Form onSubmit={userLogin} className="login-form">
              <Col xs={24}>
                <Form.Item>
                  <Input
                    prefix={
                      <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                    }
                    placeholder="Email"
                    type="email"
                    onChange={onChangeHandler}
                    name="email"
                  />
                </Form.Item>
              </Col>
              <Col xs={24}>
                <Form.Item>
                  <Input
                    prefix={
                      <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                    }
                    type="password"
                    placeholder="Password"
                    onChange={onChangeHandler}
                    name="password"
                  />
                </Form.Item>
              </Col>
              <Col xs={24}>
                <Form.Item>
                  <Col xs={12}>
                    <Checkbox>Remember me</Checkbox>
                  </Col>
                  <Col xs={12}>
                    <a className="login-form-forgot" href="/">
                      Forgot password
                    </a>
                  </Col>
                  <Col xs={24} style={{ textAlign: 'center' }}>
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="login-form-button"
                      style={{ marginTop: '25px' }}
                    >
                      Log in
                    </Button>
                  </Col>
                </Form.Item>
              </Col>
            </Form>
          </Col>
        </div>
      </div>
    </div>
  );
};

export default Login;
