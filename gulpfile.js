import gulp from 'gulp';
import { src, dest, watch, series, parallel } from 'gulp';

import sass from 'gulp-sass';
import dartSass from 'gulp-dart-sass';
import autoprefixer from 'gulp-autoprefixer';
import sourcemaps from 'gulp-sourcemaps';
import uglify from 'gulp-uglify';
import concat from 'gulp-concat';
import eslint from 'gulp-eslint';
import size from 'gulp-size';

// Путь к файлам
const paths = {
    styles: {
        src: 'src/scss/**/*.scss',
        dest: 'build/css'
    },
    scripts: {
        src: 'src/js/**/*.js',
        dest: 'build/js'
    }
};

// Задача для компиляции SASS
export const styles = () => {
    return src(paths.styles.src)
        .pipe(sourcemaps.init())
        .pipe(dartSass().on('error', dartSass.logError))
        .pipe(autoprefixer())
        .pipe(sourcemaps.write('.'))
        .pipe(dest(paths.styles.dest))
        .pipe(size());
};

// Задача для обработки JavaScript
export const scripts = () => {
    return src(paths.scripts.src)
        .pipe(sourcemaps.init())
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write('.'))
        .pipe(dest(paths.scripts.dest))
        .pipe(size());
};

// Задача для линтинга JavaScript
export const lint = () => {
    return src(paths.scripts.src)
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
};

// Задача для наблюдения за изменениями
export const watchFiles = () => {
    watch(paths.styles.src, styles);
    watch(paths.scripts.src, series(lint, scripts));
};

// Основная задача
export const build = series(parallel(styles, scripts));

// Экспорт задач
export default series(build, watchFiles);