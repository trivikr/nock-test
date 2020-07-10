import * as nock from "nock";
import { httpRequest } from ".";

describe("httpRequest", () => {
  const host = "localhost";
  const path = "/";

  it("returns response", async () => {
    const expectedResponse = "expectedResponse";
    const scope = nock("http://" + host)
      .get(path)
      .reply(200, expectedResponse);

    const response = await httpRequest({ host, path });
    expect(response).toStrictEqual(expectedResponse);

    scope.done();
  });
});
