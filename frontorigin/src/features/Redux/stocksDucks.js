import axios from 'axios';

//constantes

const config = {
    key: "24cd58bee7e947968aa105119b8d87e5",
};



const dataInitial = {
    array: [],
    symbol: "",
    coin: "",
    name_stock: "",
    id_action: "",
    id_user: "",
    token: ""
}


//types

const FECHT_DATA_SYMBOL_USER = "FECHT_DATA_SYMBOL_USER";
const FECHT_DATA_SYMBOL_USER_ERROR = "FECHT_DATA_SYMBOL_USER_ERROR";

const FECHT_DATA_ALL_SYMBOL = "FECHT_DATA_ALL_SYMBOL";
const FECHT_DATA_ALL_SYMBOL_ERROR = "FECHT_DATA_ALL_SYMBOL_ERROR";



const USER_GET_SUCCESS = "USER_GET_SUCCESS";
const USER_GET_ERROR = "USER_GET_ERROR";
const BOUDGETS_CREATE_SUCCESS = "BOUDGETS_CREATE_SUCCESS";
const BOUDGETS_CREATE_ERROR = "BOUDGETS_CREATE_ERROR";
const BOUDGETS_UPDATE_SUCCESS = "BOUDGETS_UPDATE_SUCCESS";
const BOUDGETS_UPDATE_ERROR = "BOUDGETS_UPDATE_ERROR";
const BOUDGETS_DELETE_SUCCESS = "BOUDGETS_DELETE_SUCCESS";
const BOUDGETS_DELETE_ERRROR = "BOUDGETS_DELETE_ERROR";
const BOUDGETS_SHOW_SUCCESS = "BOUDGETS_SHOW_SUCCESS";
const BOUDGETS_SHOW_ERROR = "BOUDGETS_SHOW_ERROR";
const ORDER_BY_BOUDGETS_SHOW_SUCCESS = "ORDER_BY_BOUDGETS_SHOW_SUCCESS"


const ACTIONS_CREATE_SUCCESS = "ACTIONS_CREATE_SUCCESS";
const ACTIONS_CREATE_ERROR = "ACTIONS_CREATE_ERROR";

const ACTIONS_DELETE_SUCCESS = "ACTIONS_DELETE_SUCCESS";
const ACTIONS_DELETE_ERROR = "ACTIONS_DELETE_ERROR";


//Reducer
export default function stocksReducer(state = dataInitial, action) {
    switch (action.type) {


        case FECHT_DATA_SYMBOL_USER:
            return { ...state, array: action.payload };
        case FECHT_DATA_SYMBOL_USER:
            return { ...state }


        case USER_GET_SUCCESS:
            return { ...state, array: action.payload };
        case USER_GET_ERROR:
            return { ...state }
        case ORDER_BY_BOUDGETS_SHOW_SUCCESS:
            return { ...state, array: action.payload }

        case BOUDGETS_SHOW_SUCCESS:
            return { ...state, array: action.payload };
        case BOUDGETS_SHOW_ERROR:
            return { ...state }

        case BOUDGETS_UPDATE_SUCCESS:
            return { ...state, array: action.payload };
        case BOUDGETS_UPDATE_ERROR:
            return { ...state }

        case BOUDGETS_CREATE_SUCCESS:
            return { ...state, array: action.payload };
        case BOUDGETS_CREATE_ERROR:
            return { ...state }

        case ACTIONS_DELETE_SUCCESS:
            return { ...state, array: action.payload };
        case BOUDGETS_DELETE_ERRROR:
            return { ...state }



        default:
            return state;
    }
}

//Action

export const getUserActionn = (valor) => async (dispatch, getState) => {

    if (localStorage.getItem('userSession')) {
        const userSession = JSON.parse(localStorage.getItem('userSession'))
        // console.log("esto es lo que esta guardado en la sesión ",userSession,"linea 89")

        try {
            dispatch({
                type: USER_GET_SUCCESS,
                // payload: res.data[0]
                payload: userSession
            })
        } catch (error) {

        }
    }


}
export const showBoudgetsActionn = (valor) => async (dispatch, getState) => {

    if (localStorage.getItem('userSession')) {
        const userSession = JSON.parse(localStorage.getItem('userSession'))

        const id_user = userSession.id_user;
        const token = userSession.token;
        const fullname = userSession.fullname;
        const url = `http://localhost:3001/api/stocks/${id_user}`

        console.log(id_user, token)
        const dataStocks = await axios({
            url: `http://localhost:3001/api/stocks/${id_user}?token=${token}`,
            method: 'GET',
            contentType: 'application/json',

            success: function (response) {
                // console.log(response);

            }
        },
        );




        const dataFechtStocks = await axios({
            url: `https://api.twelvedata.com/stocks?source=docs&exchange=NYSE`,
            method: 'GET',
            contentType: 'application/json',

            success: function (response) {
                // console.log(response);

            }
        },
        );

        // const dataFechtStocksAll = dataFechtStocks.data.data.map(item=>({[...item],{'label':item.name}}))

        const all = dataFechtStocks.data.data
        const dataFechtStocksAll = all.map(element => element.name !== undefined ? { ...element, label: element.symbol } : element);

        console.log("esto viene de  la api externa", dataFechtStocks.data.data, "......149......")

        const con = dataStocks.data.data;
        // const dataFechtStocksAll = dataFechtStocks.data.data;
        const stocks = { con, dataFechtStocksAll, fullname }

        // const stocks = { con ,fullname }

        if (dataStocks.data !== undefined) {
            console.log("pasa")
            console.log(con)
        }





        // const rEgress = con.filter(item => item.type === "egress")
        // const rEntry = con.filter(item => item.type === "entry")
        // const rEg = rEgress.slice(0, 5)
        // const rEn = rEntry.slice(0, 5)
        // const dataBud = [...rEn, ...rEg]
        // console.log(dataBud)
        // const stocks = { con, dataBud }

        try {
            dispatch({
                type: FECHT_DATA_SYMBOL_USER,
                // payload: res.data[0]
                payload: stocks
            })
        } catch (error) {

        }
    } else {
        console.log("you arent login")
    }


}













