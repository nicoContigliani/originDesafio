import React, { useEffect, useState, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getUserActionn, showBoudgetsActionn } from '../features/Redux/stocksDucks'



import Creatable from 'react-select/creatable';
import AsyncSelect from "react-select/async";
import Tables from './Tables';



import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";
import Grafic from './Grafic';


const aquaticCreatures = [
  { label: 'Shark', value: 'Shark' },
  { label: 'Dolphin', value: 'Dolphin' },
  { label: 'Whale', value: 'Whale' },
  { label: 'Octopus', value: 'Octopus' },
  { label: 'Crab', value: 'Crab' },
  { label: 'Lobster', value: 'Lobster' },
];










const Table = () => {
  const optionss = [
    { value: "apple", label: "Apple" },
    { value: "banana", label: "Banana" },
    { value: "orange", label: "Orange" },
    { value: "berry", label: "Berry" },
  ];
  const [log, setLog] = useState(false)
  const [fetchDataSelect, setFechDataSelect] = useState([])
  const [dataBudgest, setDataBudgest] = useState([
    {
      id_action: "",
      name_action: "",
      symbol: "",
      date: "",
      id_user: "",

    }
  ])

  const [selectAuto, setSelectAuto] = useState()
  useEffect(() => {
    theDispach()
  }, [])
  const theDispach = () => {
    dispatch(x)
    dispatch(c)

  }

  const dispatch = useDispatch()
  const options =
    //stocks.array.dataFechtStocksAll||
    optionss

  const loadOptions = (inputValue, /* callback */) =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          stocks.array.dataFechtStocksAll.filter((item) =>
            // item.label.toLowerCase().includes(inputValue.toLowerCase())
            // item.symbol===inputValue.toLowerCase()|| item.name===inputValue.toLowerCase()||item.currency===inputValue.toLowerCase()
            // console.log(inputValue.toLowerCase(),"toma por mirón")
            item.symbol.toLowerCase().includes(inputValue.toLowerCase())
          )
        );
      }, 1000);
    });

  const stocks = useSelector(store => store.stocks)
  console.log("esto esta en la tabla stock", stocks.array, "en la linea 44")
  console.log("esto viene stok dataFechtStocksAll", stocks.array.dataFechtStocksAll || "AUN NO LLEGA")





  const dataInitial = {
    array: [],
    id_action: "",
    name_action: "",
    symbol: "",
    coin: "",
    id_user: "",
    token: ""


  }

  const x = getUserActionn(
    dataInitial
  )
  const c = showBoudgetsActionn(
    dataInitial
  )





  const [name, setName] = useState("Your name here!")
  const [dessert, setDessert] = useState("chocolate cake")

  //   const handleChange = event => {
  //     // setName(event.target.value)
  //     console.log(event.target.value)

  //   }

  const handleChange = useCallback((inputValue) =>
    //    setValue(inputValue)
    console.log(inputValue)

    , []);


  const handleChangeSelect = event => {
    setDessert(event.target.value)
  }

  // console.log(hola.data.length,"esto es el array inifinto")



  if ((stocks.array.dataFechtStocksAll || "false") === "false") {
    console.log("no hagas nada ")

  } else {
    const allSelect = stocks.array.dataFechtStocksAll;
    console.log(allSelect, "si lo que viene en el select", [...optionss])
    //  const result = allSelect.filter(item=>item.symbol==='ACII'
    //  ||item.name==='Atlas Crest Investment Corp.'
    // //  ||item.currency==="USD"
    //  )
    //  console.log(result) 


    console.log("haces algo")
  }










  return (
    <div>


      <div className="container">


        <Router>
          <Route path="/" exact>
            <Tables con={stocks.array.con} />

          </Route>
          <Route path="/grafic" >
            <Grafic con={stocks.array.con} />

          </Route>
        </Router>



        <AsyncSelect cacheOptions loadOptions={loadOptions} onChange={handleChange} />
        {/* <Tables con={stocks.array.con} /> */}

      </div>
    </div>

  )
}

export default Table