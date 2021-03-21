const names = ["johnny", "raul", "fernando"];
const ocassion = "Surprise";

function writeCards(names,ocassion) {
  const messages = []
  for (let i = 0; i < names.length; i++) {
    const message = `Thank you, ${names[i]}, for the wonderful ${ocassion} gift!`;
    messages.push(message);
  }
  return messages
}

writeCards[names];

function countDown(number){
    for (let i = number; i >= 0 ; i--){
    console.log(i);
    }
}