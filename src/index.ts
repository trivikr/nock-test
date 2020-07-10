import { Buffer } from "buffer";
import { request, IncomingMessage, RequestOptions } from "http";

/**
 * @internal
 */
export function httpRequest(options: RequestOptions): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    const req = request({ method: "GET", ...options });
    req.on("error", (err: Error) => {
      reject(err);
    });

    req.on("response", (res: IncomingMessage) => {
      const chunks: Array<Buffer> = [];
      res.on("data", (chunk: any) => {
        chunks.push(chunk as Buffer);
      });
      res.on("end", () => {
        resolve(Buffer.concat(chunks));
      });
    });

    req.end();
  });
}
