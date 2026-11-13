import { defineConfig, globalIgnores } from 'eslint/config'
import neostandard from 'neostandard'

export default defineConfig([
  globalIgnores(['build']),
  ...neostandard({ ts: true })
])
