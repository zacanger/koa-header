const defaultNext = () => Promise.resolve()

module.exports = (headerName, options) =>
  async (ctx, next = defaultNext) => {
    ctx.set(headerName, options)
    await next()
  }
