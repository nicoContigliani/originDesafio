import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getUserActionn, showBoudgetsActionn, saveActionn, deleteActionn } from '../features/Redux/stocksDucks'


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    Link
} from "react-router-dom";
import Grafic from './Grafic';




const Tables = (props) => {
    const [ids, setIds] = useState(9999)

    const dispatch = useDispatch()
    const stocks = useSelector(store => store.stocks)



    const dataInitials = {
        array: [],
        id_action: ids,
        name_action: "",
        symbol: " dataForSave.symbol",
        coin: "",
        id_user: "",
        token: ""


    }

    const f = deleteActionn(
        dataInitials
    )



    const deletes = (id) => {
        const dataInitials = {
            array: [],
            id_action: id,
            name_action: "",
            symbol: " dataForSave.symbol",
            coin: "",
            id_user: "",
            token: ""
    
    
        }
        setIds(id)
        dispatch(deleteActionn(dataInitials)

        )
        window.location.reload();

    }






    console.log("esto esta en tables y traa es post", props.con)
    return (
        <div>

            <table class="table table-sm">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Symbol</th>
                        <th scope="col">Name</th>
                        <th scope="col">Coint</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.con?.map(item =>
                            <tr key={item.id_action}>
                                <th scope="row">{item.id_action}</th>
                                <td><Link to={`/grafic/${item.id_action}`}> {item.symbol}</Link></td>
                                <td>{item.name_action}</td>
                                <td>{item.coin}</td>
                                <td><div className="btn btn-primary" onClick={() => { deletes(item.id_action) }}>
                                    Eliminar
                                </div></td>
                            </tr>
                        )
                    }




                </tbody>
            </table>








        </div>
    )
}

export default Tables