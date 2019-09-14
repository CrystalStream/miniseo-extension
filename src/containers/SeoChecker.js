import React from 'react'

import SearchInput from '../components/SearchInput'
import Switcher from '../components/Switcher'
import DataViewer from '../components/DataViewer'

export default function SeoChecker(props) {

  return (
    <div>
      <SearchInput />
      <Switcher />
      <DataViewer />
    </div>
  )
}
