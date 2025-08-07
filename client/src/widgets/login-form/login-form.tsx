import styles from "./login-form.module.css";
import { Form, Input, Button, Space } from "antd";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
    const [form] = Form.useForm();
    return (
        <Form
            form={form}
            layout="vertical"
            className={styles.form}
        >
            <Form.Item
                label="логин"
                name="email"
                rules={[{ required: true, message: "Пожалуйста, введите логин", type: "email" }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="пароль"
                name="password"
                rules={[{ required: true, message: "Пожалуйста, введите пароль" }]}
            >
                <Input.Password />
            </Form.Item>
            <Form.Item name="submit">
                <Space className={styles.submit}>
                    <Button type="primary" htmlType="submit">
                        Войти
                    </Button>
                </Space>
            </Form.Item>
        </Form>
    );
};

export default LoginForm;
