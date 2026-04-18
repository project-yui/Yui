/// <reference types="jest" />
import * as fs from "fs"

jest.mock("../../common/file", () => ({
  downloadFile: jest.fn(),
  getImageInfo: jest.fn(),
}))

jest.mock("../../ntqq/common/nt-api", () => ({
  getRichMediaFilePathForGuild: jest.fn(),
}))

jest.mock("../../ntqq/common/fs-api", () => ({
  copyFile: jest.fn(),
}))

import { CustomError } from "../../common/error/custom-error"
import { prepareSendImageResource } from "./image-resource-preparer"

describe("prepareSendImageResource", () => {
  afterEach(() => {
    jest.restoreAllMocks()
  })

  it("throws when neither a local file nor a url is available", async () => {
    jest.spyOn(fs, "existsSync").mockReturnValue(false)

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
