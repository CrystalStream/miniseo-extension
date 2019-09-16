import React from 'react'

import StatsCard from './StatsCard'
import SeoChart from './SeoChart'

export default function SeoChecker(props) {

  return (
    <>

    {
      props.gridView ? (<div className="scrollable">
        <StatsCard color="green" />
        <StatsCard color="orange" />
        <StatsCard color="yellow "/>
        <StatsCard color="blue" />
      </div>) : <SeoChart />
    }
    </>
  )
}
