import gulp from 'gulp';
import browserSync from 'browser-sync';
import project from '../aurelia.json';
import build from './build';
import {CLIOptions} from 'aurelia-cli';

function onChange(path) {
  console.log(`File Changed: ${path}`);
}

function reload(done) {
  browserSync.reload();
  done();
}

let browserSyncPort = 9000;
let browserSyncUiPort = 3001;

// This is a hack to allow us to use default ports in WebStorm.
//   and use 8081 and 8082 in C9.
if (process.env.C9_SHARED) {
  browserSyncPort = 8081;
  browserSyncUiPort = 8082;
}

let serve = gulp.series(
  build,
  done => {
    browserSync({
      online: false,
      open: false,
      port: browserSyncPort,
      ui: {
        port: browserSyncUiPort
      },
      server: {
        baseDir: ['.'],
        middleware: function(req, res, next) {
          res.setHeader('Access-Control-Allow-Origin', '*');
          next();
        }
      }
    }, done);
  }
);

let refresh = gulp.series(
  build,
  reload
);

let watch = function() {
  gulp.watch(project.transpiler.source, refresh).on('change', onChange);
  gulp.watch(project.markupProcessor.source, refresh).on('change', onChange);
  gulp.watch(project.cssProcessor.source, refresh).on('change', onChange)
}

let run;

if (CLIOptions.hasFlag('watch')) {
  run = gulp.series(
    serve,
    watch
  );
} else {
  run = serve;
}

export default run;
