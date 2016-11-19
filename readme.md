# sketchtool-api

> JavaScript API for sketchtool.

[![travis][travis-image]][travis-url] [![codecov][codecov-image]][codecov-url]

[travis-image]: https://img.shields.io/travis/ngryman/sketchtool-api.svg?style=flat
[travis-url]: https://travis-ci.org/ngryman/sketchtool-api
[codecov-image]: https://img.shields.io/codecov/c/github/ngryman/sketchtool-api.svg
[codecov-url]: https://codecov.io/github/ngryman/sketchtool-api


**sketchtool-api** allows you to access [sketchtool] command-line tool via a simple JavaScript API.

This package does not bundle **sketchtool**, you need to have it installed on your machine. You can follow the instructions here: https://www.sketchapp.com/tool/.

*Notice: For now only the `dump` command is supported.*

[sketchtool]: http://bohemiancoding.com/sketch/tool/


## Install

```sh
npm install --save sketchtool-api
```


## Usage

```javascript
import sketchtool from 'sketchtool'

// Dump a document as JSON
const doc = await sketchtool.dump('my-awesome-design.sketch')
```


## License

MIT © [Nicolas Gryman](http://ngryman.sh)
