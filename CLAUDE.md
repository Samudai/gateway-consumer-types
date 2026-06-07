# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A **type-only** TypeScript package, published to npm as `@samudai_xyz/gateway-consumer-types`. It contains no runtime logic — only `type`s, `interface`s, and `enum`s shared by the Samudai Gateway Consumer services and their clients. Changes here are contract changes consumed downstream, so treat field renames/removals as breaking.

## Commands

- `npm run build` — full build, runs all four targets below in sequence. Each target cleans its output dir first (via `tools/cleanup.js`) then compiles.
  - `npm run build:cjs` / `build:esm` / `build:types` — `tsc` against `config/tsconfig.{cjs,esm,types}.json` → `dist/cjs`, `dist/esm`, `dist/types`.
  - `npm run build:umd` — webpack (`config/webpack.config.js`) → `dist/umd`.
- `npm test` — `jest --no-cache --runInBand`. **The `pre-commit` husky hook runs `npm run lint` then this on every commit.**
- `npm run test:cov` — tests with coverage.
- Run a single test: `npx jest test/Num.test.ts` (or `-t "<test name>"` to filter by name).
- `npm run lint` / `npm run lint:fix` — ESLint 9 (flat config in `eslint.config.mjs`) over `src/**/*.ts`.
- `npm run clean` — remove all `dist` output.

Toolchain: Node 22 (`.nvmrc`, `engines.node >=22`).

Note: jest only looks in `test/` (see `jest.config.js` `roots`), not `src/`.

## Architecture

Every domain lives under `src/<domain>/` and contains up to three files, each with a fixed role:

- `types.ts` — `type` aliases (data shapes / DTOs, e.g. `Project`, `Task`).
- `interfaces.ts` — `interface`s, typically request/response shapes for gateway calls (e.g. `createProjectRequest`, `getTokenRes`).
- `enums.ts` — string `enum`s (e.g. `TaskStatus`, `LinkType`).

`src/index.ts` is the single public barrel and the source of truth for what ships. It re-exports with **three distinct conventions** — match the existing pattern when adding a module:

1. **Types and interfaces are re-exported flat** (`export * from './<domain>/types'`), so their names share one global namespace across all domains — names must be globally unique.
2. **Enums are re-exported under a namespace** (`export * as ProjectEnums from './project/enums'`), so consumers reference them as `ProjectEnums.TaskStatus`. Enum member names only need to be unique within their domain.
3. Some modules are intentionally commented out in `index.ts` (e.g. `web3/enums`, `cron/types`). A file existing under `src/` does **not** mean it's exported — verify against `index.ts`.

Cross-module references import either from a sibling file (`'../jobs/types'`) or from the barrel via `'..'` (e.g. `import { Metadata } from '..'`). Adding a new domain requires both creating `src/<domain>/*.ts` **and** wiring the corresponding `export` line(s) into `src/index.ts`, or it won't be published.

## Conventions

- **Field naming is `snake_case`** inside type/interface members (`project_id`, `created_by`), even though this is TypeScript — these mirror the backend JSON wire format. Follow it.
- The standard gateway response envelope is `{ message, data }` on success and `{ message, error }` on error; response interfaces in `interfaces.ts` model this.
- Lint/format: ESLint with `@typescript-eslint/recommended` + Prettier (`prettier/prettier` is an error). Config in `.eslintrc.js` / `.prettierrc.js`.
- **Commits must follow Conventional Commits** — enforced by the `commit-msg` husky hook via commitlint (`@commitlint/config-conventional`).

## Releasing

Publishing is **tag-driven**, not branch-driven, and targets **GitHub Packages** (`npm.pkg.github.com`). Pushing a tag matching `v*` triggers `.github/workflows/publish.yml`, which lints, builds, and runs `npm publish` authenticated via the built-in `GITHUB_TOKEN`. Bump `version` in `package.json` and push a matching `v<version>` tag to release. Do not publish manually.

The package scope (`@samudai`) must match the GitHub repo owner — that's a hard GitHub Packages requirement. The committed `.npmrc` maps the scope to the registry; it contains no auth token.
