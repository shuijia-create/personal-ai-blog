import { createError } from 'h3'
import { getPost } from '../../services/content-service'
import { ok } from '../../utils/api-response'

export default defineEventHandler((event) => {
  const slug = getRouterParam(event, 'slug')

  if (!slug) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Missing post slug'
    })
  }

  const post = getPost(slug)

  if (!post) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Post not found'
    })
  }

  return ok(post)
})
