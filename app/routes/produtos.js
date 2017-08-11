module.exports = function(app){

  var listaProdutos = function(req, res){
    var connection = app.infra.connectionFactory();
    var produtosDAO = new app.infra.ProdutosDAO(connection);

    produtosDAO.lista(function(erros, results){
      res.format({
        html: function(){
          res.render('produtos/lista', {lista:resultados});
        },
        json: function(){
          res.json(resultados);
        }
    });
  });
  connection.end();
}

  app.get('/produtos', listaProdutos);

  //app.get('/produtos', listaProdutos);
  app.get('/produtos/json', function(req, res){
    var connection = app.infra.connectionFactory();
    var produtosDAO = new app.infra.ProdutosDAO(connection);

    produtosDAO.lista(function(err, results){
      res.render('produtos/form');
    });

    connection.end();

  });

  app.get('/produtos/form', function(req, res){
    res.render('produtos/form');
  });


  app.post('/produtos', function(req, res) {
    var produto = req.body;

    var connection = app.infra.connectionFactory();
    var produtosDAO = new app.infra.ProdutosDAO(connection);
    produtosDAO.salva(produto, function(erros, resultados){
        res.redirect('/produtos');
      });

      connection.end();
  });
}
