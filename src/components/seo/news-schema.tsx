import { useEffect } from "react"

interface NewsItem {
  title: string
  description?: string
  url: string
  image?: string
  publishedTime?: string
  modifiedTime?: string
  author?: string
  source?: string
  category?: string
}

interface NewsSchemaProps {
  newsItems: NewsItem[]
  pageTitle: string
  pageDescription: string
  pageUrl: string
}

export function NewsSchema({ newsItems, pageTitle, pageDescription, pageUrl }: NewsSchemaProps) {
  useEffect(() => {
    // 生成新闻页面的结构化数据
    const schema = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": pageTitle,
      "description": pageDescription,
      "url": pageUrl,
      "mainEntity": {
        "@type": "ItemList",
        "name": "新闻列表",
        "itemListElement": newsItems.map((item, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "item": {
            "@type": "NewsArticle",
            "headline": item.title,
            "description": item.description || item.title,
            "url": item.url,
            "image": item.image ? [item.image] : undefined,
            "datePublished": item.publishedTime,
            "dateModified": item.modifiedTime || item.publishedTime,
            "author": item.author
              ? {
                  "@type": "Organization",
                  "name": item.author,
                }
              : undefined,
            "publisher": {
              "@type": "Organization",
              "name": item.source || "新闻聚合",
              "logo": {
                "@type": "ImageObject",
                "url": "https://newsnow.superme.work/icon.svg",
              },
            },
            "articleSection": item.category,
          },
        })),
      },
    }

    // 移除现有的新闻结构化数据
    const existingScript = document.querySelector("script[data-news-schema]")
    if (existingScript) {
      existingScript.remove()
    }

    // 添加新的结构化数据
    const script = document.createElement("script")
    script.type = "application/ld+json"
    script.setAttribute("data-news-schema", "true")
    script.textContent = JSON.stringify(schema)
    document.head.appendChild(script)

    return () => {
      // 清理函数
      const scriptToRemove = document.querySelector("script[data-news-schema]")
      if (scriptToRemove) {
        scriptToRemove.remove()
      }
    }
  }, [newsItems, pageTitle, pageDescription, pageUrl])

  return null
}
