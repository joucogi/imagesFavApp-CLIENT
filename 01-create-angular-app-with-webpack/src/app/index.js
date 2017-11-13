import { log } from './utils'
import './styles.css'

const me = {
  name: 'juanma',
  city: 'barcelona'
}

const him = me
const you = { ...me }

log(him === me)
log(you === me)
log('alooo!')
