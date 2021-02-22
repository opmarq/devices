import axios from "./api";
import { mocked } from "ts-jest/utils";

import { fetchDevices } from "./api";

import { mock_devices } from "./mocks/data";

jest.mock("axios");

const mockedAxios = mocked(axios, true);

describe("fetchDevices", () => {
  it.skip("fetches successfuly devices from the api", async () => {
    mockedAxios.get.mockImplementationOnce(() => Promise.resolve(mock_devices));
    await expect(fetchDevices(10)).resolves.toEqual(mock_devices);
  });
  it.skip("fetches erroneously devices from the api", async () => {
    const errorMessage = "Network Error";
    mockedAxios.get.mockImplementationOnce(() =>
      Promise.reject(new Error(errorMessage))
    );
    await expect(fetchDevices(10)).rejects.toThrow(errorMessage);
  });
});
