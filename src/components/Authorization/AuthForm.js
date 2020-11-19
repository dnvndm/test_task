import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { connect, useSelector } from "react-redux";
import { login } from "../../context/reducers/authReducer";
import { Alert } from "antd";
import { useState } from "react";

const LoginForm = (props) => {
  const isAuth = useSelector(state => state.login.isAuth);

  const [alert, setAlert] = useState(false);

  const onFinish = (payload) => {
    console.log("Received values of form: ", payload);
    props.login(payload.username, payload.password);

    if (!isAuth) {
      setAlert(true);
    }
  };

  const onClose = (e) => {
    console.log(e, "I was closed.");
  };

  return (
    <>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your Username!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Введите логин"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Введите пароль"
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Войти
          </Button>
        </Form.Item>
        {alert ? (
          <Alert
            message="Неверный логин или пароль"
            description="Пожалуйста проверьте правильность введенных данных и повторите попытку"
            type="error"
            closable
            onClose={onClose}
          />
        ) : null}
      </Form>
    </>
  );
};

const mapDispatchToProps = {
  login,
};

export default connect(null, mapDispatchToProps)(LoginForm);
