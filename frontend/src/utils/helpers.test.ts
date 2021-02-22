import { getConnectionTypes, getConnectedDevicesByLastHourse } from "./helpers";

import { mock_devices } from "../api/mocks/data";

describe("Helpers", () => {
  it("Should get connection types", () => {
    const connecitonTypes = getConnectionTypes(mock_devices);
    expect(connecitonTypes).toEqual([
      { name: "ethernet", value: 35 },
      { name: "wifi", value: 36 },
      { name: "cellular", value: 26 },
    ]);
  });
  it("Should get connected devices in the last 24h", () => {
    const connectedDevicesInLast24h = getConnectedDevicesByLastHourse(
      mock_devices,
      24
    );
    expect(connectedDevicesInLast24h).toEqual([
      { name: "3:00 PM", count: 8 },
      { name: "4:00 PM", count: 4 },
      { name: "5:00 PM", count: 3 },
      { name: "6:00 PM", count: 6 },
      { name: "7:00 PM", count: 2 },
      { name: "8:00 PM", count: 5 },
      { name: "9:00 PM", count: 5 },
      { name: "10:00 PM", count: 2 },
      { name: "11:00 PM", count: 6 },
      { name: "12:00 AM", count: 2 },
      { name: "1:00 AM", count: 3 },
      { name: "2:00 AM", count: 3 },
      { name: "3:00 AM", count: 4 },
      { name: "4:00 AM", count: 6 },
      { name: "5:00 AM", count: 2 },
      { name: "6:00 AM", count: 3 },
      { name: "7:00 AM", count: 5 },
      { name: "8:00 AM", count: 1 },
      { name: "9:00 AM", count: 2 },
      { name: "10:00 AM", count: 3 },
      { name: "11:00 AM", count: 6 },
      { name: "12:00 PM", count: 7 },
      { name: "1:00 PM", count: 6 },
      { name: "2:00 PM", count: 3 },
    ]);
  });
});
