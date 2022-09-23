const { src, dest, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const plumber = require('gulp-plumber');

function css(done) {
    src('src/scss/**/*.scss') //ideantificar archivo de sass
        .pipe(plumber()) 
        .pipe(sass()) //compilarlo
        .pipe(dest('build/css')) //almacenar en hd

    done();
}

function dev(done){
    watch('src/scss/**/*.scss',css)

    done()
}

exports.css = css;
exports.dev = dev;

