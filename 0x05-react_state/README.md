# 0x05. React state

## Description :bulb:

- What the state of a component or a container is
- The lifecycle of a component
- How to modify a state and execute code in the right order
- What a controlled component is
- How to use Forms in React
- How to reuse smaller components, keep them pure, and lift its state to principal containers
- The use of a React Hook and how to create one
- How to test State changes with Enzyme

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

- [State and lifecycle](https://legacy.reactjs.org/docs/state-and-lifecycle.html)
- [SetState and State callback](https://legacy.reactjs.org/docs/react-component.html)
- [Context](https://legacy.reactjs.org/docs/context.html)
- [Forms and Controlled components](https://legacy.reactjs.org/docs/forms.html)
- [Lifting State Up](https://legacy.reactjs.org/docs/lifting-state-up.html)
- [React Hooks](https://legacy.reactjs.org/docs/hooks-intro.html)
- [Enzyme State](https://enzymejs.github.io/enzyme/docs/api/ReactWrapper/state.html)
- [Enzyme SetState](https://enzymejs.github.io/enzyme/docs/api/ShallowWrapper/setState.html)
- [Enzyme Instance](https://enzymejs.github.io/enzyme/docs/api/ShallowWrapper/instance.html)
- [Enzyme Simulate](https://enzymejs.github.io/enzyme/docs/api/ShallowWrapper/simulate.html)
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

### [0. Adding a local state for notifications(App Folder)](./task_0/dashboard/src/App/)

### [0. Adding a local state for notifications(Notifications Folder)](./task_0/dashboard/src/App/Notifications)

### [1. Controlled components and state callback](./task_1/dashboard/src/Login/)

### [2. Context(App Folder)](./task_2/dashboard/src/App/)

### [2. Context(Login Folder)](./task_2/dashboard/src/Login/)

### [2. Context(Header Folder)](./task_2/dashboard/src/Header/)

### [3. Context consumer & advanced state(Footer Folder)](./task_3/dashboard/src/Footer/)

### [3. Context consumer & advanced state(App Folder)](./task_3/dashboard/src/App/)

### [3. Responsive design (Notifications File)](./task_3/dashboard/src/Notifications/Notifications.test.js)

### [4. Introduction to react hook](./task_4/dashboard/src/CourseList/CourseListRow.js)