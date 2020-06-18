 /*
 Kunal puri
 Junae 17 2020
  */
 
function getRandomInteger (minimum, maximum) {
  minimum = Math.ceil(minimum) 
  maximum = Math.floor(maximum + 1) 
  return Math.floor(Math.random() * (maximum - minimum)) + minimum
}

const nouns = ['tempo', 'frier', 'kunal', 'car', 'parvinder','bread', 'pizza', 'dog', 'burger', 'fries' ]

const verbs = ['drinking', 'cleaning', 'sleeing', 'eating', 'applying', 'doing', 'running', 'taking', 'jumping', 'flying']

const adverbs = ['chemically', 'nationally', 'awkwardly', 'beautifully', 'eagerly', 'happily', 'hungrily', 'quickly', 'lazily', 'really', 'quietly']

const adjectives = ['hot', 'cold', 'aggressive', 'agreeable', 'ambitious', 'brave', 'calm', 'eager', 'faithful', 'delightful']

const proNouns = ['they', 'we', 'you', 'he', 'she', 'I', 'it', 'mine', 'who' , 'whom']

const openings = ['you hiked', 'I learned', 'I tried', 'I loved', 'on that day', 'In the morning', ' In afternoon', ' I have to do', ' I liked', ' In night']

const closings = ['with extra cheese', 'the end', 'good night', 'at last', 'bye', 'have a good one', 'thanks','appreciate it', 'with extra salt', 'with extra mayo']


function createSentence (){
const sentence = openings[getRandomInteger(0, openings.length - 1)] + ' ' +
 adjectives[getRandomInteger(0, openings.length - 1)] + ' ' + 
 nouns[getRandomInteger(0, openings.length - 1)] + ' ' +
 proNouns[getRandomInteger(0, openings.length - 1)] + ' ' +
 verbs[getRandomInteger(0, openings.length - 1)] + ' ' +
 adverbs[getRandomInteger(0, openings.length - 1)] + ' ' +
 closings[getRandomInteger(0, openings.length - 1)] 
 
 return sentence;
}
const numberOfSentences = 10;

for (let i = 0; i < numberOfSentences; i++){
  const Sentence = createSentence()
  console.log(Sentence)
}



function output (message) {
  console.log("\n");
  console.log(message);
  console.log("\n");
  
}

