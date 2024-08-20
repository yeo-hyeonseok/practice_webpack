const path = require("path");

/** 'npx webpack --entry ./src/index.js --output-path ./dist' << 얘랑 같음 */
module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    // 결과물을 어떤 경로에 저장할 것인지
    path: path.resolve(__dirname, "dist"),
    // 파일 이름 지정
    filename: "main.js",
  },
};
