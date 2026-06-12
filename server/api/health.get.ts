import { ok } from '../utils/api-response'

export default defineEventHandler(() => {
  return ok({
    status: 'ok',
    service: 'personal-ai-blog'
  })
})
