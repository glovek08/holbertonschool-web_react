<p align="right">
  <a href="https://holbertonschool.uy/" target="_blank" style="border:0;">
    <img src="https://github.com/glovek08/glovek08/blob/main/holberton_logo.png?raw=true" height="50" alt="Holberton Logo"/>
  </a>
</p>

# Holberton - Web React
TypeScript concepts: types, interfaces, classes, functions, DOM handling, generics, namespaces, declaration merging, and basic nominal typing.

## Index

- [Holberton - Web React](#holberton---web-react)
  - [Index](#index)
    - [Project Notes](#project-notes)
    - [Resources](#resources)
    - [Webpack](#webpack)
      - [Webpack tutorial 👈👈](#webpack-tutorial-)


### Project Notes

For this project I'll use the recommended webpack directory structure:

```text
task_#/
├── dist/
│   ├── bundle.js
│   └── index.html
├── js/
│   └── main.ts
├── .eslintrc.js
├── package.json
├── tsconfig.json
└── webpack.config.js
```

### Resources
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/) — Official TypeScript guide.
- [tsconfig Reference](https://www.typescriptlang.org/tsconfig) — tsconfig.json options.
- [ts-loader (webpack)](https://github.com/TypeStrong/ts-loader) — TypeScript loader for Webpack.
- [Webpack Official Docs](https://webpack.js.org/concepts/) — Bundler concepts and configuration.
- [webpack-cli](https://github.com/webpack/webpack-cli) — CLI for running webpack.
- [webpack-dev-server / webpack serve](https://webpack.js.org/configuration/dev-server/) — Dev server and hot reloading.
- [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin) — Injects bundles into index.html.
- [ESLint](https://eslint.org/docs/latest/user-guide/getting-started) — Linting guide for JS/TS.
- [MDN — DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model) — DOM APIs reference.
- [The Odin Project — Webpack tutorial](https://www.theodinproject.com/lessons/javascript-webpack) — Practical guide.

### Webpack

I've already worked with webpack, check it out, it's very detailed and guided :D
#### [Webpack tutorial](https://github.com/glovek08/The_Odin_Project-Tutorials/tree/main/webpack-practice) 👈👈

* Run webpack:
  ```bash
  $ npx webpack
  ```
* Run webpack server
  ```bash
  $ npx webpack serve
  ```