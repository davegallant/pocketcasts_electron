# PocketCasts Beta Electron (Unofficial)

[![Build Status](https://travis-ci.org/davegallant/pocketcasts-electron.svg?branch=master)](https://travis-ci.org/davegallant/pocketcasts-electron)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/davegallant/pocketcasts-electron.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/davegallant/pocketcasts-electron/context:javascript)


![pocketcasts_electron](https://user-images.githubusercontent.com/4519234/87889863-b6ddf900-ca01-11ea-95bb-703aa11f33b7.png)



Wraps the [Pocket Casts Web Player](https://play.pocketcasts.com/) web page in an [electron](https://electronjs.org/) package.

Media keys are mapped.

## How to build (Windows, Mac and Linux)

```console
$ npm i
$ npm run start
```

On linux, for key bindings, dbus is required.

### Ubuntu / debian:
```console
$ sudo apt install libdbus-1-dev libglib2.0-dev
```
