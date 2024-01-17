import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    coverage: {
      all: true,
      include: ['src/**/*'],
      reporter: ['text', 'json', 'html', 'lcov', 'clover', 'json-summary', 'text-summary'],
    },
  },
})