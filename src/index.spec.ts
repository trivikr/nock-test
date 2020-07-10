import * as nock from "nock";
import { httpRequest } from ".";

describe("httpRequest", () => {
  const host = "localhost";
  const path = "/";
  const port = 80;

  it("returns response", async () => {
    const expectedResponse = "expectedResponse";
    const scope = nock(`http://${host}:${port}`)
      .get(path)
      .reply(200, expectedResponse);

    const response = await httpRequest({ host, path, port });
    expect(response.toString()).toStrictEqual(expectedResponse);

    scope.done();
  });
});
