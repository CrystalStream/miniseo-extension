import React from 'react'

import SeoGrid from './ui/SeoGrid'
import SeoChart from './ui/SeoChart'
import utils from '../utils'

export default function SeoChecker(props) {
  const metrics = props.data

  let chartData = Object.keys(metrics).map(k => {
    if (metrics[k].meta.length) {
      const meta = metrics[k].meta
      return meta.map(m => {
        return { name: Object.keys(m)[0], uv: Object.values(m)[0], fill: utils.getColorCode(k) }
      })
    }
    return null
  }).filter(Boolean)

  chartData = chartData.reduce((acc, cv) => {
    acc.push(...cv)
    return acc
  }, [])

  return (
    <>

    {
      props.gridView ? <SeoGrid metrics={metrics} /> : <SeoChart metrics={chartData}/>
    }
    </>
  )
}
