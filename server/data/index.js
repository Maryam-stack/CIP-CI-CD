const getBags = require('./json/mock.json')

module.exports = {
  getBags: getBags
}

fetch("http://localhost:3000/data")
.then(response=>response.json())
.then(data=> console.log(data))
