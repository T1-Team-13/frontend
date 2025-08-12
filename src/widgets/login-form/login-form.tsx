import styles from "./login-form.module.css";
import { Form, Input, Button } from "antd";

const LoginForm = () => {
    const [form] = Form.useForm();
    return (
        <Form
            form={form}
            layout="vertical"
            className={styles.form}
        >
            <Form.Item
                name="email"
                rules={[{ required: true, message: "Пожалуйста, введите логин", type: "email" }]}
            >
                <Input placeholder="Email" />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[{ required: true, message: "Пожалуйста, введите пароль" }]}
            >
                <Input.Password placeholder="Пароль" />
            </Form.Item>
            <Form.Item name="submit">
                <Button type="primary" htmlType="submit">
                    Войти
                </Button>
            </Form.Item>
        </Form>
    );
};

export default LoginForm;