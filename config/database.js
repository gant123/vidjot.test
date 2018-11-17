if(process.env.NODE_ENV === 'production') {
  module.exports = {mongoURI: 'mongodb://gant123:6701221m@ds149373.mlab.com:49373/vidjot-prod'}
} else {
  module.exports = {mongoURI: 'mongodb://localhost/vidjot-dev'}
}