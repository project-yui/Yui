/// <reference types="jest" />
import { mergeDeep } from "./deep-merge"

describe("mergeDeep", () => {
  it("merges nested objects while preserving sibling keys", () => {
    const target = {
      profile: {
        id: 1,
        name: "yui",
      },
    }

    const result = mergeDeep(target, {
      profile: {
        role: "admin",
      },
    })

    expect(result).toEqual({
      profile: {
        id: 1,
        name: "yui",
        role: "admin",
      },
    })
  })
})
