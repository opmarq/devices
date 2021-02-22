import React from "react";
import { Layout, Menu } from "antd";
import { DashboardOutlined, BuildOutlined } from "@ant-design/icons";
import { Route, Switch, Link, useLocation } from "react-router-dom";

import Logo from "./components/Logo";
import DevicesPage from "./pages/Devices";
import OverviewPage from "./pages/Overview";

const { Content, Footer, Sider } = Layout;

function App() {
  const location = useLocation();
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider breakpoint="lg" collapsedWidth="0">
        <Logo />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[location.pathname]}
        >
          <Menu.Item key="/" icon={<DashboardOutlined />}>
            <Link to="/">Overview</Link>
          </Menu.Item>
          <Menu.Item key="/devices" icon={<BuildOutlined />}>
            <Link to="/devices">Devices</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Content>
          <Switch>
            <Route exact path="/">
              <OverviewPage />
            </Route>
            <Route path="/devices">
              <DevicesPage />
            </Route>
          </Switch>
        </Content>
        <Footer style={{ textAlign: "center" }}>Omar Chajia &copy;</Footer>
      </Layout>
    </Layout>
  );
}

export default App;
