const standardExpress = (req, res, nextMiddleware) => {
  console.log('hello world');
  
  nextMiddleware();
}

const logger = (req, res, next) => {
  const headers = req.headers
  console.log(headers);
  next();
}

const middleWare = (req, res, next) => {
  console.log('');
  const errObj = new Error("an error occured please try again later");
  next(errObj);
}

const errorHandler = (err, req, res, next) => {
  if(err) {
    res.send('There was an error, please try again later');
  }
}
export {standardExpress, logger}