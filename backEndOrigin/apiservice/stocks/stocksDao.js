const pool = require('../../services/database');
const bcrypt = require('bcrypt');
const { json } = require('express');





const getStocks = async (id_user) => {
    // console.log(id_user)
    try {
        const response = await pool.query('SELECT *  FROM public.stocks WHERE id_user =' + id_user + ' ORDER BY id_action desc');
        user = response.rows
        return user
    } catch (error) {
        console.log(error)

    }
}






const saveStocks = async (resource) => {
    const { name_action, symbol, coin, id_user } = resource;
    try {
        const response = await pool.query('INSERT INTO  public.stocks (name_action, symbol, coin,id_user) VALUES ($1,$2,$3,$4)', [name_action, symbol, coin, id_user]);
        stocks = response
        return stocks
    } catch (error) {
        console.log(error)

    }
}




const deleteStocks = async (id_action) => {

    try {
        const response = await pool.query('DELETE FROM public.stocks WHERE id_action = $1', [
            id_action
        ]);
        stocks = response.rows
        return stocks
    } catch (error) {
        console.log(error)

    }
}

const updateStocks = async (everything) => {
    console.log("linea 56 update DAo", everything)

    try {

        const { name_action, symbol, coin, id_user, id_action } = everything;
        const response = await pool.query('UPDATE public.stocks SET name_action = $1, symbol = $2,coin=$3, id_user=$4  where id_action = $5', [
            name_action, symbol, coin, id_user, id_action
        ]);


        stocks = response.rows
        return stocks
    } catch (error) {
        console.log(error)

    }
}


module.exports = {
    // getBudgets,
    getStocks,
    saveStocks,
    deleteStocks,
    updateStocks,

}