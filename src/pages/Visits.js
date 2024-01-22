import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Dropdown from '../components/ui/Dropdown'
import GraphInfo from '../components/GraphInfo'
import LineGraph from '../components/graphs/LineGraph'
import PagesBarChart from '../components/graphs/PagesBarChart'
import Navbar from '../components/Navbar'
import formatThousands from '../utils/ThousandsFormatter'
import findDifference from '../utils/DifferenceFinder'
import sortMonths from '../utils/MonthsSorter'

const Visits = ({data}) => {

  const [deviceType, setDeviceType] = useState('моб. прил.')
  const [pagesStatistics, setPagesStatistics] = useState([])
  const [regionsStatistics, setRegionsStatistics] = useState([])
  const [regionDifference, setRegionDifference] = useState({})
  const [graphData, setGraphData] = useState([])

  useEffect(() => {
    if (data) {
    setPagesStatistics(data.pages.sort((a, b) => b.time - a.time))
    setRegionsStatistics(data.regions.sort((a, b) => b.users[1] - a.users[1]))
    setGraphData(sortMonths(data.attendanceMobile))
    }
  }, [data])

  useEffect(() => {
    setRegionDifference(findDifference(regionsStatistics.reduce((result, item) => result + item.users[0], 0), regionsStatistics.reduce((result, item) => result + item.users[1], 0)))
  }, [regionsStatistics])

  useEffect(() => {
    if (data) {
    switch(deviceType) {
      case 'моб. прил.': setGraphData(sortMonths(data.attendanceMobile)) 
      break

      case 'веб': setGraphData(sortMonths(data.attendanceWeb)) 
      break

      default: setGraphData(sortMonths(data.attendanceMobile).map((mobileItem) => ({
        month: mobileItem.month,
        amount: mobileItem.amount + data.attendanceWeb.find((element) => element.month === mobileItem.month).amount
    })))
    }}
  }, [deviceType, data])

  return ( data && graphData.length?
    <>
    <div className='layout layout_centered'>
      <Header text = 'Посещаемость' subtext='Информация о посещаемости и активности пользователей' data={data}/>
      <div className='card'>
        <div className='dropdown_container'>
          <Dropdown options={['моб. прил.', 'веб', 'всего']} value={deviceType} action={setDeviceType} width={'141px'}/>
        </div>
        <h3>Посещения</h3>
        <GraphInfo suptext='всего' count={formatThousands(graphData.slice(-1)[0].amount)} sidetext='посетителей'/>
        <LineGraph data={graphData}/>
      </div>
      <div className='card'>
        <h3>Часто просматриваемые разделы</h3>
        <GraphInfo suptext='часто просматриваемый раздел' count={pagesStatistics[0].name}/>
        <PagesBarChart data={pagesStatistics} type='pages'/>
        <div className='bordered'/>
        <h3>Пользователи по регионам</h3>
        <GraphInfo suptext='всего' count={formatThousands(regionsStatistics.reduce((result, item) => result + item.users[1], 0))} sidetext={`${regionDifference.percentage}% с прошлого месяца`} isGreater={regionDifference.isGreater} showArrow/>
        <PagesBarChart data={regionsStatistics} type='regions'/>
      </div>
      <div className='spacer'/>
    </div>
    <Navbar page='visits'/>
    </>
  : <></>)
}

export default Visits
