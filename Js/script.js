let input = document.querySelector('#Input');
let output = document.querySelector('#output');
output.style.display = 'none';
let button = document.querySelectorAll('.button');
button[0].style.textDecoration = 'underline';
let card = document.querySelectorAll('.card');
let convert = document.querySelector('.convertBtn');

function resetDefault(){
for(let i = 0; i < card.length; i += 1){
card[i].style.display = 'block';
}
for(let i = 0; i < button.length; i += 1){
  button[i].style.textDecoration = 'none';
}
}


function lbsConverter(){
  let lbs = input.value;
  document.querySelector('#gramsOutput').innerHTML = lbs/0.0022046;
  document.querySelector('#KgOutput').innerHTML = lbs/2.2046;
  document.querySelector('#ozOutput').innerHTML = lbs * 16;

}

function KgsConverter(){
  let Kgs = input.value;
  document.querySelector('#gramsOutput').innerHTML = Kgs*1000;
  document.querySelector('#lbsOutput').innerHTML = Kgs * 2.2046;
  document.querySelector('#ozOutput').innerHTML = Kgs * 35.274;
}
function gramConverter(){
  let gram = input.value;
  document.querySelector('#KgOutput').innerHTML = gram/1000;
  document.querySelector('#lbsOutput').innerHTML = gram * 0.0022046;
  document.querySelector('#ozOutput').innerHTML = gram * 0.035274;
}
function ozConverter(){
  let oz = input.value;
  document.querySelector('#KgOutput').innerHTML = oz * 0.0283495;
  document.querySelector('#lbsOutput').innerHTML = oz * 0.0625;
  document.querySelector('#gramsOutput').innerHTML = oz * 28.3495;
}


convert.addEventListener('click',function(){
  if(button[0].style.textDecoration === 'underline'){
  lbsConverter();
  output.style.display = 'block';
  card[3].style.display = 'none';
  }
  if(button[1].style.textDecoration === 'underline'){
    KgsConverter();
    output.style.display = 'block';
  }
  if(button[2].style.textDecoration === 'underline'){
    ozConverter();
  output.style.display = 'block';
  }
  if(button[3].style.textDecoration === 'underline'){
    gramConverter();
  output.style.display = 'block';
  }
  if(input.value === ''){
    alert('Enter The Number!')
    output.style.display = 'none';
  }
})

button[0].addEventListener('click',function(event){
  resetDefault()
  button[0].style.textDecoration = 'underline';
  card[3].style.display = 'none';
  input.placeholder = 'Enter Pounds';
  output.style.display = 'none';
  input.value = '';
})

button[1].addEventListener('click',function(){
    resetDefault()
    button[1].style.textDecoration = 'underline';
    card[1].style.display = 'none';
    input.placeholder = 'Enter Kilograms';
    output.style.display = 'none';
    input.value = '';
})

button[2].addEventListener('click',function(){
  resetDefault()
  button[2].style.textDecoration = 'underline';
  card[2].style.display = 'none';
  input.placeholder = 'Enter Ounces';
  output.style.display = 'none';
  input.value = '';
})

button[3].addEventListener('click',function(){
  resetDefault()
  button[3].style.textDecoration = 'underline';
  card[0].style.display = 'none';
  input.placeholder = 'Enter Grams';
  output.style.display = 'none';
  input.value = '';
})






