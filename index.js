
const myCities = [
  "mexico", "japan", "america", "usa", "canada", "brazil", "taiwan",
]

const question = prompt("Where are you from?")

// console.log(myCities.indexOf(question), 'hi')
// console.log(myCities.find(el => el === question), 'hello')

function whereHaveYouBeen () {

}

if(myCities.find(el => el === question)) {
  console.log(myCities.indexOf(question), '1')
  console.log(`I've been to ${question} before`)
} else {
  console.log(`I've never visited ${question}`)
  console.log(myCities.indexOf(question), '2')
}