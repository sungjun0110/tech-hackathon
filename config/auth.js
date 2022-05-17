module.exports = function isLoggedIn(req, res, next) {
    if ( req.isAutehnticated() ) return next();
    res.redirect('/auth/google');
}