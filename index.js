const input = document.querySelector('.input');
const ul = document.querySelector('.result__list-item');
const funFactTitle = document.querySelector('.fun-fact__title');
const error = document.querySelector('.error');
let funFact = document.querySelector('.fun-fact');

const funFactArr = [
  'Each hair on a human head grows one centimetre a month. ',
  'Do you know the shortest verse in the Bible? It is just two words – “Jesus wept”.',
  'Three angles form a triangle, which is a geometrical figure. Also, primary colors are three – red, yellow and blue.',
  'In Chinese culture, the word “four” sounds like that of “death”. This may be the reason that most hospitals in China do not have the fourth floor.',
  'Bible highlights Jesus sharing just five loaves of bread for five thousand people.',
  'Also named as motherhood number, six also indicate for caring and protecting nature.',
  'There are 7 deadly sins in Christian teaching. Those sins are – greed, pride, lust, gluttony, envy, wrath and sloth.',
  'The element oxygen has atomic number eight. Also on the computer, 8 bits make a byte.',
  'World Trade Center terrorist attack in New York, which killed almost 3,000 people happened on 9/11.',
  'Korean alphabet has 10 vowels',
];

const submit = document.querySelector('button');

submit.addEventListener('click', e => {
  e.preventDefault();
  if (input.value > 10 || input.value < 1) {
    errorHandler();
    resetTexts();
    return;
  }
  error.textContent = '';
  funFactPopulate(input);
  funFactShow(input.value);
  calculateResult(input.value);
});

const funFactPopulate = n => {
  const arrIndex = +n.value - 1;
  funFact.textContent = funFactArr[arrIndex];
};

const showResult = result => {
  const li = document.createElement('li');
  const p = document.createElement('p');
  p.textContent = `${result}`;
  li.appendChild(p);
  ul.appendChild(li);
};

const funFactShow = n => {
  funFactTitle.textContent = `Fun fact about number ${n}:`;
};

const calculateResult = n => {
  ul.innerHTML = '';
  for (let i = 1; i <= 10; i++) {
    const result = `${input.value} X ${i} = ${n * i}`;
    showResult(result);
  }
};

const errorHandler = () => {
  error.textContent = 'Please input a number from 1 - 10';
};

const resetTexts = () => {
  funFactTitle.textContent = '';
  ul.textContent = '';
  funFact.textContent = '';
};
