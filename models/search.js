const axios = require('axios')

class Search {
  search = []

  constructor () {
    this.search = []
  }

  async city (place = '') {
    console.log('🚀 ~ file: search.js:9 ~ Search ~ city ~ place', place)
    axios.get()
    return []
  }

  addSearch (search) {
    this.search.push(search)
  }
}

module.exports = Search
