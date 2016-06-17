module.exports = {
  responseTime: function(req, res, next){
    console.log('RESTIME: XXX')
    next();
  },

  cors: function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Content-Type, Depth, User-Agent, X-File-Size, X-Requested-With, If-Modified-Since, X-File-Name, Cache-Control");
      res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
      next();
  }
}
