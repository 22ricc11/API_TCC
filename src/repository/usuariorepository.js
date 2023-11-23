
import { conn } from './connection.js'

export async function Login(email, senha) {
  const comando = `

      select  id_cliente		id,
              nm_cliente		nome,
              ds_email			email
      from    tb_cliente
      where   ds_email  =   ? 
      and     ds_senha  =   ? ;

  `
  const [linhas] = await conn.query(comando, [email, senha])

  return linhas;
}

export async function Cadastro(Cliente){

   const comando = `
   
   insert into tb_cliente (nm_cliente, ds_email, ds_senha)
          values (?, ?, ?);

   `

  const [resposta] = await conn.query(comando, [Cliente.cliente, Cliente.email, Cliente.senha])
  Cliente.id = resposta.insertID

  return resposta;
}


export async function VerificarEmail(email){

  const comando = `
  
select id_cliente  as id,
       ds_email    as email
from   tb_cliente where ds_email=?;

  `

const [Resp] = await conn.query(comando, [email])
return Resp


}