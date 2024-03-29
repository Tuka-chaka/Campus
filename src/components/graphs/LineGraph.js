import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'
import sortMonths from '../../utils/MonthsSorter'

const LineGraph = ({data}) => {

    const [chartData, setChartData] = useState({ labels: [], datasets: [] })

    useEffect(() => {
        setChartData({labels: sortMonths(data).map((data) => data.month).slice(-6), datasets: [{
          label: 'Количество',
          data: sortMonths(data).map((data) => data.amount).slice(-6),
          borderColor: '#F52D30',
          backgroundColor: '#F52D30',
        }]})
      }, [data])


    return (
        <div className='graph_container'>
        <Line
            data={chartData}
            options={{
            scales: {
                y: {
                    min: 0,
                    grace: '20%',
                }
            },
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

export default LineGraph
