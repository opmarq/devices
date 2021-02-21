import React from "react";
import { Card, Row, Col, Typography, Space, Table } from "antd";
import { Link } from "react-router-dom";

import PageContainer from "../components/PageContainer";
import { ConnectedByTime, ConnectionTypes } from "../components/charts";
import DevicesTable from "../components/DevicesTable";

const Overview = () => {
  return (
    <PageContainer title="Overview">
      {(data) => {
        const totalDevices = data.length;
        const connectedDevices = data.filter(
          (device) => device.status === "connected"
        ).length;
        const last10Connections = data
          .sort((a, b) => {
            return (
              new Date(a.last_seen_at).getTime() -
              new Date(b.last_seen_at).getTime()
            );
          })
          .slice(0, 5);
        return (
          <Space size="large" direction="vertical">
            <Row gutter={[8, 8]}>
              <Col lg={18}>
                <Card title="Last 24h connected devices">
                  <ConnectedByTime data={data} />
                </Card>
              </Col>
              <Col lg={6}>
                <Row gutter={[8, 16]}>
                  <Col xs={12}>
                    <Card title="Total" style={{ textAlign: "center" }}>
                      <Typography.Title level={3}>
                        {totalDevices}
                      </Typography.Title>
                    </Card>
                  </Col>
                  <Col xs={12}>
                    <Card title="Connected" style={{ textAlign: "center" }}>
                      <Typography.Title level={3}>
                        {connectedDevices}
                      </Typography.Title>
                    </Card>
                  </Col>
                  <Col xs={24}>
                    <Card title="Connection types">
                      <ConnectionTypes data={data} />
                    </Card>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Card
              title="Last connected devices"
              extra={<Link to="/devices">View all</Link>}
            >
              <DevicesTable pagination={false} data={last10Connections} />
            </Card>
          </Space>
        );
      }}
    </PageContainer>
  );
};

export default Overview;
