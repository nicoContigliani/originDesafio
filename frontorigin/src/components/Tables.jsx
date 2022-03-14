import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    Link
} from "react-router-dom";
import Grafic from './Grafic';





const Tables = (props) => {
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
                                    <td><Link to="/grafic"> {item.symbol}</Link></td>
                                    <td>{item.name_action}</td>
                                    <td>{item.coin}</td>
                                    <td><div className="btn btn-primary">

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