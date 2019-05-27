const gulp = require('gulp');
gulp.task('default', cb=>{
    console.log('Default task');
})

gulp.task('build', cb=>{
    console.log('build task');
})

gulp.task('custom', cb=>{
    console.log('custom task');
})
