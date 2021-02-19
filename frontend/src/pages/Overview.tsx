import { Card, Row, Col, Typography } from "antd";
import React from "react";

import PageContainer from "../components/PageContainer";

const Overview = () => {
  return (
    <PageContainer title="Overview">
      {() => {
        return (
          <Row>
            <Col>
              <Card>100</Card>
            </Col>
            <Col>
              <Card>100</Card>
            </Col>
          </Row>
        );
      }}
    </PageContainer>
  );
};

export default Overview;
