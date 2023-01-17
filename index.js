/* eslint-disable no-case-declarations */
require('dotenv').config()

const { inquirerMenu, pause, readInput, listPlaces } = require('./helpers/inquirer')
const Search = require('./models/search')

const main = async () => {
  const search = new Search()
  let opt
  do {
    opt = await inquirerMenu()

    switch (opt) {
      case 1:
        const term = await readInput('City: ')
        const places = await search.city(term)

        const id = await listPlaces(places)
        if (id === '0') continue

        const placeSelected = places.find(p => p.id === id)

        const weather = await search.weatherByPlace(placeSelected.lat, placeSelected.lng)

        console.clear()
        console.log('\nInformation of the city\n'.green)
        console.log('City:', placeSelected.name)
        console.log('Lat:', placeSelected.lat)
        console.log('Lng:', placeSelected.lng)
        console.log('Weather:', weather.desc)
        console.log('Min:', weather.min)
        console.log('Max:', weather.max)
        console.log('Temp:', weather.temp)
        search.addSearch(placeSelected.name)

        break
      case 2:
        search.historyCapitalized.forEach((place, i) => {
          const idx = `${i + 1}.`.green
          console.log(`${idx} ${place}`)
        })
        break
    }
    if (opt !== 0) await pause()
  } while (opt !== 0)
}
main()
