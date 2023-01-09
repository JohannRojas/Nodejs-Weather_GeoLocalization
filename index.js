import { leerInput } from './helpers/inquirer.js'

const main = async () => {
  const text = await leerInput('HI Jhann')
  console.log('🚀 ~ file: index.js:6 ~ main ~ text', text)
}

main()
