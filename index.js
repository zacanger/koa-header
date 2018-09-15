module.exports = (headerName, options) =>
  async (ctx, next) => {
    ctx.set(headerName, options)
    await next()
  }
