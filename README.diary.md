# shipping-fasterr

Monorepo template for creating and shipping your startup faster than ever!

## My Process for creating Shipping Faster

### Create Monorepo

- [x] Create a new repo on GitHub

### Add backed and frontend folders

- [x] Add backend folder with simple [Hono](https://hono.dev/) server
- [x] Add frontend (universal) folder using `npm create tamagui@latest` more info [tamagui](https://tamagui.dev/)

### Setup monorepo

- [ ] Move packages (`eslint`, `prettier`, ...) from `dependencies` to `devDependencies`

### Setup frontend project

- [x] Use app router for next.js (delete pages router stuff)
- [x] Setup tokens for tamagui that are based on [tailwindcss](https://tailwindcss.com/)
- [x] Setup custom themes (light and dark?) for tamagui with toggle on web and native
- [x] Setup eslint and prettier
- [x] Setup eslint for Next app
- [x] Setup eslint for Expo app
- [x] Run `eslint --fix .` for `expo`
- [x] ~~Run `eslint --fix .`~~ **Fix by hand because of issue with old next-eslint-config** for `next`
- [x] Run `eslint --fix .` for `packages/app`
- [x] Run `eslint --fix .` for `packages/config`
- [x] Run `eslint --fix .` for `packages/ui`
- [ ] Run `prettier --write .` for all files
- [ ] Setup Expo App.json

### Setup backend project

- [x] Switch from hono to express because of bigger community and better AI support
- [x] Create true monorepo
- [x] Add simple routes for testing
- [ ] Setup basic packages and structure
- [ ] Setup eslint and prettier
- [ ] Add authentication

### Start building your dream app

- [ ] Add your own pages
- [ ] Add your own components
- [ ] Add your own API routes
