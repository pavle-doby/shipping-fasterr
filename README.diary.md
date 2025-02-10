# shipping-faster

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
- [x] Run `eslint --fix .` on for `expo`
- [ ] Run `eslint --fix .` on for `next`
- [ ] Run `eslint --fix .` on for `packages/app`
- [ ] Run `eslint --fix .` on for `packages/config`
- [ ] Run `eslint --fix .` on for `packages/ui`
- [ ] Run `prettier --write .` on for `expo`
- [ ] Run `prettier --write .` on for `next`
- [ ] Run `prettier --write .` on for `packages/app`
- [ ] Run `prettier --write .` on for `packages/config`
- [ ] Run `prettier --write .` on for `packages/ui`
- [ ] Run prettier --write on all files
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
