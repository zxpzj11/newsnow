import { createFileRoute, redirect } from "@tanstack/react-router"
import { Column } from "~/components/column"
import { SEOHead, useColumnSEO } from "~/components/seo/head"

export const Route = createFileRoute("/c/$column")({
  component: SectionComponent,
  params: {
    parse: (params) => {
      const column = fixedColumnIds.find(x => x === params.column.toLowerCase())
      if (!column) throw new Error(`"${params.column}" is not a valid column.`)
      return {
        column,
      }
    },
    stringify: params => params,
  },
  onError: (error) => {
    if (error?.routerCode === "PARSE_PARAMS") {
      throw redirect({ to: "/" })
    }
  },
})

function SectionComponent() {
  const { column } = Route.useParams()
  const seoData = useColumnSEO(column)

  return (
    <>
      <SEOHead {...seoData} />
      <Column id={column} />
    </>
  )
}
