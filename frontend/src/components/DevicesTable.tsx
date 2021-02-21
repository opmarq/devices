import React from "react";
import { Table, Tag, Button, TablePaginationConfig } from "antd";
import { LinkOutlined } from "@ant-design/icons";

import { IDevice } from "./PageContainer";

interface IDevicesTable {
  data: IDevice[];
  pagination: TablePaginationConfig | false | undefined;
}

export const columns = [
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

const DevicesTable: React.FC<IDevicesTable> = ({ data, pagination }) => {
  return (
    <Table
      pagination={pagination}
      columns={columns}
      dataSource={data}
      rowKey="mac_wifi"
    />
  );
};

export default DevicesTable;
