import React from "react";
import { Layout, Menu } from "antd";
import { DashboardOutlined, BuildOutlined } from "@ant-design/icons";
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";

import { Logo } from "./components/Logo";
import DevicesPage from "./pages/Devices";
import OverviewPage from "./pages/Overview";

const { Content, Footer, Sider } = Layout;

function App() {
  return (
    <Layout>
      <Router>
        <Sider breakpoint="lg" collapsedWidth="0">
          <Logo>Upciti</Logo>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1" icon={<DashboardOutlined />}>
              <Link to="/">Overview</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<BuildOutlined />}>
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
      </Router>
    </Layout>
  );
}

export default App;
