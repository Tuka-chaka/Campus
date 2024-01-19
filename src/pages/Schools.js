import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Switch from '../components/ui/Switch'
import GraphInfo from '../components/GraphInfo'
import SchoolsTable from '../components/SchoolsTable'
import BarGraph from '../components/graphs/BarGraph'
import Navbar from '../components/Navbar'
import findDifference from '../utils/DifferenceFinder'
import formatThousands from '../utils/ThousandsFormatter'

const Schools = ({data}) => {

  const [applicantStats, setApplicantStats] = useState({})
  const [excellenceStats, setexcellenceStats] = useState({})

  useEffect(() => {
    setApplicantStats(findDifference(data.part2.slice(-2)[0].amount, data.part2.slice(-2)[1].amount))
    setexcellenceStats(findDifference(data.participants.slice(-2)[0].amount, data.participants.slice(-2)[1].amount))
  }, [data])

  useEffect(()=>{console.log(applicantStats)}, [applicantStats])
  useEffect(()=>{console.log(excellenceStats)}, [excellenceStats])

  const [showApplications, setShowApplications] = useState(false)

  return (
    <>
    <div className='layout'>
      <Header text = 'ВУЗы' subtext='Перечень ВУЗов, участвующих в проекте “Кампус”'/>
      <div className='card'>
        <Switch action={() => setShowApplications(!showApplications)} showApplications={showApplications}/>
        {showApplications ? 
        <>
        <h3>Кол-во поданных заявлений на участие в программе “Кампус”</h3>
        <GraphInfo suptext='в среднем' count={formatThousands(data.part2.slice(-1)[0].amount)} sidetext={`${applicantStats.percentage}% с прошлого месяца`} isGreater={applicantStats.isGreater} showArrow/>
        <BarGraph data={data.part2}/>
        <SchoolsTable data={data.schools.sort((a,b) => b.students[1] - a.students[1])} text='Поданные заявления' type='applicants'/>
        </>
        :
        <><h3>Кол-во отличников программы “Кампус”</h3>
        <GraphInfo suptext='в среднем' count={formatThousands(data.participants.slice(-1)[0].amount)} sidetext={`${excellenceStats.percentage}% с прошлого месяца`} isGreater={excellenceStats.isGreater} showArrow/>
        <BarGraph data={data.participants}/>
        <SchoolsTable data={data.schools.sort((a,b) => b.students[1] - a.students[1])} text='Отличники программы' type='students'/>
        </>}
      </div>
      <div className='card'>
        <h3>Статистика по специальностям</h3>
        <SchoolsTable data={data.majors.sort((a,b) => b.students[1] - a.students[1])} text='Кол-во участников' type='students' title='Специальность'/>
      </div>
      <div className='spacer'/>
    </div>
    <Navbar page='schools'/>
    </>
  )
}

export default Schools
