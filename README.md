# testing nock with Node.js http request

Steps to follow:

- run `yarn` to install dependencies
- run `yarn test` to run test

Test fails with Timeout

```console
yarn run v1.22.4
$ jest
 FAIL  src/index.spec.ts (6.486 s)
  httpRequest
    ✕ returns response (5010 ms)

  ● httpRequest › returns response

    : Timeout - Async callback was not invoked within the 5000 ms timeout specified by jest.setTimeout.Timeout - Async callback was not invoked within the 5000 ms timeout specified by jest.setTimeout.Error:

       6 |   const path = "/";
       7 |
    >  8 |   it("returns response", async () => {
         |   ^
       9 |     const expectedResponse = "expectedResponse";
      10 |     const scope = nock("http://" + host)
      11 |       .get(path)

      at new Spec (node_modules/jest-jasmine2/build/jasmine/Spec.js:116:22)
      at Suite.<anonymous> (src/index.spec.ts:8:3)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 total
Snapshots:   0 total
Time:        6.589 s, estimated 8 s
Ran all test suites.
error Command failed with exit code 1.
```
