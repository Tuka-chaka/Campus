import React, { useEffect, useState } from 'react'
import findDifference from '../utils/DifferenceFinder'

const SchoolsTable = ({data, text, type}) => {

  const [differences, setDifferences] = useState({})

  useEffect(() => {
    setDifferences(data.reduce((obj, school) => {
      return {
        ...obj,
        [school.name]: findDifference(school[type][0], school[type][1]),
      };
    }, {}))
  }, [data, type])

  console.log(differences)

  return (
    <div className='schools_table'>
      <div className='schools_table_header'>
        <span>ВУЗ</span>
        <span className='second_header'>{text}</span>
      </div>
      {Object.keys(differences).length ? data.map((school) => <div className='table_row' key={school.name}>
        <div className='coupler'>
          <div className='logo'/>
          <span>{school.name}</span>
        </div>
          <div className='coupler centered'>
        <span>{school.students[1]}</span>
          <span className={differences[school.name].isGreater ? 'difference' : 'difference negative'}>{`+${differences[school.name].difference}`}</span>
          </div>
        </div>) : <></>}
    </div>
  )
}

export default SchoolsTable
