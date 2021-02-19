import React, { useEffect, useState } from "react";
import { Table, Tag, Button } from "antd";
import { LinkOutlined } from "@ant-design/icons";

import { fetchDevices } from "../api";

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

const columns = [
  {
    title: "Details",
    dataIndex: "details",
    key: "details",
    render: (text: string, record: IDevice) => {
      return (
        <div>
          <p>{record["serial_number"]}</p>
          <p>{record["mac_wifi"]}</p>
          <p>{record["sim_id"]}</p>
        </div>
      );
    },
  },
  {
    title: "Connection type",
    dataIndex: "connection_type",
    key: "type",
  },
  {
    title: "Voltage",
    dataIndex: "voltage",
    key: "voltage",
  },
  {
    title: "Status",
    key: "status",
    dataIndex: "status",
    render: (status: string) => (
      <Tag color={status === "connected" ? "green" : "red"}>{status}</Tag>
    ),
  },
  {
    title: "link",
    key: "link",
    render: (url: string) => <Button href={url} icon={<LinkOutlined />} />,
  },
];

const Devices = () => {
  const [data, setData] = useState<IDevice[]>([]);

  useEffect(() => {
    fetchDevices(100).then((data: unknown) => setData(data as IDevice[]));
  }, []);

  return <Table columns={columns} dataSource={data} />;
};

export default Devices;
