import {conn} from './connection.js';

export async function InserirCarrinho( Carrinho ){

    const comando = `
    
    insert into tb_carrinho( id_cliente, id_produto, qtd_produto )
                            values( ?, ?, ? );
    
    `
    const [resp] = await conn.query(comando, [ Carrinho.IdCliente, Carrinho.IdProduto, Carrinho.qtdProduto ])
    Carrinho.Id = resp.insertId
    
    return resp
    
      }

export async function DeletarCarrinho( Id ){

const comando = `

DELETE FROM tb_carrinho
WHERE id_carrinho = ?


`
const [resp] = await conn.query(comando, [ Id ])
return resp.affectedRows


}

export async function Carrinho( id ){

const comando = `

select  id_produto  as produto,
		    qtd_produto as qtd
from    tb_carrinho;

`
const [resp] = await conn.query(comando, [ id ])
return resp

}

export async function ConsultarItem( Id ){

const comando = `

select id_produto as produto,
       qtd_produto as qtd
from   tb_carrinho
where  id_produto = 1;

`

const Resposta = await conn.query(comando, [Id])
return Resposta

}