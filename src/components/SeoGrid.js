import React from 'react'

import StatsCard from './StatsCard'
import utils from '../utils'

export default function SeoGrid(props) {
  const { metrics } = props

  return (
    <div className="scrollable">
      {
        Object.keys(metrics).map(key => (
          <StatsCard
            key={key}
            metric={metrics[key]}
            color={utils.getBackgroundColor(key)}/>
        ))
      }
    </div>
  )
}
