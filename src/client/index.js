import { checkForName } from './js/nameChecker'
import { handleSubmit } from './js/formHandler'

import {API_ID} from './../../.env'
import {API_KEY} from './../../.env'

import './styles/resets.scss'
import './styles/base.scss'
import './styles/form.scss'
import './styles/footer.scss'
import './styles/header.scss'

console.log(checkForName);

alert("I EXIST")
console.log("CHANGE!!");

export {
    checkForName,
    handleSubmit,
    API_ID,
    API_KEY
}
