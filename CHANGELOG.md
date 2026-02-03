# Changelog

## 0.1.0 (2026-02-03)

Full Changelog: [v0.0.1...v0.1.0](https://github.com/jasonHzq/pet-test-126-typescript/compare/v0.0.1...v0.1.0)

### ⚠ BREAKING CHANGES

* **mcp:** remove deprecated tool schemes
* **mcp:** **Migration:** To migrate, simply modify the command used to invoke the MCP server. Currently, the only supported tool scheme is code mode. Now, starting the server with just `node /path/to/mcp/server` or `npx package-name` will invoke code tools: changing your command to one of these is likely all you will need to do.

### Features

* **api:** manual updates ([9e583ef](https://github.com/jasonHzq/pet-test-126-typescript/commit/9e583ef618dfe020cc9e4fe05db802776ee52c43))
* **api:** manual updates ([de0e87e](https://github.com/jasonHzq/pet-test-126-typescript/commit/de0e87e7e49028429b75506c506bdc56832d32b1))


### Bug Fixes

* **client:** avoid memory leak with abort signals ([0e91347](https://github.com/jasonHzq/pet-test-126-typescript/commit/0e913477bdf73a0d1ddb181f3d9788cf0d3b96b2))
* **docs:** fix mcp installation instructions for remote servers ([5fea1bf](https://github.com/jasonHzq/pet-test-126-typescript/commit/5fea1bf04827e228012a6bc9dd957121870cf2d5))
* **mcp:** add client instantiation options to code tool ([e34e10d](https://github.com/jasonHzq/pet-test-126-typescript/commit/e34e10dda9022cee5a0a2977b03c78841e6a8af6))
* **mcp:** allow falling back for required env variables ([5d53b62](https://github.com/jasonHzq/pet-test-126-typescript/commit/5d53b62d644515a77acc4d189e7414a7049c8cd0))
* **mcp:** correct code tool api output types ([9df340c](https://github.com/jasonHzq/pet-test-126-typescript/commit/9df340cdedb1b43b2a43f86d2286a30dac4cc918))
* **mcp:** fix options parsing ([e709e13](https://github.com/jasonHzq/pet-test-126-typescript/commit/e709e13b7ae4c8f6e56fd698d847413ad80f406c))
* **mcp:** pass base url to code tool ([56d53a2](https://github.com/jasonHzq/pet-test-126-typescript/commit/56d53a2d237ba6eb1e102d50c5fd3c2d1834ddb3))
* **mcp:** update code tool prompt ([ed66412](https://github.com/jasonHzq/pet-test-126-typescript/commit/ed66412f444169315e2075374fe0ec7bd7a7e80f))


### Chores

* break long lines in snippets into multiline ([c6ed83a](https://github.com/jasonHzq/pet-test-126-typescript/commit/c6ed83ac12203e4d637c5b6431134a542cb18fe1))
* **ci:** upgrade `actions/github-script` ([0fc99e0](https://github.com/jasonHzq/pet-test-126-typescript/commit/0fc99e040fe3c4331ab5987701c6d222d3d7175d))
* **client:** do not parse responses with empty content-length ([af7f313](https://github.com/jasonHzq/pet-test-126-typescript/commit/af7f313879f10628125eaa70573751827cb56f06))
* configure new SDK language ([2d8fad1](https://github.com/jasonHzq/pet-test-126-typescript/commit/2d8fad13f0d3bf9cb175603ae51b3aaa0b730e26))
* fix typo in descriptions ([4c5aae3](https://github.com/jasonHzq/pet-test-126-typescript/commit/4c5aae32a1cbfb7d22c00aedf2bdef14cd3dfa89))
* **internal:** bump MCP dependencies ([15d2382](https://github.com/jasonHzq/pet-test-126-typescript/commit/15d2382843bfa4247a494f6959e2badd4df7aaaf))
* **internal:** codegen related update ([c4edb2c](https://github.com/jasonHzq/pet-test-126-typescript/commit/c4edb2c69a7c7816de8d1c57bc0b98d4f9244fb3))
* **internal:** codegen related update ([1b6aad6](https://github.com/jasonHzq/pet-test-126-typescript/commit/1b6aad66eeae7c9cc9ca7bbddcb7bc10d6d87e68))
* **internal:** codegen related update ([5a2e5f2](https://github.com/jasonHzq/pet-test-126-typescript/commit/5a2e5f2a7a5fe34fece7c6ae36cd9f5263838172))
* **internal:** codegen related update ([2e7d285](https://github.com/jasonHzq/pet-test-126-typescript/commit/2e7d2859fb17973f02fedd56b107057b02b2a33b))
* **internal:** codegen related update ([f1560e4](https://github.com/jasonHzq/pet-test-126-typescript/commit/f1560e458fac1bfba820cb584ba70136125be007))
* **internal:** codegen related update ([f5014ed](https://github.com/jasonHzq/pet-test-126-typescript/commit/f5014ed66346a9268e2137f34aeb0b7873be8b95))
* **internal:** codegen related update ([75957a1](https://github.com/jasonHzq/pet-test-126-typescript/commit/75957a1fcf693e63071e5980f1b45adfdd53da99))
* **internal:** codegen related update ([73d67dc](https://github.com/jasonHzq/pet-test-126-typescript/commit/73d67dcc713cb374058747a43eb1c02746fdb64c))
* **internal:** codegen related update ([fc06073](https://github.com/jasonHzq/pet-test-126-typescript/commit/fc060738ab7805b9b679636e6eb19d45ece68119))
* **internal:** codegen related update ([6b28628](https://github.com/jasonHzq/pet-test-126-typescript/commit/6b28628c1d1e679c169e4f0a860e9cdaafbe2a2f))
* **internal:** codegen related update ([da8f050](https://github.com/jasonHzq/pet-test-126-typescript/commit/da8f050ace13b86b7e0270dde5534d20be35da00))
* **internal:** codegen related update ([284a195](https://github.com/jasonHzq/pet-test-126-typescript/commit/284a1955405c01b982d0de065e32cab0fb0fafe2))
* **internal:** support oauth authorization code flow for MCP servers ([0ad523d](https://github.com/jasonHzq/pet-test-126-typescript/commit/0ad523d19dd3a0e2ea93915a55472ee69d365017))
* **internal:** update `actions/checkout` version ([d443db9](https://github.com/jasonHzq/pet-test-126-typescript/commit/d443db9b289c43eeb5d087d1453d8782aa2a2b87))
* **internal:** update lock file ([73af1e9](https://github.com/jasonHzq/pet-test-126-typescript/commit/73af1e93d4eaf3cf1769efd05d0ef7620439b8dc))
* **internal:** upgrade babel, qs, js-yaml ([730ef87](https://github.com/jasonHzq/pet-test-126-typescript/commit/730ef87031550e5494286aa39a0f88e10c659c96))
* **internal:** upgrade brace-expansion and @babel/helpers ([a7996dd](https://github.com/jasonHzq/pet-test-126-typescript/commit/a7996ddbe782e67f83cb77688cfd5349115b3607))
* **mcp:** add intent param to execute tool ([6b11fc1](https://github.com/jasonHzq/pet-test-126-typescript/commit/6b11fc127f501f118d9e34d3afe70651be119785))
* **mcp:** pass intent param to execute handler ([2df3673](https://github.com/jasonHzq/pet-test-126-typescript/commit/2df3673f0ecf2eaaa2029af3a0c507589c13aefd))
* **mcp:** remove deprecated tool schemes ([4313a88](https://github.com/jasonHzq/pet-test-126-typescript/commit/4313a8867d80989b1acec825826cf921221497c0))
* **mcp:** up tsconfig lib version to es2022 ([373f9a7](https://github.com/jasonHzq/pet-test-126-typescript/commit/373f9a7173cf904c58955fbcccb736827d80300b))
* **mcp:** upgrade dependencies ([d92446b](https://github.com/jasonHzq/pet-test-126-typescript/commit/d92446bb2898a2e4717c67734881c987169ba258))
* update SDK settings ([2f0cb10](https://github.com/jasonHzq/pet-test-126-typescript/commit/2f0cb100ac6286442904d2b1f2f9d0ebaac32eb5))


### Documentation

* prominently feature MCP server setup in root SDK readmes ([cb07b02](https://github.com/jasonHzq/pet-test-126-typescript/commit/cb07b02bae4a2b4d7c203e98d7ccfa92b37fca6f))
