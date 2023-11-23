
import { conn } from './connection.js'

export async function ConferirProduto(id){

    //if (typeof Produto !== 'object') {
      //  throw new Error('O parâmetro Produto deve ser um objeto.');
      //}
    

const comando = `
  

    select id_produto, nm_produto, nm_categoria, vl_preço, bt_disponivel, ds_descrição, bt_favorito
        from tb_produto
    inner join tb_categoria on tb_produto.id_categoria = tb_categoria.id_categoria
        where id_produto = ? ;

  
  `

  const [resp] = await conn.query(comando, [id])
return resp
}