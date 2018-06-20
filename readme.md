# School - SPA

[Instructions in portuguese](https://github.com/emtudo/school-spa/blob/master/readme-pt.md)

## Screenshot

[![Sreenshot dashboard](https://raw.githubusercontent.com/emtudo/school-spa/master/screenshots/dashboard.jpg)](https://raw.githubusercontent.com/emtudo/school-spa/master/screenshots/dashboard.jpg)

## What is the project about?
 - Interface for using [School-API](https://github.com/emtudo/school-api)

## How to install

[Video demo in portuguese](https://www.youtube.com/watch?v=QXI84A-QnUA&t=136s)

```shell
git clone https://github.com/emtudo/school-spa
cd school-spa
cp config/common.env.js-dist config/common.env.js
npm install
```

Configure the `config/common.env.js` file with the API address (I'm assuming you've already installed the API)

```shell
npm run build
```

## How to test

```shell
npm run dev
```
