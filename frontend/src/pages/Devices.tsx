import React from "react";

import PageContainer from "../components/PageContainer";
import DevicesTable from "../components/DevicesTable";

const Devices = () => {
  return (
    <PageContainer title="Devices">
      {(data) => {
        return <DevicesTable data={data} pagination={false} />;
      }}
    </PageContainer>
  );
};

export default Devices;
