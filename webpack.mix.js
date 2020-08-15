const mix = require('laravel-mix');
require('mix-html-builder');

mix.disableNotifications();
mix.setPublicPath('./docs/')



mix.html({
    htmlRoot: './src/*.html', // Your html root file(s)
    output: './', // The html output folder
    partialRoot: './src/partials',    // default partial path
    layoutRoot: './src/layouts',    // default partial path
    minify: {
        removeComments: true
    }
});

mix
  .sass('./src/css/style.scss', 'docs/css/style.css')
  .combine([
    // Basic Jquery and Jquery plugins
    './node_modules/jquery/dist/jquery.min.js',
    './node_modules/jquery-modal/jquery.modal.min.js',
  ],'docs/js/lib.js')
  .js([
    './src/js/app.js',
  ], 'docs/js/app.js')
  .sourceMaps()
  .version();
