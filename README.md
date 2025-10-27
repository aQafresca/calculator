<a id="readme-top"></a>

<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkJwU4C9-KCHgazoHqkl5MZp03Gh2NX5GErw&s" alt="Logo" width="80" height="80">
  </a>
  <h1 align="center">Simple Calculator</h1>
</div>

<details>
  <summary><h2>Table of contents</h2></summary>
  <ol>
    <li>
      <a href="#about-project">About project</a>
      <ul>
        <li><a href="#description">Description</a></li>
        <li><a href="#-key-benefits">Key benefits</a></li>
        <li><a href="#technologies-used">Technologies Used</a></li>
        <li><a href="#project-architecture">Project architecture</a></li>
      </ul>
    </li>
    <li>
      <a href="#usage">Usage</a>
      <ul>
        <li><a href="#setup-instructions">Setup Instructions</a></li>
        <li><a href="#scripts-in-project">Scripts in project</a></li>
      </ul>
    </li>
    <li>
      <a href="#the-following-people-were-involved-in-the-project">The following people were involved in the project</a>
    </li>
  </ol>
</details>

## About Project

<a href="https://docs.google.com/document/d/1zpXXeSae-BlcxPKgw3DhxZA92cspVailrPYoaXSYrW8/edit?tab=t.0#heading=h.5dt3hghpa22f">task: simple calculator application</a>

### Description

This is a test assignment for Innowise Group.
The goal of the project is to develop a simple calculator application built with pure JavaScript and bundled using Webpack.
The application includes basic arithmetic functionality and supports theme switching between light and dark modes.

### 🔥 Key Benefits

- 🧭 **Intuitive and friendly UI**
- ⚡ \*\*Fast loading
- 🛍️ **Added a lot feature, like a variables**

### Technologies Used

##### Main language

<ul>
  <li>
    <a href="https://javascript.info/">
      <img width="20" height="20" alt="js" src="https://raw.githubusercontent.com/devicons/devicon/54cfe13ac10eaa1ef817a343ab0a9437eb3c2e08/icons/javascript/javascript-plain.svg" />   JavaScript
    </a>
  </li>
</ul>

##### Main frameworks and libraries

<ul>
  <li>
    <a href="https://sass-lang.com/">
  <img width="20" height="20" alt="sass" src="https://github.com/user-attachments/assets/3377a403-5b34-4940-adb3-35b0a2d053f3" /> SCSS
    </a>
  </li>
</ul>

##### Linters
<ul>
  <li>
    <a href="https://eslint.org/">
       <img width="20" height="20" alt="eslint" src="https://github.com/user-attachments/assets/74d78cc4-ff18-4883-bdc2-5d80146fcfc5" /> ESLint
    </a>
  </li>
  <li>
    <a href="https://prettier.io/">
      <img width="20" height="20" alt="prettier" src="https://github.com/user-attachments/assets/da74e4d3-6e23-4f55-a671-62c5bab39eec" /> Prettier
    </a>
  </li>
  <li>
    <a href="https://github.com/lint-staged/lint-staged">
      <img width="20" height="20" alt="lint-staged" src="https://github.com/user-attachments/assets/e510e2e3-4ae0-4738-9826-5cb5f87ed8c4" /> Lint-staged
    </a>
  </li>
</ul>

##### Git hooks

<ul>
  <li>
    <a href="https://typicode.github.io/husky/">🐶 Husky</a>
  </li>
</ul>


### Project architecture

- styles - Contains global styling resources - including global styles, variables, mixins, normalize, and helper functions for consistent design across the project.
- components - Reusable UI components used for building application pages and layouts.
- constants - Reusable UI components used for building application pages and layouts.
- theme - The theme automatically adapts to the user's system preference (light or dark mode), but can also be manually toggled.
- state - Stores and manages shared app data in plain JavaScript.
- utils - General utility functions and helper modules shared across the project.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Usage

### Setup Instructions

1. Install Node.js (Node version >= v22.13.1)

```sh
npm install npm@latest -g
```

2. Obtain the Project Files: you have two options for obtaining the project files:

- Fork the Repository: If you plan to contribute to the project or make changes to the code, it's recommended to fork the repository. This will create a copy of the repository under your GitHub account. [Fork the repository](https://github.com/aQafresca/calculator/fork) to create a copy under your account.

- Download the Repository: If you only intend to use the project locally and don't plan to contribute changes, you can simply download the repository as a ZIP file. [Download the repository](https://github.com/aQafresca/calculator/archive/refs/heads/main.zip) as a ZIP file and extract it to your local machine.

3. Clone the Repository (if Forked): if you forked the repository, clone your newly created repo to your local machine using the following command:

```
git clone https://github.com/YOUR-USERNAME/calculator.git
```

4. Navigate to the Project Directory: once you have obtained the project files (either by forking or downloading), navigate to the project directory:

```
cd calculator
```

5. To install all dependencies use:

```
npm install
```

6. Run development version:

```
npm run start
```

7. Build the Project:

to build the project, use the following command:

```
npm run build:prod
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Scripts in project

1. `npm run start` - Launches the project in development mode with live reloading.
2. `npm run build:dev` - Builds the project into the dist folder in development configuration.
3. `npm run build:prod` - Builds the project into the dist folder optimized for production.
4. `npm run format` - Formats all JavaScript and SCSS files using Prettier and Stylelint.
5. `npm run lint` - Runs ESLint to check JavaScript files for potential issues.
6. `npm run lint:fix` - Automatically fixes formatting and linting issues in JS and SCSS files.
7. `npm run prepare` - Initializes Husky for managing Git hooks.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## The following people were involved in the project

### Authors

- [aQafresca](https://github.com/aQafresca)

<p align="right">(<a href="#readme-top">back to top</a>)</p>
