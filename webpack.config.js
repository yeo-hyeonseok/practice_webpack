const path = require("path");

/** 'npx webpack --entry ./src/index.js --output-path ./dist' << 얘랑 같음 */
module.exports = {
  mode: "development",
  entry: {
    main: "./src/index.js",
    about: "./src/about.js",
  },
  output: {
    // 결과물을 어떤 경로에 저장할 것인지
    path: path.resolve(__dirname, "dist"),
    // 파일 이름 지정
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        // '.css' 확장자의 파일들에만 아래의 로더를 적용하도록 설정하는 거임
        test: /\.css$/,
        // css-loader => css파일을 모듈로 취급해서 js파일로 불러옴
        // style-loader => js파일로 불러온 css를 html 파일의 style 태그에 삽입
        // **로더 실행 순서는 배열 원소 뒤에서부터임
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
