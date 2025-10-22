import { columns } from "@shared/metadata"

export default defineEventHandler(async (event) => {
  const baseUrl = "https://newsnow.superme.work"
  const currentDate = new Date().toISOString()

  // 生成sitemap XML
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
  
  <!-- 首页 -->
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>hourly</changefreq>
    <priority>1.0</priority>
  </url>`

  // 添加所有新闻分类页面
  Object.entries(columns).forEach(([id, _column]) => {
    sitemap += `
  
  <url>
    <loc>${baseUrl}/c/${id}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>hourly</changefreq>
    <priority>0.9</priority>
  </url>`
  })

  sitemap += `
  
</urlset>`

  setHeader(event, "Content-Type", "application/xml")
  setHeader(event, "Cache-Control", "public, max-age=3600") // 缓存1小时

  return sitemap
})
