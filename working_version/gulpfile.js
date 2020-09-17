// function defaultTask(cb) {
//   console.log("Hello GULP!");
//   cb();
// }

// exports.default = defaultTask;
// var gulp = require("gulp");

// gulp.task("hello", function () {
//   console.log("Hello Zell");
// });

// const { series } = require("gulp");

// function hello(cb) {
//   console.log("Hello - it is Gulp 4");
//   cb();
// }

// function hi(cb) {
//   console.log("Hi - other function GULP-4");
//   cb();
// }
// exports.default = series(hello, hi);
// exports.hello = hello;
// exports.hi = hi;


var gulp = require("gulp");

gulp.task("test", function () {
  console.log("Я работаю");
});