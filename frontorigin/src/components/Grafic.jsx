import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from './Navbar';
import axios from 'axios';
import { Checkbox, Row, Col } from 'antd';
import Select from 'react-select'
const options = [
  { value: 1, label: '1 Minuto' },
  { value: 5, label: '5 Minuto' },
  { value: 15, label: '15 Minuto' }
]


const Grafic = (props) => {
  const { id } = useParams();
  const [data, setData] = useState([])
  const [dataForSend, setDataforSend] = useState({})


  useEffect(() => {
    const result = props.con.filter(item => (item.id_action == parseInt(id)))
    setData(result[0])

  }, [id])

  console.log(data)


  function onChange(checkedValues) {
    console.log('checked = ', checkedValues);
  }
  function onChange2(checkedValues) {
    console.log('checked = ', checkedValues);
  }

  const resultData = (e) => {
    setDataforSend({
      ...dataForSend,
      [e.target.name]: e.target.value
    })
  }

 console.log(dataForSend||"si")



  return (



    <div>
      <div className="row">
        <div className="col-2">
          <h5>mis acciones</h5>

        </div>
        <div className="col-8">

        </div>
        <div className="col-2">
          <h5>


          </h5>
        </div>
      </div>

      <hr />
      <hr />
      Grafic

      <Checkbox.Group style={{ width: '100%' }} onChange={onChange}>

        <Row>
          <Col span={8}>
            <Checkbox value="A"  > Tiempo Reaal</Checkbox>
          </Col>

        </Row>

      </Checkbox.Group>

      <Checkbox.Group style={{ width: '100%' }} onChange={onChange2}>

        <Row>
          <Col span={8}>
            <Checkbox value="B"> Historico </Checkbox>
          </Col>
        </Row>
      </Checkbox.Group>
      <input type="date" name="start_date" id="dateprimary" onChange={resultData} />
      <input type="time" name="horainicial" id="timeprimary" onChange={resultData} />
      <input type="date" name="end_date" id="datesecondary" onChange={resultData} />
      <input type="time" name="horafinal" id="timesecondary" onChange={resultData} />
      Intervalo
      <Select options={options} defaultVAlue={"1 minuto"} />


    </div>
  )
}

export default Grafic