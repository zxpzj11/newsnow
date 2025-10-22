export default defineEventHandler(async (event) => {
  const robotsTxt = `User-agent: *
Allow: /

# 禁止爬取API端点
Disallow: /api/
Disallow: /server/
Disallow: /_nuxt/
Disallow: /node_modules/

# 允许爬取静态资源
Allow: /icons/
Allow: /pwa-*.png
Allow: /apple-touch-icon.png
Allow: /icon.svg

# Sitemap位置
Sitemap: https://newsnow.superme.work/sitemap.xml
Sitemap: https://newsnow.superme.work/api/sitemap.xml

# 爬取延迟（毫秒）
Crawl-delay: 1`

  setHeader(event, "Content-Type", "text/plain")
  setHeader(event, "Cache-Control", "public, max-age=86400") // 缓存24小时

  return robotsTxt
})
