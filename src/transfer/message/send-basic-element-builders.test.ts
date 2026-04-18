/// <reference types="jest" />

jest.mock("../../ntqq/common/fs-api", () => ({
  getFileType: jest.fn(),
}))

import { buildTextSendElement } from "./send-basic-element-builders"

describe("buildTextSendElement", () => {
  it("builds a text message element when text exists", () => {
    const result = buildTextSendElement({
      type: "text",
      data: {
        text: "hello",
      },
    })

    expect(result).toEqual({
      elementType: 1,
      elementId: "",
      textElement: {
        content: "hello",
        atType: 0,
        atUid: "",
        atTinyId: "",
        atNtUid: "",
      },
    })
  })
})
