import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from './Navbar';
import axios from 'axios';
import { Checkbox, Row, Col } from 'antd';
import Select from 'react-select'
import GrafictHooks from './grafics/GrafictHooks';
import moment from 'moment';



const options = [
  { interval: '1min', label: '1 Minuto' },
  { interval: '5min', label: '5 Minuto' },
  { interval: '15min', label: '15 Minuto' }
]


const Grafic = (props) => {
  const { id } = useParams();
  const [data, setData] = useState([])
  const [dataForSend, setDataforSend] = useState({})
  const [selectedOption, setSelectedOption] = useState(0);
  const [history, setHistory] = useState(true)



  useEffect(() => {
    const result = props.con.filter(item => (item.id_action == parseInt(id)))
    setData(result[0])

  }, [id])

  console.log(data)


  function onChange(checkedValues) {
    console.log('checked = ', checkedValues[0]);
    setHistory(false)

  }
  function onChange2(checkedValues) {
    setHistory(true)
    console.log('checked = ', checkedValues[0]);
  }

  const resultData = (e) => {
    setDataforSend({
      ...dataForSend,
      [e.target.name]: e.target.value
    })
  }

  console.log(dataForSend, "dataforsend esto es para enviar" || "si")
  console.log(selectedOption, history)


  if (history === true) {


    if (dataForSend !== null) {
      const apikey = "24cd58bee7e947968aa105119b8d87e5"
      const link = `https://api.twelvedata.com/time_series`
      const symbol = data.symbol
      const interval = selectedOption.interval
      const end_date = dataForSend?.end_date
      const horafinal = dataForSend?.horafinal
      const start_date = dataForSend?.start_date
      const horainicial = dataForSend?.horainicial

      const rutafinal = `${link}?symbol=${symbol}&interval=${interval}&start_date=${start_date}%${horainicial}&end_date=${end_date}%${horafinal}&apikey=${apikey}`
      console.log(rutafinal,"esto esta en rutafinal")
      console.log(horainicial,"esta es la hora inicial",typeof(horainicial))
      const tiempo = moment().format('mm:hh')
      console.log(tiempo)


    } else {
      console.log("campos incompletos")

    }




  } else {

    if (dataForSend !== null) {
      const apikey = "24cd58bee7e947968aa105119b8d87e5"
      const link = `https://api.twelvedata.com/time_series`
      const symbol = data.symbol
      const interval = selectedOption.interval
      const end_date = dataForSend?.end_date
      const horafinal = dataForSend?.horafinal
      const start_date = dataForSend?.start_date
      const horainicial = dataForSend?.horainicial

      const rutafinal = `${link}?symbol=${symbol}&interval=${interval}&apikey=${apikey}`
      console.log(rutafinal,"esto esta en rutafinal tiempo real")

    } else {
      console.log("campos incompletos")

    }





  }





  const estructure = () => {
    //https://api.twelvedata.com/time_series?symbol=TSLA&interval=5min&start_date=2021-04-16%2009:48:00&end_date=2021-04-16%2019:48:00&apikey=24cd58bee7e947968aa105119b8d87e5





  }








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
            <Checkbox value="historico"> Historico </Checkbox>
          </Col>
        </Row>
      </Checkbox.Group>
      <input type="date" name="start_date" id="dateprimary" onChange={resultData} />
      <input type="time" name="horainicial" id="timeprimary" onChange={resultData} />
      <input type="date" name="end_date" id="datesecondary" onChange={resultData} />
      <input type="time" name="horafinal" id="timesecondary" onChange={resultData} />
      Intervalo
      <Select options={options} defaultVAlue={"1 minuto"}
        onChange={setSelectedOption}

      />

      <GrafictHooks />

    </div>
  )
}

export default Grafic