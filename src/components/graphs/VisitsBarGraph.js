import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'

const VisitsBarGraph = ({data}) => {
  const [chartData, setChartData] = useState({ labels: [], datasets: [] })

  useEffect(() => {
      setChartData({labels: data.map((data) => data.month).slice(-10), datasets: [{
        label: 'label',
        data: data.map((data) => data.amount).slice(-10),
        borderColor: '#F52D30',
        backgroundColor: '#F52D30',
      }]})
    }, [data])


  return (
      <div className='graph_container'>
      <Bar
          data={chartData}
          options={{
            barThickness: 16,
          plugins: {
              legend: {
              display: false
              }
          }
          }}
      />
      </div>
  )
}

export default VisitsBarGraph
