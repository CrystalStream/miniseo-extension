import React from 'react'

import SeoGrid from './SeoGrid'
import SeoChart from './SeoChart'

export default function SeoChecker(props) {

  return (
    <>

    {
      props.gridView ? <SeoGrid metrics={props.data} /> : <SeoChart />
    }
    </>
  )
}
