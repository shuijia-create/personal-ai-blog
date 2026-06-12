import type { ApiFail, ApiOk } from '../../types/content'

export function ok<T>(data: T): ApiOk<T> {
  return { ok: true, data }
}

export function fail(code: string, message: string): ApiFail {
  return {
    ok: false,
    error: { code, message }
  }
}
