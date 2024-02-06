# 0x03. React component

## Description :bulb:

- When to use a Class or a function to create a component
- The lifecycle of a Class component
- How to test a component
- How to utilize a Jest spy to verify that a function is being called correctly
- What an HOC is and how to use it
- How to optimize performance and control which components to render

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

- [React components](https://legacy.reactjs.org/docs/react-component.html)
- [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
- [Enzyme Shallow](https://enzymejs.github.io/enzyme/docs/api/shallow.html)
- [Enzyme Mount](https://enzymejs.github.io/enzyme/docs/api/ReactWrapper/mount.html)
- [Enzyme Unmount](https://enzymejs.github.io/enzyme/docs/api/ReactWrapper/unmount.html)
- [React Pure components](https://legacy.reactjs.org/docs/react-api.html)
- [React Higher Order Components](https://legacy.reactjs.org/docs/higher-order-components.html)
- [Jest mock function](https://jestjs.io/docs/jest-object)

---

## Requirements :hammer:

- Ubuntu 18.04 LTS using `Node 12.x.x` and `npm 6.x.x`

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

## Files :card_file_box:

### [0. Commence with class components](./task_0/dashboard/dashboard/src/App/App.js)

### [1. Lifecycles](./task_1/dashboard/src/App/)

### [2. Handling Events](./task_2/dashboard/src/Notifications/)

### [3. Reusable comments & specialization](./task_3/dashboard/src/BodySection/BodySection.js)

### [4. Specialization](./task_3/dashboard/src/BodySection/)

### [5. Use the new components](./task_3/dashboard/src/App/App.js)
### [6. Test the new components](./task_3/dashboard/src/BodySection/)
### [7. Create WithLogging HOC](task_4/dashboard/src/HOC/WithLogging.js)
### [8. Write a test for the HOC](task_4/dashboard/src/HOC/WithLogging.test.js)
### [9. Declare a pure component](task_5/dashboard/src/Notifications/NotificationItem.js)
### [10. Make your own pure component](task_5/dashboard/src/Notifications/Notifications.js)
### [11. Add a test](task_5/dashboard/src/Notifications/Notifications.test.js)