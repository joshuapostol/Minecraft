let gtag = document.querySelector('#text');
let button = document.querySelector('#submit');
let java = document.querySelector('#java');
let bedrock = document.querySelector('#bedrock');
let price = document.querySelector('#coinT');
let mc = document.querySelector('#mcT');
let tdb = document.querySelector('.tda');
let gtagT = document.querySelector('#gtagT');
let reset = document.querySelector('.done');

//Java button
function myJava() {
  java.style.border = '1.5px solid #05E316';
  bedrock.style.border = '1.5px solid rgba(255,255,255,0.2)';
  mc.innerHTML = `JAVA`
}
//Bedrock button
function myBedrock() {
  bedrock.style.border = '1.5px solid #05E316';
  java.style.border = '1.5px solid rgba(255,255,255,0.2)'
  mc.innerHTML = `BEDROCK`
}

//MINE COINS
function CoinA() {
  price.innerHTML = `20`
}

function CoinB() {
  price.innerHTML = '50'
}

function CoinC() {
  price.innerHTML = '100'
}

function CoinD() {
  price.innerHTML = '200'
}

function CoinE() {
  price.innerHTML = '300'
}

function CoinF() {
  price.innerHTML = '500'
}

//Gtag
function myGtag() {
  gtagT.innerHTML = ` ${gtag.value}`
}

// Reset button
reset.addEventListener('click', () => {
  gtagT.innerHTML = ''
  mc.innerHTML = ''
  price.innerHTML = ''

  gtag.value = ''
  java.style.border = '1.5px solid rgba(255,255,255,0.2)'
  bedrock.style.border = '1.5px solid rgba(255,255,255,0.2)'
});
// BUY button
button.addEventListener('click', () => {
  if(gtag.value === '' && mcT.innerHTML === '' && price.innerHTML === ''){
    alert('Fill up the requirements')
  }else if(gtag.value === ''){
    alert('Gtag is no value');
  }else if (mcT.innerHTML === ''){
    alert('Louncher is no Value')
  }else if (price.innerHTML === '') {
    alert('MineCoin is no value')
  }else{
    document.querySelector('a').href = 'penguin.mp4';
  }
})