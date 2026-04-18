# AGENTS

This file gives coding agents and contributors a fast, project-specific map of the Yui repository.

## Project Summary

- Yui is a TypeScript-based bot framework around NTQQ/QQ integration.
- The runtime entry is `src/index.ts`, which initializes OneBot actions, starts HTTP/WebSocket servers, and loads native pieces on Linux.
- The main build output is bundled with Rollup into `program/index.js` (CommonJS format).
- The project expects the Node.js version to match the official client version. The current documented version is `v20.18.1` in `README.MD`.

## Package Manager And Toolchain

- Package manager: `pnpm`
- Language: TypeScript with ESM source files
- Bundler: Rollup
- Test runner: Jest with `ts-jest`
- Native/runtime coupling: Electron/NTQQ-related native modules and preload hooks are part of normal development flow

## Common Commands

Use the commands defined in `package.json` rather than older names in some docs.

- Install dependencies: `pnpm install`
- Install Yui runtime assets: `pnpm run yui:install`
- Start Rollup watch build: `pnpm run yui:dev`
- Build once: `pnpm run yui:build`
- Start node-mode runtime: `pnpm run yui:nodestart`
- Install UI assets: `pnpm run ui:install`
- Start UI mode: `pnpm run ui:start`
- Start UI mode with log file: `pnpm run ui:start-log-file`
- Regenerate protobuf TS files: `pnpm run proto:generate`
- Watch protobuf changes: `pnpm run proto:watch`
- Compile JS to bytecode helper: `pnpm run compile-jsc`
- Run tests directly: `pnpm exec jest`

## Important Documentation

- Overview: `README.MD`
- Dev workflow: `docs/dev.md`
- Manual environment setup: `docs/dev-manual.md`
- Patch notes / validation removal: `docs/patch.md`
- Exported function inventory: `docs/function.md`

Note: `docs/dev.md` still uses older command names such as `pnpm run dev` and `pnpm run nodestart`. Prefer the `yui:*` and `ui:*` scripts from `package.json`.

## Repository Map

### Source directories

- `src/index.ts`: main runtime entry
- `src/bootstrap`: startup/runtime orchestration
- `src/adapters`: protocol and runtime adapters for HTTP, WebSocket, OneBot, and server startup
- `src/app`: application services for higher-level use cases such as login and message flows
- `src/server`: legacy-compatible server entrypoints plus HTTP/WebSocket implementations
- `src/http`: legacy-compatible HTTP route and handler area; newer route assembly now lives under `src/adapters/http`
- `src/onebot`: legacy-compatible OneBot entrypoints plus protocol-specific handlers
- `src/ntqq`: NTQQ-related types, protobuf code, helpers, and store logic
- `src/wrapper`: wrapper hook logic and exported wrapper service shims
- `src/native`: native initialization
- `src/common`: shared utilities, logging, locks, file helpers
- `src/store`: config and persistence helpers
- `src/models`: contact and model abstractions
- `src/transfer`: login/message conversion flow
- `src/test`: in-repo runtime test hooks used by the entrypoint

### Build/runtime/support directories

- `tools/yui`: install/build/dev/nodestart scripts
- `tools/ui`: UI startup/install helpers
- `tools/wrapper`: wrapper-related code generation/helpers
- `program`: runtime/program assets and generated launcher output
- `dist`: additional compiled artifacts such as the UI hook bundle
- `resources`: static assets
- `docs`: project documentation and reverse-engineering notes
- `test`: ad hoc scripts and artifacts, not the main Jest suite

## Change Guidelines

### 1. Respect generated or semi-generated areas

- `src/ntqq/protobuf/*.ts` is generated from `.proto` files. If behavior depends on protobuf schema changes, update the `.proto` files first and regenerate with `pnpm run proto:generate`.
- Large wrapper export files under `src/wrapper/exports` are repetitive and may be generated or scaffolded by helper scripts in `tools/wrapper`. When making broad changes, inspect the generator path before hand-editing many files.

### 2. Be careful around runtime-coupled code

- `src/index.ts`, `src/wrapper/hook.ts`, `src/native`, and `tools/yui/nodestart.cjs` are tightly coupled to local NTQQ/native runtime behavior.
- Linux runtime depends on `YUI_PRELOAD` and `YUI_NATIVE` paths. Windows runtime has different hard-coded development assumptions.
- Avoid “cleanup” changes in these paths unless they are necessary for the task and validated against the existing startup flow.

### 3. Follow existing implementation patterns

- Prefer placing new orchestration and registration logic in `src/adapters/**` and `src/app/**`.
- Treat files such as `src/onebot/onebot.ts`, `src/onebot/actions/index.ts`, `src/onebot/event/index.ts`, and `src/server/index.ts` as compatibility entrypoints; keep them thin.
- New OneBot actions should usually be implemented via `src/app/**` or adapter helpers, with `src/onebot/actions/**` remaining thin registration or compatibility layers.
- Server-facing changes should remain split between HTTP (`src/server/http.ts`, `src/adapters/http/**`) and WebSocket (`src/server/websocket.ts`, `src/adapters/ws/**`) concerns.
- Shared utilities belong in `src/common` or the nearest domain module instead of adding duplicate helpers.

## Verification Guidance

Choose the lightest useful verification for the files you touch.

- For TypeScript or bundling changes: run `pnpm run yui:build`
- For protobuf changes: run `pnpm run proto:generate`
- For unit-testable logic: run `pnpm exec jest`
- For runtime/bootstrap changes: if possible, also validate with `pnpm run yui:nodestart`

Because this repo integrates with local QQ/NTQQ assets and native modules, some runtime validation may not be possible in a clean sandbox. If you cannot run full validation, state that clearly.

## Working Agreements For Agents

- Prefer small, surgical edits over broad formatting churn.
- Do not rewrite generated protobuf outputs manually unless regeneration is intentionally out of scope and the change is very localized.
- When editing wrapper export files, preserve logging and call-through structure unless the task is explicitly about changing that behavior.
- Check for outdated docs before following them blindly; `package.json` is the source of truth for runnable scripts.
- Treat `program`, native paths, and startup scripts as integration-sensitive areas.

## Known Gotchas

- The repository may already contain built artifacts and local runtime assets such as `program`, `dist`, `cache`, and `tmp`.
- The working tree may also include local-only files or directories such as `.codex`; avoid touching unrelated files.
- The Jest setup exists, but a large portion of the project behavior is integration-driven rather than covered by isolated tests.
