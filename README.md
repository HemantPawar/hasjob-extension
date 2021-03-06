# Hasjob extension [![Build Status](https://travis-ci.org/HemantPawar/hasjob-extension.svg?branch=master)](https://travis-ci.org/HemantPawar/hasjob-extension)
>_upcoming **Manifest V3** related changes are in the [manifest-v3](https://github.com/HemantPawar/hasjob-extension/tree/manifest-v3) branch_

Unofficial job search extension for [Hasjob](http://hasjob.co). Allows the user to quickly check if any job is listed on [Hasjob](http://hasjob.co) for the current website.

## Getting started
You'll find source files in `script.babel` directory. Yeoman `generator-chrome-extension` was used for generating boilerplate code.

### Install dependencies
Nvigate to root folder in your terminal to install project dependencies.
```sh
npm install
```

### Babel

This extension supports ES 2015 syntax through babel transforming. While developing, When those of source has been changed, `gulp babel` should be run before test and run a extension on Chrome.

```sh
gulp babel
```

If you would like to have a continuous transforming by babel you can use `watch` task (recommended).

### Watch

Watch task helps you reduce your efforts during development extensions. If the task detects your changes of source files, re-compile your sources automatically or Livereload([chromereload.js](https://github.com/HemantPawar/hasjob-extension/blob/master/app/scripts.babel/chromereload.js)) reloads your extension. If you would like to know more about Live-reload and preview of Yeoman? Please see [Getting started with Yeoman and generator-webapp](http://youtu.be/zBt2g9ekiug?t=3m51s) for your understanding.

```bash
gulp watch
```

You need to load/reload extension after starting `gulp watch` for Live-reload to work.

For content scripts you need to refresh pages where it is used.

### Build and Package

It will build your app as a result you can have a distribution version of the app in `dist`. Run this command to build your Chrome Extension app.

```bash
gulp build
```

You can also distribute your project with compressed file using the Chrome Developer Dashboard at Chrome Web Store. This command will compress your app built by `gulp build` command.

```bash
gulp package
```

It removes the generated `dist` directory and `.tmp` files.

```bash
gulp clean
```

## License
MIT (c) 2017 [Hemant Pawar](https://github.com/HemantPawar), [@HemantPawar](https://twitter.com/HemantPawar)
