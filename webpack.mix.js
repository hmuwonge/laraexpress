// const mix = require('laravel-mix');
//
// mix.setResourceRoot(process.env.MIX_ASSET_URL);
//
// mix.js('resources/js/app.js', 'public/web-assets/js')
//     .vue()
//     .postCss('resources/css/app.css', 'public/css');


const mix = require("laravel-mix");

mix.setResourceRoot(process.env.MIX_ASSET_URL);
// mix.config.fileLoaderDirs.fonts = "web-assets/fonts";
mix.webpackConfig({
    output: {
        chunkFilename: "web-assets/js/[name].js?id=[chunkhash]",
        publicPath: "/public/",
    },
});
mix.js("resources/js/app.js", "public/web-assets/js")
    .vue()
    .postCss("resources/css/app.css", "public/web-assets/css", [
        require("tailwindcss"),
    ]);
