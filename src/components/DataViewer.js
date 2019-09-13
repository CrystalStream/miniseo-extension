import React from 'react'

import StatsCard from './StatsCard'

export default function SeoChecker(props) {

  return (
    <>
    <div className="columns">
      <StatsCard color="red" />
      <StatsCard color="orange" />
    </div>
    <div className="columns">
      <StatsCard color="yellow "/>
      <StatsCard color="blue" />
    </div>
    </>
  )
}
