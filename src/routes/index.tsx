import { createFileRoute } from "@tanstack/react-router"
import { focusSourcesAtom } from "~/atoms"
import { Column } from "~/components/column"
import { SEOHead } from "~/components/seo"

export const Route = createFileRoute("/")({
  component: IndexComponent,
})

function IndexComponent() {
  const focusSources = useAtomValue(focusSourcesAtom)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const id = useMemo(() => focusSources.length ? "focus" : "hottest", [])

  return (
    <>
      <SEOHead
        title="新闻聚合 - 实时热点新闻阅读平台 | 汇聚全球资讯"
        description="汇聚国内外最新资讯，科技、财经、社会等全方位新闻内容，让您第一时间掌握全球动态"
        keywords="新闻,热点,实时新闻,科技新闻,财经新闻,国际新闻,国内新闻,新闻聚合,资讯"
        url="https://newsnow.superme.work"
      />
      <Column id={id} />
    </>
  )
}
