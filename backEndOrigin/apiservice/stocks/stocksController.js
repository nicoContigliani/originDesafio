const stocksModel = require('./stocksModel')
const stocksDto = require('./stocksDto')





const get = async (req, res) => {
    try {
        const id_user = parseInt(req.params.id);
        const stocks = await stocksModel.getStocks(id_user);
        const stocksRow = await stocksDto.singles(stocks)
        res.status(200).json(
            {
                data: stocksRow,
                status: 200
            }
        );
    } catch (error) {
        res.status(400).json(
            {
                data: 0,
                status: 400

            }
        );
    }

}

const save = async (req, res) => {
    try {
        const stocksSave = await stocksModel.saveStocks(req.body);
        const id_user = parseInt(req.body.id_user)
        const stocks = await stocksModel.getStocks(id_user);
        const stocksRow = await stocksDto.singles(stocks)
        res.status(200).json(
            {
                data: stocksRow,
                status: 200
            }
        );

    } catch (error) {
        res.status(400).json(
            {
                data: 0,
                status: 400
            }
        );
    }


}

const deletes = async (req, res) => {

    try {
        const id_action = parseInt(req.params.id);
        const id_user = req.body.id_user
        const stockss = await stocksModel.deleteStocks(id_action);
        const stocks = await stocksModel.getStocks(id_user);
        const stocksRow = await stocksDto.singles(stocks)
        res.status(200).json(
            {
                data: stocksRow,
                status: 200
            }
        );
    } catch (error) {
        res.status(400).json(
            {
                data: 0,
                status: 400

            }
        );
    }


}
const update = async (req, res) => {
    try {
        const id_action = parseInt(req.params.id);
        const id_user = parseInt(req.body.id_user);
        const element = req.body;
        const everything = { ...element, id_action }
        console.log("linea 88 update ", everything)

        const stockss = await stocksModel.updateStocks(everything);

        const stocks = await stocksModel.getStocks(id_user);
        const stocksRow = await stocksDto.singles(stocks)
        res.status(200).json(
            {
                data: stocksRow,
                status: 200
            }
        );
    } catch (error) {
        res.status(400).json(
            {
                data: 0,
                status: 400

            }
        );
    }

}


module.exports = {
    get,
    save,
    deletes,
    update
}