import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"

export const env = createEnv({
  emptyStringAsUndefined: true,
  client: {
    // validation schema
  },
  runtimeEnv: {
    // variables based on schema
  }
})
