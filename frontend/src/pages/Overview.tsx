import { Card, Row, Col, Typography } from "antd";

import React from "react";

import PageContainer from "../components/PageContainer";
import { ConnectedByTime } from "../components/charts";

const Overview = () => {
  return (
    <PageContainer title="Overview">
      {(data) => {
        return (
          <Row>
            <Col lg={18}>
              <Card>
                <Typography.Title level={4}>
                  Last 24h connected devices
                </Typography.Title>
                <ConnectedByTime data={data} />
              </Card>
            </Col>
            <Col lg={6}>
              <Row>
                <Col xs={12}>
                  <Card>{data.length}</Card>
                </Col>
                <Col xs={12}>
                  <Card>100</Card>
                </Col>
              </Row>
            </Col>
          </Row>
        );
      }}
    </PageContainer>
  );
};

export default Overview;
