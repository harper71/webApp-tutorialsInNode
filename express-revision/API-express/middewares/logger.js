function logger(req, res, next) {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();

  console.log(method);
  console.log(url);
  console.log(time);
  next()
}

export default logger;