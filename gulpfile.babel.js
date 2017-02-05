import gulp from 'gulp'

import webserver from 'gulp-server-livereload'

import sass from 'gulp-sass'
import autoprefixer from 'gulp-autoprefixer'
import clean from 'gulp-clean-css'

gulp.task('styles', () => {
	return gulp.src('./src/stylesheets/translateur.scss')
		.pipe(sass.sync().on('error', sass.logError))
		.pipe(autoprefixer())
		.pipe(clean())
		.pipe(gulp.dest('./public/assets/css/'))
})

gulp.task('webserver', function() {
	gulp.src('./public')
		.pipe(webserver({
			livereload: true,
			open: true
		}))
})

gulp.task('default', ['styles', 'webserver'], () => {
	gulp.watch('./src/stylesheets/*.scss', ['styles'])
})
