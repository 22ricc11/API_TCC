import { AdicionarCartao, InserirEndereço, VerificarEndereco } from "../repository/CompraRepository.js";

import { Router } from 'express';

const server = Router();

server.post('/InserirEndereco', async (req, resp) => {

    try {

        const Endereço = req.body
        const Verificar = await VerificarEndereco(Endereço.cep);

        if(Verificar.length>0){
    
          throw new Error('Endereço ja esta cadastrado em outra conta');
        }
    
        const InsertEndereco = await InserirEndereço(Endereço);

        resp.send('Cadastrado com sucesso  ')

    } catch (err) {

        resp.status(404).send({

            erro: err.message

        })

    }

})



server.post('/AddCartao', async (req, resp) => {

try{

const Cartao = req.body

if (!Cartao.nome)
throw new Error('Informações não cadastradas, Nome Inserido Incorretamente.')

if (!Cartao.endereco)
throw new Error('Informações não cadastradas, Endereço Inserido Incorretamente.')

if (!Cartao.numero)
throw new Error('Informações não cadastradas, Numero Inserido Incorretamente.')

if (!Cartao.vencimento)
throw new Error('Informações não cadastradas, Vencimento Inserido Incorretamente.')

if (!Cartao.cvv)
throw new Error('Informações não cadastradas, CVV Inserido Incorretamente.')

if (Cartao.situacao != true, false)
throw new Error('Informações não cadastradas, situação Inserido Incorretamente.')


const InsertCartao = await AdicionarCartao(Cartao);

resp.send('Cartão Inserido com Sucesso.')

} catch(err) {

resp.status(404).send({

    erro: err.message

})

}

})

export default server;
