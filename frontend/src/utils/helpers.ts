import { subHours, format, startOfHour, isEqual } from "date-fns";

import { IDevice } from "../components/PageContainer";

export const getConnectionTypes = (
  data: IDevice[]
): { name: string; value: number }[] => {
  const chartData = data.reduce((current, next) => {
    return {
      ...current,
      [next.connection_type]:
        current[next.connection_type] !== undefined
          ? current[next.connection_type] + 1
          : 0,
    };
  }, {} as any);

  return Object.keys(chartData).map((key) => {
    return {
      name: key,
      value: chartData[key] as number,
    };
  });
};

export const getConnectedDevicesByLastHourse = (
  data: IDevice[],
  hours: number = 24
): { name: string; count: number }[] => {
  const currentTime = new Date();

  return Array.from(Array(hours).keys()).map((index) => {
    const time = startOfHour(subHours(currentTime, 24 - index));
    const count = data.filter((item) => {
      const lastSeen = startOfHour(new Date(item.last_seen_at));
      return isEqual(time, lastSeen);
    }).length;
    return { name: format(time, "p"), count };
  });
};
