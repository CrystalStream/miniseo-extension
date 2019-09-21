import React from 'react'

import SeoGrid from './ui/SeoGrid'
import SeoChart from './ui/SeoChart'
import utils from '../utils'

export default function SeoChecker(props) {
  const metrics = props.data

  let chartData = Object.keys(metrics)
  .map(k => {
    if (metrics[k].meta.length) {
      const meta = metrics[k].meta
      return meta.map(m => {
        return { name: Object.keys(m)[0], uv: Object.values(m)[0], fill: utils.getColorCode(k), title: k }
      })
    }
    return null
  })
  .filter(Boolean)
  .reduce((acc, cv) => acc.concat(cv), [])

  const points = Object.keys(metrics)
    .map(k => {
      const { passed, total } = metrics[k].points
      return [passed, total]
    })
    .reduce((acc, cv) => {
      const total = acc[0] + cv[0]
      const passed = acc[1] + cv[1]
      return [total, passed]
    }, [0, 0])

  return (
    <>

    {
      props.gridView ? (
        <SeoGrid metrics={metrics} />
      ) : (
        <SeoChart metrics={chartData} points={points}/>
      )
    }
    </>
  )
}
