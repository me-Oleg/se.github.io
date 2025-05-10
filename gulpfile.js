import gulp from 'gulp';
import { src, dest, watch, series, parallel } from 'gulp';
import dartSass from 'gulp-dart-sass';
import sourcemaps from 'gulp-sourcemaps';
import concat from 'gulp-concat';
import cleanCSS from 'gulp-clean-css';
import uglify from 'gulp-uglify';
import eslint from 'gulp-eslint';
import autoprefixer from 'gulp-autoprefixer';
import size from 'gulp-size';
import { deleteSync } from 'del';

// Путь к файлам
const paths = {
    styles: {
        src: 'public/src/styles/scss/**/*.scss',
        dest: 'public/build/css'
    },
    scripts: {
        src: 'public/src/scripts/**/*.js',
        dest: 'public/build/js'
    }
};

// Задача для удаления старых файлов
const clean = () => {
    return new Promise((resolve) => {
        deleteSync([paths.styles.dest, paths.scripts.dest]);
        resolve();
    });
};

// Задача для компиляции SASS
const styles = () => {
    return src(paths.styles.src)
        .pipe(size({ title: 'Размер файлов до обработки CSS:' })) 
        .pipe(sourcemaps.init())
        .pipe(dartSass().on('error', dartSass.logError))
        .pipe(autoprefixer())
        .pipe(concat('main-style.css'))
        .pipe(cleanCSS())
        .pipe(sourcemaps.write('.'))
        .pipe(dest(paths.styles.dest))
        .pipe(size({ title: 'Размер файлов после обработки CSS:' }))
};

// Задача для обработки JavaScript
const scripts = () => {
    return src(paths.scripts.src)
        .pipe(size({ title: 'Размер файлов до обработки JS:' }))
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(sourcemaps.write('.'))
        .pipe(dest(paths.scripts.dest))
        .pipe(size({ title: 'Размер файлов после обработки JS:' }))
};

// Задача для линтинга JavaScript
const lint = () => {
    return src(paths.scripts.src)
        .pipe(size({ title: 'Размер файлов до линтинга JS:' }))
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError())
        .pipe(size({ title: 'Размер файлов после линтинга JS:' }))
};

// Задача для наблюдения за изменениями
const watchFiles = () => {
    watch(paths.styles.src, styles);
    watch(paths.scripts.src, series(lint, scripts))
};

// Основная задача
const build = series(clean, parallel(styles, scripts))

// Экспорт задач
export { build, watchFiles }
