function isAuth(req, res, next) {
  if (req.isAuthenticated()) {
    next();
 } else {
  res
    .status(401)
    .send('<h1>unauthorized</h1><p><a href="/login">Login</a></p>');
 }
}

function isAdmin(req, res, next) {
  if (req.isAuthenticated() && req.user.admin) {
    next();
  } else {
    res
      .status(401)
      .send('<h1>you are not able to view this</h1><p><a href="/login">Login</a></p>');
  }
}

export {
  isAdmin,
  isAuth
}