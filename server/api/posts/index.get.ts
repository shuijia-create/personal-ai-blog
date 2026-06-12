import { getPosts } from '../../services/content-service'
import { ok } from '../../utils/api-response'

export default defineEventHandler(() => {
  return ok(getPosts())
})
