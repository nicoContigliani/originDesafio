const stocksDao = require('./stocksDao');
const bcrypt = require('bcrypt')



const getStocks = async (id_user) => {
  const stocks = await stocksDao.getStocks(id_user)
  return stocks
}

const saveStocks = async (resource) => {
  const stocks = await stocksDao.saveStocks(resource)
  return stocks
}
const deleteStocks = async(id_action)=>{
  console.log(id_action,"modelStock delete  - linea 16 -")
  const stocks = await stocksDao.deleteStocks(id_action)
  return stocks
}
const updateStocks = async(everything)=>{
  console.log("linea 21 update Model ", everything)

  const stocks = await stocksDao.updateStocks(everything)
  return stocks
}



module.exports = {
  getStocks,
  saveStocks,
  deleteStocks,
  updateStocks
}