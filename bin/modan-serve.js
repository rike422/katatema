#!/usr/bin/env node
import HttpServer from "../http-server";
import WebpackServer from "../webpack-server";

new WebpackServer({ port: 4000 }).run().then(() => {
  return new HttpServer({ port: 3000 }).run();
}).catch((error) => {
  console.error(error);
  process.exit(1);
});