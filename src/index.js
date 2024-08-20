/** 엔트리 파일 */
import a from "./a.js";
import b from "./b.js";
import css from "./style.css"; // << css-loader가 해주는거임

const title = document.querySelector("h1#title");
title.innerText = a + b;

console.log(css);
