import { LoginADM, InserirProduto, InserirImagem, Pedidos, StatusPedidos, Produtos_Status_Pedidos, VisualizarProduto } from '../../repository/ADM/AdminRepository.js';
import { Router } from 'express';
import multer from 'multer';


const server = Router();
const SalvarImagem = multer({ dest: 'storage/Capa' })


server.post('/Administrador', async (req, resp) => {

try{

const {email, senha} = req.body

const resposta = LoginADM(email, senha)

if (resposta.length==1) {

    throw new Error('Crendeciais Inválidas');

  }

    resp.send('Logado com sucesso')
  }

catch(err) {

resp.status(404).send({ erro: err.message  })

}

})


server.post('/Administrador/Home/Inserir/Produto/:id', async (req, resp) => {
  try {
      const Produto = req.body;

      if (!Produto.nome)
          throw new Error('Informações não cadastradas, Nome Inserido Incorretamente.')


      if (!Produto.preço)
          throw new Error('Informações não cadastradas, Preço Invalido ou Incorreto.')

      if (!Produto.descrição)
          throw new Error('Informações não cadastradas, Descrição Invalida')

      const InsertProduto = await InserirProduto(Produto);

      resp.send('Produto cadastrado com Sucesso');

  } catch (err) {

      resp.status(404).send({
          erro: err.message
      });
  }
});

server.get('/Administrador/Home/Inserir/Produto/visualizar/:id', async (req, resp) =>{

try{

const visualizar = req.params.id

const Visualização = await VisualizarProduto(visualizar);

resp.send(Visualização);

}

catch(err) {

resp.status(404).send({  erro: err.message })

}

})

server.get('/Administrador/Home/Produtos/Cadastrados', async (req, resp) =>{

    try{
    
    const visualizar = req.params.id
    
    const Visualização = await VisualizarProduto(visualizar);
    
    resp.send(Visualização);
    
    }
    
    catch(err) {
    
    resp.status(404).send({  erro: err.message })
    
    }
    
    })

server.post('/Administrador/Home/Inserir/:id/Imagem', SalvarImagem.single('Capa'), async (req, resp) => {

  try {

      const id = req.params.id;

      if (!req.file) {

          throw new Error('nao foi possivel colocar imagem')

      }

      const caminho = req.file.path;

      const respostaRepository = await InserirImagem(id, caminho)
      console.log(respostaRepository)

      resp.status(204).send();

  }

  catch (err) {

      resp.status(404).send({

          erro: err.message

      })

  }

})

server.get('/administrador/home/Pedidos', async (req, resp) => {

try{

const Pedido = req.params.id

const ConferirGeral = await Pedidos(Pedido)

resp.send(ConferirGeral);

} catch(err) {

resp.status(404).send({ erro: err.message })

}

})

server.get('/administrador/home/Pedidos/Conferir', async (req, resp) =>{

try{

const Conferir = req.params.id

const ConferirStatus = await StatusPedidos(Conferir)

resp.send(ConferirStatus);

}  catch(err) {

resp.status(404).send({ erro: err.message })

}

})

server.get('/administrador/home/Pedidos/Conferir', async (req,resp) => {

try{

    const Conferir = req.params.id

    const ConferirStatus = await Produtos_Status_Pedidos(Conferir)
    
    resp.send(ConferirStatus);

} 
catch(err) {

    resp.status(404).send({ erro: err.message })

}

})

export default server;



