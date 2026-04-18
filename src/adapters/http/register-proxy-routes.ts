import { Router } from "express"
import { createProxyMiddleware } from "http-proxy-middleware"

export const registerProxyRoutes = (router: Router) => {
  router.get('/download', createProxyMiddleware({
    target: 'https://gchat.qpic.cn',
    changeOrigin: true,
  }))
  router.get('/gchatpic_new/*', createProxyMiddleware({
    target: 'https://gchat.qpic.cn',
    changeOrigin: true,
  }))
}
