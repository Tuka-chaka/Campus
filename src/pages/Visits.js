import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Dropdown from '../components/ui/Dropdown'
import GraphInfo from '../components/GraphInfo'
import LineGraph from '../components/graphs/LineGraph'
import PagesBarChart from '../components/graphs/PagesBarChart'
import Navbar from '../components/Navbar'
import formatThousands from '../utils/ThousandsFormatter'

const Visits = ({data}) => {

  const [pagesStatistics, setPagesStatistics] = useState(data.pages.sort((a, b) => b.time - a.time))
  const [regionsStatistics, setRegionsStatistics] = useState(data.regions.sort((a, b) => b.users - a.users))

  useEffect(() => {
    setPagesStatistics(data.pages.sort((a, b) => b.time - a.time))
  }, [data])

  useEffect(() => {
    setRegionsStatistics(data.regions.sort((a, b) => b.users - a.users))
  }, [data])

  const [graphData, setGraphData] = useState(data.attendanceMobile)

  const [deviceType, setDeviceType] = useState('моб. прил.')

  useEffect(() => {
    switch(deviceType) {
      case 'моб. прил.': setGraphData(data.attendanceMobile) 
      break

      case 'веб': setGraphData(data.attendanceWeb) 
      break

      default: setGraphData(data.attendanceMobile.map((mobileItem) => ({
        month: mobileItem.month,
        amount: mobileItem.amount + data.attendanceWeb.find((element) => element.month === mobileItem.month).amount
    })))
    }
    console.log(graphData)
  }, [deviceType])

  return (
    <>
    <div className='layout layout_centered'>
      <Header text = 'Посещаемость' subtext='Информация о посещаемости и активности пользователей'/>
      <div className='card'>
        <div className='dropdown_container'>
          <Dropdown options={['моб. прил.', 'веб', 'всего']} value={deviceType} action={setDeviceType} width={'141px'}/>
        </div>
        <h3>Посещения</h3>
        <GraphInfo suptext='в среднем' count={formatThousands(graphData.slice(-1)[0].amount)} sidetext='посетителей' subtext='01 - 31 апр. 2023г.'/>
        <LineGraph data={graphData}/>
      </div>
      <div className='card'>
        <h3>Часто просматриваемые разделы</h3>
        <GraphInfo suptext='часто просматриваемый раздел' count={pagesStatistics[0].name}/>
        <PagesBarChart data={pagesStatistics} type='pages'/>
        <div className='bordered'/>
        <h3>Пользователи по регионам</h3>
        <GraphInfo suptext='всего' count={formatThousands(regionsStatistics.reduce((result, item) => result + item.users, 0))} sidetext='12% с прошлого месяца' isGreater showArrow/>
        <PagesBarChart data={regionsStatistics} type='regions'/>
      </div>
      <div className='spacer'/>
    </div>
    <Navbar page='visits'/>
    </>
  )
}

export default Visits
