import 'dotenv/config';

import express from 'express';
import cors from 'cors';

import usuarioController from './controller/usuarioController.js';
import produtoController from './controller/produtoController.js';
import carrinhoController from './controller/CarrinhoController.js';
import CompraController from './controller/CompraController.js';
import adminController from './controller/ADM/AdminController.js'

const Server = express();
Server.use(cors());
Server.use(express.json());

Server.use(usuarioController);
Server.use(produtoController);
Server.use(carrinhoController);
Server.use(CompraController);
Server.use(adminController);

Server.listen(process.env.PORT, () => console.log(`API subiu na porta ${process.env.PORT}`))