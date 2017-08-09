var mysql = require('mysql');
//FACTORY METHOD
function createDBConnection(){
  //criacao da conexao com o banco mysql
  return mysql.createConnection({
      host : 'localhost',
      user : 'root',
      password: '1234',
      database : 'casadocodigo_nodejs'
  });
}
//wrapper - função q embrulha outra função
module.exports = function(){
  return createDBConnection;

}
