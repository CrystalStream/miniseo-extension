import React, { useCallback, useState } from 'react'
import utils from '../utils'

export default function SearchInput(props) {
  const { loading, onLoading, onSetData } = props
  const [ url, setUrl ] = useState('')
  const [ validUrl, setValidUrl ] = useState(true)

  const scrapSite = useCallback(async () => {
    // don't send again while we are sending
    if (loading) return

    // update state
    onLoading(true)
    setValidUrl(true)

    // send the actual request
    let res = await utils.scrapSite(url)

    onLoading(false)

    if (res.status === 401) {
      setValidUrl(false)
      onSetData({})
    } else {
      onSetData(res.data.metrics)
    }
    // once the request is sent, update state again
    // setLoading(false)

  }, [url])

  return (
    <form onSubmit={e => { e.preventDefault(); scrapSite() } } noValidate>
      <div className="field">
        {!validUrl && <p className="help is-danger">Enter a valid url</p>}
        <div className={`control has-icons-right ${loading && 'is-loading'}`}>
          <input
            className={`input ${!validUrl && "is-danger"}`}
            type="text"
            placeholder="Enter the url and hit 'Enter'"
            value={url}
            disabled={loading}
            onChange={e => setUrl(e.target.value)}
            autoFocus
            />
          {!validUrl && (<span className="icon is-small is-right">
            <span className="icon-alert-triangle"></span>
          </span>)}
        </div>
      </div>
    </form>
  )
}