export const orderByBoudgetsAction = (valor) => async (dispatch, getState) => {

    if (localStorage.getItem('userSession')) {
        const userSession = JSON.parse(localStorage.getItem('userSession')

        )

        const id_user = userSession.id_user;
        const token = userSession.token;
        const url = `http://localhost:3001/api/budgets/${id_user}`

        console.log(id_user, token)
        const dataBoudgets = await axios({
            url: `http://localhost:3001/api/budgets/${id_user}?token=${token}`,
            method: 'GET',
            contentType: 'application/json',

            success: function (response) {
                // console.log(response);

            }
        },
        );
        const dataBud = dataBoudgets.data;
        try {
            dispatch({
                type: BOUDGETS_CREATE_SUCCESS,
                // payload: res.data[0]
                payload: dataBud
            })
        } catch (error) {

        }
    } else {
        console.log("you arent login")
    }


}

export const saveActionn = (valor) => async (dispatch, getState) => {


    const name_action = valor.name_action;
    const symbol = valor.symbol;
    const coin = valor.coin;



    // console.log(new Date(valor.date).toUTCString(), "esto viene de valor")
    if (localStorage.getItem('userSession')) {
        const userSession = JSON.parse(localStorage.getItem('userSession')

        )

        const id_user = userSession.id_user;
        const token = userSession.token;
        // const url = `http://localhost:3001/api/budgets/${id_user}`

        console.log(id_user, token, "esto es de userSession")

        console.log(name_action, symbol, coin, id_user, "esto viene en 278")
        const dataSave = await axios({
            url: `http://localhost:3001/api/stocks/?token=${token}`,
            method: 'POST',
            contentType: 'application/json',
            // data: JSON.stringify({ ...user}),
            data: { name_action, symbol, coin, id_user, token },
            success: function (response) {
                console.log(response, "post en authducks");
                // localStorage.setItem('userSession', JSON.stringify(response))

            }
        });

        // console.log(dataSave)


        try {
            dispatch({
                type: ACTIONS_CREATE_SUCCESS,
                // payload: res.data[0]
                payload: dataSave.data
            })
        } catch (error) {

        }
    } else {
        console.log("you arent login")
    }


}

export const updateBoudgetsActionn = (valor) => async (dispatch, getState) => {
    console.log(valor)

    const amount = valor.amount;
    const concept = valor.concept;
    const dateElement = valor.date;
    const type = valor.type;
    const id_budget = valor.id_budget;
    console.log(id_budget, "valor valor")


    var event = new Date(dateElement);
    let date = JSON.stringify(event)
    date = date.slice(1, 11)
    console.log(date)



    if (localStorage.getItem('userSession')) {
        const userSession = JSON.parse(localStorage.getItem('userSession')

        )

        const id_user = userSession.id_user;
        const token = userSession.token;
        // const url = `http://localhost:3001/api/budgets/${id_user}`

        console.log(id_user, token)

        console.log(concept, amount, date, id_user, type)
        const dataBud = await axios({
            url: `http://localhost:3001/api/budgets/${id_budget}?token=${token}`,
            method: 'POST',
            contentType: 'application/json',
            // data: JSON.stringify({ ...user}),
            data: { amount, concept, date, id_user, type, token },
            success: function (response) {
                console.log(response, "post en authducks");
                // localStorage.setItem('userSession', JSON.stringify(response))

            }
        });

        console.log(dataBud)



        try {
            dispatch({
                type: BOUDGETS_UPDATE_SUCCESS,
                // payload: res.data[0]
                payload: dataBud.data
            })
        } catch (error) {

        }
    } else {
        console.log("you arent login")
    }




}

export const deleteActionn = (valor) => async (dispatch, getState) => {
    console.log(valor.id_action, "DELETE ")




    if (localStorage.getItem('userSession')) {
        const userSession = JSON.parse(localStorage.getItem('userSession')

        )

        const id_user = userSession.id_user;
        const token = userSession.token;
        // const url = `http://localhost:3001/api/budgets/${id_user}`

        console.log(id_user, token)

        const dataDelete = await axios({
            url: `http://localhost:3001/api/stocks/${valor.id_action}?token=${token}`,
            method: 'DELETE',
            contentType: 'application/json',
            // data: JSON.stringify({ ...user}),
            // data: { amount, concept, date, id_user, type, token },
            success: function (response) {
                console.log(response, "post en authducks");
                // localStorage.setItem('userSession', JSON.stringify(response))

            }
        });

        console.log(dataDelete)



        try {
            dispatch({
                type: ACTIONS_DELETE_SUCCESS,
                // payload: res.data[0]
                payload: dataDelete.data
            })
        } catch (error) {

        }
    } else {
        console.log("you arent login")
    }







    // const n = await axios({
    //     url: `http://localhost:3001/api/budgets/${data.id_budget}?token=${token}`,
    //     method: 'DELETE',
    //     contentType: 'application/json',
    //     // data: JSON.stringify({ ...user}),
    //     // data: { amount, concept, date, id_user, type },
    //     success: function (response) {
    //         console.log(response);
    //         // localStorage.setItem('userSession', JSON.stringify(response))

    //     }
    // });

}




