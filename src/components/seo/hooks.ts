import { columns } from "@shared/metadata"

// 为新闻分类页面生成SEO信息
export function useColumnSEO(columnId: string) {
  const column = columns[columnId as keyof typeof columns]

  if (!column) {
    return {
      title: "新闻聚合 - 实时热点新闻阅读平台",
      description: "汇聚国内外最新资讯，科技、财经、社会等全方位新闻内容，让您第一时间掌握全球动态",
      keywords: "新闻,热点,实时新闻,科技新闻,财经新闻,国际新闻,国内新闻,新闻聚合,资讯",
    }
  }

  const baseTitle = "新闻聚合"
  const columnName = column.name
  const title = `${columnName} - ${baseTitle} | 实时热点新闻阅读平台`

  const descriptions = {
    china: "国内最新新闻资讯，涵盖政治、经济、社会、文化等各个领域，第一时间了解国内重要事件和发展动态",
    world: "国际新闻资讯，全球热点事件追踪，了解世界政治、经济、科技、文化等各领域最新发展",
    tech: "科技新闻资讯，关注互联网、人工智能、新能源、生物技术等前沿科技领域的最新动态和趋势",
    finance: "财经新闻资讯，股票、基金、债券、外汇等金融市场动态，宏观经济政策解读，投资理财指导",
    focus: "关注新闻，精选重要资讯，深度分析热点事件，为您提供有价值的新闻内容",
    realtime: "实时新闻资讯，第一时间推送最新热点事件，让您随时掌握全球动态",
    hottest: "热点新闻资讯，当前最受关注的新闻事件，热门话题深度解析",
  }

  const keywords = {
    china: "国内新闻,中国新闻,政治新闻,社会新闻,经济新闻,文化新闻",
    world: "国际新闻,世界新闻,全球新闻,外交新闻,国际关系,世界动态",
    tech: "科技新闻,互联网新闻,AI新闻,人工智能,新能源,生物技术,科技创新",
    finance: "财经新闻,股票新闻,基金新闻,经济新闻,金融新闻,投资理财",
    focus: "关注新闻,重要新闻,深度新闻,热点分析,新闻解读",
    realtime: "实时新闻,即时新闻,最新新闻,突发新闻,新闻快讯",
    hottest: "热点新闻,热门新闻,热门话题,新闻热点,热门事件",
  }

  return {
    title,
    description: descriptions[columnId as keyof typeof descriptions] || "汇聚国内外最新资讯，科技、财经、社会等全方位新闻内容，让您第一时间掌握全球动态",
    keywords: keywords[columnId as keyof typeof keywords] || "新闻,热点,实时新闻,科技新闻,财经新闻,国际新闻,国内新闻,新闻聚合,资讯",
    url: `https://newsnow.superme.work/c/${columnId}`,
  }
}

// 为新闻列表生成结构化数据的Hook
export function useNewsSchema(newsItems: any[], pageTitle: string, pageDescription: string, pageUrl: string) {
  return {
    newsItems,
    pageTitle,
    pageDescription,
    pageUrl,
  }
}
