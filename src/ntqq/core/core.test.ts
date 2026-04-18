import { beforeEach, describe, expect, it, vi } from "vitest"

const runtimeState = {
  wrapperEngine: { kind: 'engine' },
  loginService: { kind: 'login' },
  wrapperSession: { kind: 'session' },
  startupSessionWrapper: { kind: 'startup' },
}

const mockState = vi.hoisted(() => ({
  initialized: false,
}))

vi.mock("./service/nt-wrapper", () => ({
  getNTWrapper: vi.fn(() => {
    mockState.initialized = true
    return {}
  }),
  resetNTWrapper: vi.fn(),
}))

vi.mock("./runtime-store", () => ({
  getCurrentNTUserInfo: vi.fn(),
  patchCurrentNTSelfIdentity: vi.fn(),
  requireCurrentNTRuntime: vi.fn(() => {
    if (!mockState.initialized) {
      throw new Error('runtime not initialized')
    }
    return runtimeState
  }),
  requireCurrentNTSelfInfo: vi.fn(),
  requireCurrentNTUserInfo: vi.fn(),
}))

vi.mock("./dispatcher", () => ({
  createNTListenerProxy: vi.fn(() => ({})),
}))

import { getNTLoginService, getNTWrapperEngine, getNTWrapperSession } from "./core"

describe("nt core runtime service access", () => {
  beforeEach(() => {
    mockState.initialized = false
    vi.clearAllMocks()
  })

  it("initializes wrapper runtime before reading wrapper engine", () => {
    expect(getNTWrapperEngine()).toBe(runtimeState.wrapperEngine)
  })

  it("initializes wrapper runtime before reading login service", () => {
    expect(getNTLoginService()).toBe(runtimeState.loginService)
  })

  it("initializes wrapper runtime before reading wrapper session", () => {
    expect(getNTWrapperSession()).toBe(runtimeState.wrapperSession)
  })
})
