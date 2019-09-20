import React, { useState } from 'react'

import SearchInput from '../components/SearchInput'
import Switcher from '../components/Switcher'
import DataViewer from '../components/DataViewer'

export default function SeoChecker(props) {

  const [ gridView, toggleView ] = useState(true)
  const [ seoData, setSeoData ] = useState({})
  const [ loading, setLoading ] = useState(false)

  return (
    <div>
      <SearchInput
        loading={loading}
        onLoading={setLoading}
        onSetData={setSeoData}
      />
      {
        Object.keys(seoData).length > 0 && (
          <>
            <Switcher
              onToggleView={toggleView}
              isGridView={gridView}
            />
            <DataViewer
              data={seoData || {}}
              gridView={gridView}
            />
          </>
        )
      }
    </div>
  )
}
