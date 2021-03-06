# ls-service-date

![npm](https://img.shields.io/npm/dt/litespeed.js.svg)
[![npm version](https://badge.fury.io/js/ls-service-date.svg)](https://badge.fury.io/js/ls-service-date)
[![Build Status](https://travis-ci.org/litespeed-js/ls-service-date.svg?branch=master)](https://travis-ci.org/litespeed-js/ls-service-date)
[![Chat With Us](https://img.shields.io/gitter/room/litespeed-js/community.svg)](https://gitter.im/litespeed-js/community?utm_source=share-link&utm_medium=link&utm_campaign=share-link)

Litespeed.js service component for manipulating unix time date formats.

## Installation

This package is wrapped as a [Litespeed.js](https://github.com/litespeed-js/litespeed.js) component. To use it, you need to init a new [Litespeed.js](https://github.com/litespeed-js/litespeed.js) project or use an exisiting [Litespeed.js](https://github.com/litespeed-js/litespeed.js) project. To learn more about [Litespeed.js](https://github.com/litespeed-js/litespeed.js) [Javascript web framework](https://github.com/litespeed-js/litespeed.js) got to the [official repository](https://github.com/litespeed-js/litespeed.js).

Install with [NPM](https://www.npmjs.com/):

```bash
npm install ls-service-date
```

Install with CDN:
```html
<script src="https://cdn.jsdelivr.net/npm/ls-service-date"></script>
```

## Getting Started

### Example

```js
let date = window.ls.container.get('date');

date.timetostr('Y-m-d H:i', 1564947784); // 2019-08-04 22:43:04
date.strtotime('2019-08-04 22:43:04'); // 1564947784
```

## Contributing

All code contributions - including those of people having commit access - must go through a pull request and approved by a core developer before being merged. This is to ensure proper review of all the code.

Fork the project, create a feature branch, and send us a pull request.

For security issues, please email security@appwrite.io instead of posting a public issue in GitHub.

## Copyright and license

The MIT License (MIT) http://www.opensource.org/licenses/mit-license.php
