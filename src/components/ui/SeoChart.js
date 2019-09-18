import React from 'react'
import { BarChart, Bar, Legend, Tooltip, CartesianGrid, XAxis, YAxis } from 'recharts';

export default function SeoChart(props) {

  // const chartData = [
  //   {
  //     name: 'SEO Headers', uv: 10, pv: 26.69, fill: '#6AB187',
  //   },
  //   {
  //     name: 'Images', uv: 15.69, pv: 1398, fill: '#20948B',
  //   },
  //   {
  //     name: 'Links', uv: 31.47, pv: 2400, fill: '#DE7A22',
  //   }
  // ]

  return (
    props.metrics ? (<div style={{ marginTop: '8rem' }}>
      <BarChart width={400} height={250}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip label="name" />
        <Legend />
        {
          Object.keys(props.metrics).map(k => (
            <Bar
              key={k}
              dataKey="uv"
              name={props.metrics[k].name}
              fill={props.metrics[k].fill}
              data={[props.metrics[k]]} />
          ))
        }
      </BarChart>
    </div>) : null
  )
}
