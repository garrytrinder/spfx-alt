# SPFx-alt

An alternative client side development framework for SharePoint Online development, designed for small projects.

The goals of this framework are to

- Create an efficient development workflow
- Allow developers to work remotely and push files to SharePoint Online

## Setup

Update spsave.config.js with your target SharePoint site and authentication details

    module.exports = {
        options: {
            siteUrl: "<url>",
            folder: "<folder>",
            flatten: false
        },
        credentials: {
            username: "<user>@<tenant.com>",
            password: "<password>"
        }
    };

Update InjectJavaScriptAndCss.ps1

    $siteUrl = "<url>"
    $jsLinkName = "<name>"

Run

    cd ./posh
    ./InjectJavaScriptAndCss.ps1

This will update your SharePoint site to include the bundled JS file.

Install the framework dependencies

    npm install

Start the framework

    npm start

Gulp is started in watch mode, any changes made to files within 'src' will start the webpack compilation and bundling process automatically, the output will be stored in 'dist' along with sourcemaps.

The bundled files will then be pushed into SharePoint by sp-save.

## Technologies Utilised

- TypeScript
- SASS
- gulp
- gulp-spsave
- webpack
- PnP Core JS

A very basic Yeoman generator is also [available](https://github.com/garrytrinder/generator-spfx-alt)

