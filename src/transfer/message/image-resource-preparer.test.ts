import { afterEach, describe, expect, it, vi } from "vitest"

const fsMocks = vi.hoisted(() => ({
  existsSync: vi.fn(),
}))

vi.mock("fs", () => ({
  existsSync: fsMocks.existsSync,
}))

vi.mock("../../common/file", () => ({
  downloadFile: vi.fn(),
  getImageInfo: vi.fn(),
}))

vi.mock("../../ntqq/common/nt-api", () => ({
  getRichMediaFilePathForGuild: vi.fn(),
}))

vi.mock("../../ntqq/common/fs-api", () => ({
  copyFile: vi.fn(),
}))

import { CustomError } from "../../common/error/custom-error"
import { prepareSendImageResource } from "./image-resource-preparer"

describe("prepareSendImageResource", () => {
  afterEach(() => {
    fsMocks.existsSync.mockReset()
    vi.restoreAllMocks()
  })

  it("throws when neither a local file nor a url is available", async () => {
    fsMocks.existsSync.mockReturnValue(false)

    const task = prepareSendImageResource(
      {
        type: "simple",
        width: 0,
        height: 0,
        size: 0,
        path: "/tmp/missing-image.jpg",
      },
      () => "ignored.jpg",
    )

    await expect(task).rejects.toBeInstanceOf(CustomError)
    await expect(task).rejects.toThrow("File does not exists! /tmp/missing-image.jpg")
  })
})
