var gulp = require('gulp'); //pobierz modul gulp
var sass = require('gulp-sass'); //zainstaulj modul gulp sass
var sourcemaps = require('gulp-sourcemaps'); // zmienna require i nazwa jaka chcemy przypisac zmiennej

gulp.task('scss', function(){ //funkcjonalnosc gulpa; gulp task
    return gulp.src("sass/main.scss") //pobierz sciezke, zlap plik main scss
        .pipe(sourcemaps.init()) //funkcja gulpa, daje mozliwosc wywolania modulu
        .pipe(sass({
         errLogToConsole: true, //kazdy blad wyswietl na konsoli
         outputStyle:'expanded',//okresla jaki wynikowy css, czy ulozony w jednej lini(kompress), czy czytelni
         // sourceComments: true, //skompresowany bedzie sie szybciej wczytywal
       }).on('error', sass.logError))//wysiwetlanie na konsoli
        .pipe(sourcemaps.write())//utworz sourcmape,czyli to co sie wyswietla zakomitowane pod plikiem main.css
        .pipe(gulp.dest("css"))
})

gulp.task('default', ['scss'], function() { //nasluchiowanie plikow
    gulp.watch('sass/**/*.scss', ['scss']) //kazdy folder zagniezdzony ma brac pod uwage
});
