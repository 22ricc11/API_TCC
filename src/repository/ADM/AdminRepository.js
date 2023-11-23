import { conn } from '../connection.js';

export async function LoginADM(email, senha) {

const comando = `

select     id_admin 		id,
           nm_admin  		nome,
           ds_email			email
    from   tb_cliente
    where  ds_email  =   ? 
    and    ds_senha  =   ? ;

`
const [resp] = await conn.query(comando, [email, senha])

return resp;
}



export async function InserirProduto(Produto) {
    let comando = `

    insert tb_produto ( id_categoria, nm_produto, vl_preço, ds_descrição, bt_disponivel)
        values ( ?, ?, ?, ?, ? );
    
    `

    const resp = await conn.query(comando, [Produto.categoria, Produto.nome, Produto.preço, Produto.descrição, Produto.disponivel])
    return Produto.id = resp.insertID
}

export async function VisualizarProduto(id) {

const comando = `

select nm_produto, vl_preço, ds_descrição, nm_categoria, img_produto
from tb_produto
join tb_produto_img
join tb_categoria
on tb_produto_img.id_produto = tb_produto.id_produto;`

const [resp] = await conn.query( comando, [id])
return resp

}

export async function InserirImagem(id, caminho) {

    let comando = `
        insert into tb_produto_img (id_produto, img_produto) values(?, ?)
    `;

    const [resp] = await conn.query(comando, [id, caminho])
    return resp.affectedRows;

}

export async function Pedidos(id){

const comando = `

select  qtd_items, bt_situação, nm_cliente
		from tb_pedido_item
        join tb_pedido
        join tb_cliente
        on tb_pedido_item.id_pedido = tb_pedido.id_pedido;

`
const [resp] = await conn.query( comando, [id])
return resp;

}


export async function StatusPedidos(id){

const comando = `

select ds_formatopagamento, nr_total, qtd_items, bt_situação
		from tb_pedido
        join tb_carrinho
        join tb_pedido_item
        on tb_pedido.id_carrinho = tb_carrinho.id_carrinho;

`
const [resp] = await conn.query(comando, [id])
return resp;

}

export async function Produtos_Status_Pedidos(id){

const comando = `

select img_produto, nm_produto, nm_categoria
	from tb_produto_img
    join tb_produto
    join tb_categoria
    on   tb_produto_img.id_produto = tb_produto.id_produto;

`
const [resp] = await conn.query( comando, [id])
return resp

}