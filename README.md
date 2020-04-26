# blog.javed.dev

This repository contains the codebase for https://blog.javed.dev.

This project was built with [GatsbyJS](https://www.gatsbyjs.org/).

This project has [ESLint](https://eslint.org/) to lint JavaScript and React, [Prettier](https://prettier.io/) to format code according to a specified set of rules, [Husky](https://github.com/typicode/husky) to automate the process before each commit, and [lint-staged](https://github.com/okonet/lint-staged) to auto-apply any linting and formatting to staged files ready to be commited.

## 🚀 Quick start

1.  **Clone this repo.**

    ```sh
    git clone git@github.com:akhtarja/javed-blog.git
    ```

1.  **Start developing.**

    Navigate into your new site’s folder and start it up.

    ```sh
    cd javed-blog/
    npm install
    gatsby develop
    ```

    Your site is now running at `http://localhost:8000`.

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

## Creating an Optimized Production Build

```
gatsby build
gatsby serve
```

Your production-ready site is now running at `http://localhost:9000`. The site assets are located in teh `public` folder.
