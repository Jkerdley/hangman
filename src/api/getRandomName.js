import axios from 'axios'

export const getRandomName = async () => {
  const { data } = await axios('https://api.randomdatatools.ru/?unescaped=false&params=FirstName')
  return data.FirstName.toLowerCase()
}
