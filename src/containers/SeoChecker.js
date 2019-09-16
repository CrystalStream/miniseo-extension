import React, { useState } from 'react'

import SearchInput from '../components/SearchInput'
import Switcher from '../components/Switcher'
import DataViewer from '../components/DataViewer'

export default function SeoChecker(props) {

  const [gridView, toggleView] = useState(true)

  return (
    <div>
      <SearchInput />
      <Switcher onToggleView={toggleView} isGridView={gridView}/>
      <DataViewer gridView={gridView}/>
    </div>
  )
}
