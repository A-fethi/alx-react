# 0x06. React Immutable

## Description :bulb:

- Immutable objects. Who, what, when, where, and why?
- How to use the Immutable.js library to bring immutability to Javascript
- The differences between List and Map
- How to use Merge, Concat, and Deep Merging
- What a lazy `Seq` is

## Technologies & Tools :computer:

[![Jest](https://img.shields.io/badge/≡-Jest-C21325?logo=Jest&style=flat-square&labelColor=282828&logoColor=C21325)](https://jestjs.io/)
[![Git](https://img.shields.io/badge/≡-Git-F05032?logo=git&style=flat-square&labelColor=282828)](https://git-scm.com/)
[![Ubuntu](https://img.shields.io/badge/≡-Ubuntu-E95420?&style=flat-square&logo=Ubuntu&labelColor=282828)](https://ubuntu.com/)
[![Mocha](https://img.shields.io/badge/≡-Mocha-8D6748?logo=Mocha&style=flat-square&labelColor=282828)](https://mochajs.org/)
[![Babel](https://img.shields.io/badge/≡-Babel-F9DC3E?logo=Babel&style=flat-square&labelColor=282828)](https://babeljs.io/)
[![JavaScript](https://img.shields.io/badge/≡-JavaScript-F7DF1E?logo=javascript&style=flat-square&labelColor=282828)](https://developer.mozilla.org/en-US/docs/Web/javascript)
[![GNU_Bash](https://img.shields.io/badge/≡-GNU_Bash-4EAA25?logo=GNU-Bash&style=flat-square&labelColor=282828)](https://www.gnu.org/software/bash/)
[![Nodejs](https://img.shields.io/badge/≡-Nodejs-339933?logo=Node.js&style=flat-square&labelColor=282828)](https://nodejs.org/en/)
[![Vim](https://img.shields.io/badge/≡-Vim-019733?logo=Vim&style=flat-square&logoColor=019733&labelColor=282828)](https://www.vim.org/)
[![Vagrant](https://img.shields.io/badge/≡-Vagrant-1563FF?logo=vagrant&style=flat-square&logoColor=1563FF&labelColor=282828)](https://www.vagrantup.com/)
[![VS_Code](https://img.shields.io/badge/≡-VS_Code-007ACC?logo=visual-studio-code&style=flat-square&logoColor=007ACC&labelColor=282828)](https://code.visualstudio.com/)
[![React](https://img.shields.io/badge/≡-React-61DAFB?logo=React&style=flat-square&labelColor=282828)](https://reactjs.org/)
[![Webpack](https://img.shields.io/badge/≡-Webpack-8DD6F9?logo=Webpack&style=flat-square&labelColor=282828)](https://webpack.js.org/)
[![ESLint](https://img.shields.io/badge/≡-ESLint-4B32C3?logo=ESLint&style=flat-square&labelColor=282828&logoColor=4B32C3)](https://eslint.org/)
[![GitHub](https://img.shields.io/badge/≡-GitHub-181717?logo=GitHub&style=flat-square&labelColor=282828)](https://github.com/)

---

## Resources :books:

Read or watch:

- [Immutable Object concept](https://en.wikipedia.org/wiki/Immutable_object)
- [Immutable.js Documentation](https://immutable-js.com/docs/v4.3.5/)
- [Immutable.js GitHub](https://github.com/immutable-js/immutable-js)
---

## Requirements :hammer:

- Allowed editors: `vi, vim, emacs, Visual Studio Code`
- A `README.md` file, at the root of the folder of the project, is mandatory
- All of your files will be interpreted/compiled on Ubuntu 18.04 LTS using `node 12.x.x` and `npm 6.x.x`
- All of your files should end with a new line
- All of your functions must be exported

### Install NodeJS 12.22.x

```console
~$ curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
~$ sudo bash nodesource_setup.sh
~$ sudo apt install nodejs -y
```

### Check version

```console
~$ nodejs -v
v12.22.1
~$ npm -v
6.14.12
```
---

### Provided files

`babel.config.js`
```console
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
};
```
`jsconfig.json`

```console
{
  "compilerOptions": {
    "target": "es6"
  },
  "exclude": [
    "node_modules"
  ]
}
```

`package.json`

```console
{
  "scripts": {
    "lint": "./node_modules/.bin/eslint",
    "check-lint": "lint [0-9]*.js",
    "test": "jest",
    "full-test": "./node_modules/.bin/eslint [0-9]*.js && jest"
  },
  "devDependencies": {
    "@babel/core": "^7.6.0",
    "@babel/preset-env": "^7.6.0",
    "eslint": "^6.4.0",
    "eslint-config-airbnb-base": "^14.0.0",
    "eslint-plugin-import": "^2.18.2",
    "eslint-plugin-jest": "^22.17.0",
    "jest": "^24.9.0"
  },
  "dependencies": {
    "immutable": "^4.0.0-rc.12"
  }
}
```
