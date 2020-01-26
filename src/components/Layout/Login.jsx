import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Icon, Input, Button, Checkbox, Col, Modal } from 'antd';
import { emailCheck, passwordCheck } from '../../utils/index';

const initialState = { email: '', password: '' };
const Login = () => {
  const [state, setState] = useState(initialState);
  const [formError, setFormError] = useState({ error: '' });
  const [modalState, setModalState] = useState({ visible: false });
  const history = useHistory();

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    const formData = { ...state, [name]: value };
    setState(formData);
  };

  const checkFormError = () => {
    const emailError = emailCheck(state.email, 'email');
    const passwordError = passwordCheck(state.password, 'password');

    if (emailError || passwordError) {
      setFormError({ error: emailError || passwordError });
      setModalState({ visible: true });
      return true;
    }
    return;
  };

  const toggleModal = () => {
    setModalState({ visible: false });
    setFormError({ error: '' });
  };

  return (
    <div className="login">
      <div className="login__body">
        <Modal
          title="Basic Modal"
          visible={modalState.visible}
          onOk={toggleModal}
          onCancel={toggleModal}
        >
          <p>{formError.error}</p>
        </Modal>
        <div className="login__body__title">
          <h2>Member Login</h2>
        </div>
        <div className="login__body__form">
          <Col xs={24}>
            <Form
              onSubmit={(e) => {
                e.preventDefault();
                const errorExists = checkFormError();
                if (errorExists) return;
                history.push('/users');
              }}
              className="login-form"
            >
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
