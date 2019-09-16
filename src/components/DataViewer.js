import React from 'react'

import SeoGrid from './ui/SeoGrid'
import SeoChart from './ui/SeoChart'

export default function SeoChecker(props) {

  return (
    <>

    {
      props.gridView ? <SeoGrid metrics={props.data} /> : <SeoChart />
    }
    </>
  )
}
