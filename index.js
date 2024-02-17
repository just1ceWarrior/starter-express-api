const { createVLESSServer } = require("@3kmfi6hp/nodejs-proxy");

try {
  createVLESSServer(3000, "4da011a9-135c-4c13-a29d-0c4842f795ef");
} catch (err) {
  console.log(err);
}
