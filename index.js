/* eslint-disable no-case-declarations */
const { inquirerMenu, pause, readInput } = require('./helpers/inquirer')
const Search = require('./models/search')

const main = async () => {
  const search = new Search()
  let opt
  do {
    opt = await inquirerMenu()
    if (opt !== 0) await pause()

    switch (opt) {
      case 1:
        const place = await readInput('City: ')
        search.city(place)
        break
      case 2:
        console.log('Option 2')
        break
    }
  } while (opt !== 0)
}
main()
