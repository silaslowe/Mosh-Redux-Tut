import { compose, pipe} from 'lodash/fp'

let input = "    JavaDcript   "

const trim = str => str.trim()
const wrapInDiv = str => `<div${str}</div>`
const toLowerCase = str => str.toLowerCase()

const result = wrapInDiv(toLowerCase(trim(input)))

