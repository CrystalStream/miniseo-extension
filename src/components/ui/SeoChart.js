import React from 'react'
import { BarChart, Bar, Tooltip, CartesianGrid, XAxis, YAxis } from 'recharts';

export default function SeoChart(props) {

  return (
    props.metrics ? (<div style={{ marginTop: '8rem' }}>
      <BarChart width={400} height={250} data={props.metrics}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip label="name" />
        <Bar dataKey="uv" />
      </BarChart>
    </div>) : null
  )
}
