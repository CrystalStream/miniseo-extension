import React from 'react'

export default function SearchInput(props) {

  return (
    <div className="field">
      <p className="help is-danger">Enter a valid url</p>
      <div className="control has-icons-right">
        <input className="input is-danger" type="text" placeholder="Site url..." />
        <span className="icon is-small is-right">
          <span className="icon-alert-triangle"></span>
        </span>
      </div>
    </div>
  )
}
