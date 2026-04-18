/// <reference types="jest" />

let initialized = false

const runtimeState = {
  wrapperEngine: { kind: 'engine' },
  loginService: { kind: 'login' },
  wrapperSession: { kind: 'session' },
  startupSessionWrapper: { kind: 'startup' },
}

jest.mock("./service/nt-wrapper", () => ({
  getNTWrapper: jest.fn(() => {
    initialized = true
    return {}
  }),
  resetNTWrapper: jest.fn(),
}))

jest.mock("./runtime-store", () => ({
  getCurrentNTUserInfo: jest.fn(),
  patchCurrentNTSelfIdentity: jest.fn(),
  requireCurrentNTRuntime: jest.fn(() => {
    if (!initialized) {
      throw new Error('runtime not initialized')
    }
    return runtimeState
  }),
  requireCurrentNTSelfInfo: jest.fn(),
  requireCurrentNTUserInfo: jest.fn(),
}))

jest.mock("./dispatcher", () => ({
  createNTListenerProxy: jest.fn(() => ({})),
}))

describe("nt core runtime service access", () => {
  beforeEach(() => {
    initialized = false
  })

  it("initializes wrapper runtime before reading wrapper engine", () => {
    const { getNTWrapperEngine } = require("./core")

    expect(getNTWrapperEngine()).toBe(runtimeState.wrapperEngine)
  })

  it("initializes wrapper runtime before reading login service", () => {
    const { getNTLoginService } = require("./core")

    expect(getNTLoginService()).toBe(runtimeState.loginService)
  })

  it("initializes wrapper runtime before reading wrapper session", () => {
    const { getNTWrapperSession } = require("./core")

    expect(getNTWrapperSession()).toBe(runtimeState.wrapperSession)
  })
})
