import React, { useState, useEffect } from "react";
import { PageHeader, Input } from "antd";
import { useHistory, useLocation } from "react-router-dom";
import queryString from "query-string";

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
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    const { q } = queryString.parse(location.search);

    fetchDevices(100).then((data: IDevice[]) => {
      let filtered = data;
      if (q) {
        filtered = data.filter((device) =>
          device.serial_number.includes(q as string)
        );
      }
      setData(filtered);
    });
  }, [location.search, location.pathname]);

  const onSearch = (value: string) => {
    history.push(`/devices?q=${value}`);
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
