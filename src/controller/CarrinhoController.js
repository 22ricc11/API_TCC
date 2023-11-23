import { Router } from 'express';
import { Carrinho, ConsultarItem, DeletarCarrinho, InserirCarrinho } from '../repository/CarrinhoRepository.js';

const server = Router();

server.post('/Carrinho/Inserir', async (req, resp) => {

try{

const Carrinho = req.body


const InsertCarrinho = await InserirCarrinho( Carrinho );

resp.send('Adicionado ao carrinho com sucesso');

} catch(err) {

resp.status(404).send({  erro: err.message })

}

})

server.delete('/Carrinho/Deletar/:id', async (req, resp) => {

try{

const { id } = req.params

const resposta = await DeletarCarrinho(id);

if(resposta !=1)
    throw new Error('Não foi possivel excluir item')

resp.status(204).send();

} catch(err) {

resp.status(404).send({ erro: err.message })

}

})


server.get('/Carrinho', async (req, resp) =>{

try{

const Consultar = req.params

const ConsultarCarrinho = await Carrinho(Consultar);

resp.send(ConsultarCarrinho)

}

catch(err) {

resp.status(404).send({ erro: err.message })

}

})



server.get('/Carrinho/:id', async (req, resp) =>{

try{

const {Id} = req.params

const ConsultItem = await ConsultarItem(Id);

resp.send(ConsultItem);

}


catch(err) {

resp.status(404).send({ erro: err.message  })

}

})

export default server;