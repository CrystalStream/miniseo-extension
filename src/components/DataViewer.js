import React from 'react'

import StatsCard from './StatsCard'

export default function SeoChecker(props) {

  return (
    <>
    <div className="scrollable">
      <StatsCard color="green" />
      <StatsCard color="orange" />
      <StatsCard color="yellow "/>
      <StatsCard color="blue" />
    </div>
    </>
  )
}
