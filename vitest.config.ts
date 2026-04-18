import { defineConfig } from "vitest/config"

export default defineConfig({
  test: {
    environment: "node",
    exclude: [
      "dist/**",
      "node_modules/**",
      "program/**",
      "tmp/**",
    ],
    include: ["src/**/*.test.ts"],
  },
})
