import React from 'react'

export default function Switcher(props) {

  return (
    <div className="buttons has-addons is-centered switcher">
      <span className={`button ${props.isGridView ? 'is-info' : ''}`} onClick={() => props.onToggleView(true)}>
        <span className="icon-grid"></span>
      </span>
      <span className={`button ${!props.isGridView ? 'is-info' : ''}`} onClick={() => props.onToggleView(false)}>
        <span className="icon-bar-chart"></span>
      </span>
    </div>
  )
}
