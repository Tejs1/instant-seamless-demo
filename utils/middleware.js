export const middleware = (f) => async (ctx) => {
  const { req } = ctx
  const { host } = req.headers
  // Assume localhost is on HTTP, otherwise HTTPS
  const protocol = host.indexOf('localhost') == 0 ? 'http:' : 'https:'
  req.hostWithProtocol = `${protocol}//${host}`
  return await f(ctx)
}
