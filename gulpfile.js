var gulp = require("gulp");
var sass = require("gulp-sass");
var rename = require("gulp-rename");

gulp.task("sass", function() {
  return gulp
    .src("styles/style.scss")
    .pipe(
      sass({
        outputStyle: "compressed"
      }).on("error", sass.logError)
    )
    .pipe(rename("styles.css"))
    .pipe(gulp.dest("public/css"));
});

gulp.task("watch", function() {
  return gulp.watch("styles/**/*.scss", ["sass"]);
});
