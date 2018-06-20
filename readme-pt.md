# School - SPA

[Instruções em inglês](https://github.com/emtudo/school-spa/blob/master/readme.md)

## Screenshot

[![Sreenshot dashboard](https://raw.githubusercontent.com/emtudo/school-spa/master/screenshots/dashboard.jpg)](https://raw.githubusercontent.com/emtudo/school-spa/master/screenshots/dashboard.jpg)

## Objetivo
 - Interface para utilização da [School-API](https://github.com/emtudo/school-api)

## Como instalar

[Vídeo demonstração](https://www.youtube.com/watch?v=QXI84A-QnUA&t=136s)

```shell
git clone https://github.com/emtudo/school-spa
cd school-spa
cp config/common.env.js-dist config/common.env.js
npm install
```

Configure o arquivo `config/common.env.js` com o endereço da API (estou considerando que você já fez a instalação da API)

```shell
npm run build
```

## Como testar

```shell
npm run dev
```
