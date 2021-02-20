import React, { useState, useEffect } from "react";
import { PageHeader, Input } from "antd";

import { fetchDevices } from "../api";

interface IPageContainer {
  title: string;
  children: (data: IDevice[]) => React.ReactNode;
}

export interface IDevice {
  url: string;
  status: string;
  last_seen_at: string;
  connection_type: string;
  mac_wifi: string;
  sim_id: string;
  voltage: number;
  serial_number: string;
}

const PageContainer: React.FC<IPageContainer> = ({ title, children }) => {
  const [data, setData] = useState<IDevice[]>([]);

  useEffect(() => {
    fetchDevices(100).then((data: unknown) => setData(data as IDevice[]));
  }, []);

  const onSearch = (value: string) => {
    const filtered: IDevice[] = data.filter((device) =>
      device.serial_number.includes(value)
    );
    setData(filtered);
  };

  return (
    <PageHeader
      title={title}
      extra={
        <Input.Search
          placeholder="Search by serial number"
          onSearch={onSearch}
        />
      }
    >
      {children(data)}
    </PageHeader>
  );
};

export default PageContainer;
