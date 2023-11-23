import { conn } from './connection.js'

export async function InserirEndereço(Endereço) {

	const comando = `

insert into tb_endereco( id_cliente, ds_cep, ds_estado, ds_bairro, nr_numero, ds_complemento )
						values ( ?, ?, ?, ?, ?, ? );

`

	const [resp] = await conn.query(comando, [Endereço.IdCliente, Endereço.cep, Endereço.estado, Endereço.bairro, Endereço.numero, Endereço.complemento])
	Endereço.ID = resp.insertId

	return resp

}


export async function VerificarEndereco(Endereco){

	const comando = `
	
  select id_endereco  as id,
		 ds_cep    as cep,
		 ds_estado  as estado,
		 ds_bairro  as bairro,
		 nr_numero  as numero,
		 ds_complemento as complemento
  from   tb_endereco where ds_cep=?;
  
	`
  
  const [Resp] = await conn.query(comando, [Endereco])
  return Resp
  
  
  }

  export async function AdicionarCartao(Cartao){

const comando = `



`
const [resp] = await conn.query(comando, [Cartao.endereco, Cartao.pedido, Cartao.nome, Cartao.numero, Cartao.vencimento, Cartao.cvv, Cartao.situação ])
Cartao.id = resp.insertID

return resp;

  }




