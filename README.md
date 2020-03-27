# browserstack-app

A simple electron app for browserstack.com

![](sscreenshot.png)

## CLI Usage

Before you run you will need to install electron with

```bash
$ npm install
```

To run Browserstack in electron without building a standalone app (direct from index.js) you can use:

```bash
$ npm run-script start
```

## Building

If you want to produce a standalone executable that will run without Node or Electron, you can use one of the following commands:

### MacOS

```bash
$ npm run-script build-mac
```

### Linux

```bash
$ npm run-script build-linux
```

### Windows

```bash
$ npm run-script build-windows
```