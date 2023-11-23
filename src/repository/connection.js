import mysql from "mysql2/promise";


const conn = await mysql.createConnection({

    host: 'localhost',
    password: 'Ricardito991',
    user:'DeveloperOne',
    database:'naturalmente_db'

})

console.log('banco subiu');

export {conn} ;