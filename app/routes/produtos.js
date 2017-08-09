
module.exports = function(app){

  app.get('/produtos', function(req, res){

    var connection = app.infra.connectionFactory();
    var produtosBanco = new app.infra.ProdutosDAO(connection);

    //consulta no banco
    produtosBanco.lista(function(erros, results){
      res.render('produtos/lista',{lista:results});
    });

    connection.end();
  });
}
