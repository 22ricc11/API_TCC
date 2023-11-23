import { Login, Cadastro, VerificarEmail } from '../repository/usuariorepository.js';
import { Router } from 'express';



const server = Router();



server.post('/Login', async (req, resp) => {
  
  try { 

    const { email, senha } = req.body;

    const resposta = await Login(email, senha);

  
  if (resposta.length==1) {

    throw new Error('Crendeciais Inválidas');

  }

    resp.send('Logado com sucesso')
  }
  
  catch (err) { 

    resp.status(401).send({ erro: err.message});
    
  }

})


server.post('/Cadastro', async (req, resp) => {

  try{
    const Cliente  = req.body;

    const VerifEmail = await VerificarEmail(Cliente.email);

    if(VerifEmail.length>0){

      throw new Error('Email ja esta cadastrado em outra conta');
    }

    const insertClient = await Cadastro(Cliente);

    resp.send('Usuário cadastrado com sucesso!');
  } catch(err){

    resp.status(404).send({

      erro:err.message
    });
  }
})

export default server;