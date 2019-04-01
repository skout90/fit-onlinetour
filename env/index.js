module.exports = process.env.NODE_ENV === 'production'
  ? require('./prod.env') : process.env.NODE_ENV === 'test'
    ? require('./test.env') : require('./dev.env')
