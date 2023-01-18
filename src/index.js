//Since we’re all set up to write our code in multiple files,
// let’s write this initial page-load function inside of its
//own module and then import and call it inside of index.js.
import "./style.css";
import header from "/src/pages/header.js";

header();
