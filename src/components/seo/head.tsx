import { useEffect } from "react"

interface SEOHeadProps {
  title?: string
  description?: string
  keywords?: string
  image?: string
  url?: string
  type?: "website" | "article"
}

export function SEOHead({
  title,
  description,
  keywords,
  image = "/pwa-512x512.png",
  url,
  type = "website",
}: SEOHeadProps) {
  useEffect(() => {
    // 更新页面标题
    if (title) {
      document.title = title
    }

    // 更新meta标签
    const updateMetaTag = (name: string, content: string, property?: boolean) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`
      let meta = document.querySelector(selector) as HTMLMetaElement

      if (!meta) {
        meta = document.createElement("meta")
        if (property) {
          meta.setAttribute("property", name)
        } else {
          meta.setAttribute("name", name)
        }
        document.head.appendChild(meta)
      }
      meta.setAttribute("content", content)
    }

    // 更新基础meta标签
    if (description) {
      updateMetaTag("description", description)
    }
    if (keywords) {
      updateMetaTag("keywords", keywords)
    }

    // 更新Open Graph标签
    if (title) {
      updateMetaTag("og:title", title, true)
    }
    if (description) {
      updateMetaTag("og:description", description, true)
    }
    updateMetaTag("og:image", image, true)
    updateMetaTag("og:type", type, true)
    if (url) {
      updateMetaTag("og:url", url, true)
    }

    // 更新Twitter标签
    if (title) {
      updateMetaTag("twitter:title", title)
    }
    if (description) {
      updateMetaTag("twitter:description", description)
    }
    updateMetaTag("twitter:image", image)
  }, [title, description, keywords, image, url, type])

  return null
}
