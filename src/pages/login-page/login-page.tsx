import styles from "./login-page.module.css";
import LoginForm from "@/widgets/login-form";

const LoginPage = () => {
  return (
    <main className={styles.formWrapper}>
      <img src='icons/T1Logo.png' alt='logo' />
      <div className={styles.formContent}>
        <LoginForm/>
      </div>
    </main>
  );
};

export default LoginPage;