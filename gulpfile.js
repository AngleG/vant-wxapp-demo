/**
 * Created by admin on 2020/5/18
 */
// const processEnv = require('./build/process.env.conf');
// const env = process.env.NODE_ENV;
const requirePath = require('path');
const gulp = require('gulp');
const del = require('del');
const clear = require('gulp-clean');
const sass = require('gulp-sass');
// css解析器
const postcss = require('gulp-postcss');
// 处理浏览器私有前缀
const autoprefixer = require('autoprefixer');
const rename = require('gulp-rename');
// const watch = require('gulp-watch');
// const replace = require('replace-in-file');
const changed = require('gulp-changed');
const ts = require('gulp-typescript');
const tsProject = ts.createProject("tsconfig.json");
const sourcemaps = require("gulp-sourcemaps");
const jsonTransform = require("gulp-json-transform");

const option = {
  base: "src",
  allowEmpty: true
};

var copyPath = [
    "src/**/!(_)*.*",
    "!src/**/*.sass",
    "!src/**/*.scss",
    "!src/**/*.ts",
    "!src/**/*.js",
];

const sassPath = [
  "src/**/*.sass",
  "src/**/*.scss",
  "src/app.sass",
  "src/app.scss"
];
const tsPath = ["src/**/*.ts", "src/app.ts"];

const watchSrcPath = ["src/**", "src/**/!(_)*.*"];

/*
  dist 打包后文件存放路径
*/
const dist = requirePath.join(__dirname, '/dist');


//清空dist目录
gulp.task("clear", () => {
    //使用pipe方法可将多个任务连接在一起
   return gulp.src(dist, {allowEmpty: true}).pipe(clear());
});

//复制不包含node_modules、sass、scss和ts的文件
gulp.task("copy", () => {
    // dest 创建一个用于将 Vinyl 对象写入到文件系统的流。
   return gulp.src(copyPath, option).pipe(gulp.dest(dist));
});

//复制不包含node_modules、sass、scss和ts的文件 (只改动有变动的文件)
gulp.task("copyChange", () => {
    return gulp
        .src(copyPath, option)
        .pipe(changed(dist))
        .pipe(gulp.dest(dist));
});

//根据dependencies生成package.json
gulp.task("generatePackageJson", () => {
    return gulp
        .src("./package.json")
        .pipe(
            jsonTransform(function (data, file) {
                return {
                    dependencies: data.dependencies
                }
            })
        )
        .pipe(gulp.dest(dist));
});

//编译sass
gulp.task("sass", () => {
    return gulp
        .src(sassPath, option)
        .pipe(
            sass().on("error", function (e) {
                console.error(e.message);
                this.emit("end");
            })
        )
        .pipe(postcss([autoprefixer]))
        .pipe(
            rename(function (path) {
                path.extname = ".wxss";
            })
        )
        .pipe(gulp.dest(dist));
});

//编译sass(只改动有变动的文件）
gulp.task("sassChange", () => {
    return gulp
        .src(sassPath, option)
        .pipe(changed(dist))
        .pipe(
            sass().on("error", function (e) {
                console.error(e.message);
                this.emit("end");
            })
        )
        .pipe(postcss([autoprefixer]))
        .pipe(
            rename(function (path) {
                path.extname = ".wxss";
            })
        )
        .pipe(gulp.dest(dist));
});

// 编译ts
gulp.task("tsCompile", function () {
    return tsProject
        .src()
        .pipe(sourcemaps.init())
        .pipe(tsProject())
        .js.pipe(sourcemaps.write())
        .pipe(gulp.dest(dist))
});

// 监听
gulp.task("watch", () => {
    console.log('watch','-=-=-=');
    gulp.watch(sassPath, gulp.series('sassChange'));
    gulp.watch(tsPath, gulp.series('tsCompile'));
    const watcher =  gulp.watch(copyPath, gulp.series('copyChange'));
    //删除文件监听处理
    watcher.on("unlink", function (path, stats) {
       console.log(`File ${path} was removed 111`);
       const filePathFromSrc = requirePath.relative(requirePath.resolve("src"), path);
       // Concatenating the 'build' absolute path used by gulp.dest in the scripts task
       const reg = /\\/g;
       const destFilePath = requirePath.resolve("dist", filePathFromSrc).replace(reg, '/');
       // console.log({path, filePathFromSrc, destFilePath}, '===unlink');
       del.sync(destFilePath);
    });
    // 删除文件夹监听处理
    gulp.watch(watchSrcPath).on("unlinkDir", function (path, stats) {
       console.log(`File ${path} was removed`);
       const filePathFromSrc = requirePath.relative(requirePath.resolve("src"), path);
       // Concatenating the 'build' absolute path used by gulp.dest in the scripts task
       const reg = /\\/g;
       const destFilePath = requirePath.resolve("dist", filePathFromSrc).replace(reg, '/');
       del.sync(destFilePath);
    });
});

// 开发并监听
gulp.task(
    "default",
    gulp.series(
        // sync
        gulp.parallel(
            "copy",
            "generatePackageJson",
            "sass",
            "tsCompile"
        ),
        "watch"
    )
);

//上线
gulp.task(
    "build",
    gulp.series(
        // sync
        "clear",
        gulp.parallel(
            "copy",
            "generatePackageJson",
            "sass",
            "tsCompile"
        ),
    )
);


