import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import SchoolsTable from '../components/SchoolsTable'
import Button from '../components/ui/Button'
import { useNavigate } from "react-router-dom";
import ProgramsPreview from '../components/ProgramsPreview'
import LineGraph from '../components/graphs/LineGraph'
import Navbar from '../components/Navbar';
import formatThousands from '../utils/ThousandsFormatter';
import BarGraph from '../components/graphs/BarGraph';


const Dashboard = ({data}) => {

  const navigate = useNavigate();

  function handleClick(page) {
    navigate(page);
  }

  const [tableData, setTableData] = useState([])

  useEffect(() => {
    setTableData(data.schools.sort((a,b) => b.students[1] - a.students[1]).slice(0,5))
  }, [data])

  return (
    <div className='layout'>
      <Header text = 'Главная' data={data}/>
      <div className='card'>
        <h3>Участников “ИС Кампус”</h3>
        <div className='card_info bordered'>
          <h1>{`${formatThousands(data.participants.slice(-1)[0].amount)} студентов`}</h1>
        </div>
        <LineGraph data={data.participants}/>
      </div>
      <div className='card'>
        <h3>ВУЗы</h3>
        <div className='card_info bordered'>
          <span>Перечень ВУЗов, участвующих в проекте “Кампус”</span>
        </div>
        <SchoolsTable text='Кол-во студентов' data={tableData} type={'students'}/>
        <Button text='Перейти в раздел' action={() => handleClick('/schools')}/>
      </div>
      <div className='card'>
        <h3>Посещаемость</h3>
        <div className='card_info bordered'>
          <span>Кол-во уникальных посещений приложения и сайта</span>
        </div>
        <span>Всего посетителей <span className='highlighted'>{formatThousands(data.participants.slice(-1)[0].amount + data.part2.slice(-1)[0].amount)}</span></span>
        <BarGraph data={data.participants} secondDataset={data.part2}/>
        <Button text='Перейти в раздел' action={() => handleClick('/visits')}/>
      </div>
      <div className='card'>
        <h3>Программы фонда</h3>
        <ProgramsPreview data={data}/>
        <Button text='Перейти в раздел' action={() => handleClick('/programs')}/>
      </div>
      <Navbar page='dashboard'/>
      <div className='spacer'/>
    </div>
  )
}

export default Dashboard
