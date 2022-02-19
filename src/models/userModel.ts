const mongose = require('mongoose')

const authModel = mongose.model('users', {
  name: {
    type: String,
    require: true
  },
  age: {
    type: Number,
    require: true
  },
  email: {
    type: String,
    require: true
  },
  password: {
    type: String,
    require: true
  }
})

export default authModel
