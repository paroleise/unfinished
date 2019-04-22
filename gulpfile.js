// gulpプラグインの読み込み
const gulp = require("gulp");
/* --SASSをコンパイルするタスクのプラグイン  */
const sass = require("gulp-sass");

gulp.task("default", function() {
  /*----sassコンパイルタスク------*/
  return gulp.watch("docs/assets/scss/style.scss", function() {
    return (
      gulp
        .src("docs/assets/scss/style.scss")
        // Sassのコンパイルを実行
        .pipe(
          sass({
            outputStyle: "expanded"
          })
            // Sassのコンパイルエラーを表示
            .on("error", sass.logError)
        )
        // cssフォルダー以下に保存
        .pipe(gulp.dest("docs/assets/css"))
    );
  });
});






