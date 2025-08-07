import { Outlet } from 'react-router-dom';
import { Layout, Menu, type MenuProps } from 'antd';
import styles from './app-layout.module.css';

const { Header, Sider, Content } = Layout;

const AppLayout = () => {
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: <a href="/">пункт 1</a>,
    },
    {
      key: '2',
      label: <a href="/user/create">пункт 2</a>,
    },
    {
      key: '3',
      label: <a href="/login">Выйти</a>,
    },
  ];
  return (
    <Layout className={styles.layout}>
      <Header className={styles.header}>
        <h1>Header</h1>
      </Header>

      <Layout>
        <Sider className={styles.sider} width={200}>
          <Menu
            mode="inline"
            items={items}
            className={styles.menu}
          />
        </Sider>

        <Content className={styles.content}>
          <Outlet /> 
        </Content>
      </Layout>
    </Layout>
  );
};

export default AppLayout;