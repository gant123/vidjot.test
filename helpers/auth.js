module.exports = {
  ensureAuthenticated: function(req, res, next){
      if(req.isAuthenticated()) {
        return next();
      }
      req.flash('error_msg', 'Nice try bro! You are not authorized!');
      res.redirect('/users/login');
  }
}