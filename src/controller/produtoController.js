import { ConferirProduto} from '../repository/produtorepository.js';


import { Router } from 'express';

const server = Router();




server.get('/Produto/:id', async (req, resp) => {

    try {

        const Produto = req.params.id

        const ConferindoProduto = await ConferirProduto(Produto);

        resp.send(ConferindoProduto);

    } catch (err) {

        resp.status(404).send({

            erro: err.message

        })

    }

})

export default server;