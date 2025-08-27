const logger = (req, res, next) => {
  const Method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(Method, url, time);
  next();
};

module.exports = logger;
