let result=document.querySelector('#result')

document.querySelectorAll('button').forEach( btn => btn.addEventListener('click', (e) => {  
  e.preventDefault();
  randomize();
  computerPlays(e);
}
))

const randomize = () => {
     const random = [
  '<i class="far fa-hand-rock"></i>',
  '<i class="far fa-hand-scissors"></i>',
  '<i class="far fa-hand-paper"></i>'
];
  let randomIcon = random[Math.floor(Math.random() * random.length)];
  document.querySelector('#computerPlay').innerHTML = randomIcon;
};

let Num1;
let Num2;

const computerPlays = (e) => {
  let chosenIcon = e.target.className;
  let chosenByPc = document.querySelector('#computerPlay').innerHTML
  let resultBanner = document.querySelector('#result')
  
  if(
    (chosenIcon.includes("scissors") && chosenByPc.includes("paper")) || 
    (chosenIcon.includes("rock") && chosenByPc.includes("scissors")) ||
    (chosenIcon.includes("paper") && chosenByPc.includes("rock"))
      ) { 
      resultBanner.innerHTML = "You are Won!"
      result.style.color='green';
      Num1=Number(score_you.innerHTML) + 1;
      score_you.innerHTML=Num1
    }
  else if (
      (chosenIcon.includes("scissors") && chosenByPc.includes("rock")) ||
      (chosenIcon.includes("rock") && chosenByPc.includes("paper")) ||
      (chosenIcon.includes("paper") && chosenByPc.includes("scissors"))
    ) {
    resultBanner.innerHTML = " You are Lost!"
    result.style.color='red'
    Num2=Number(score_pc.innerHTML) + 1;
    score_pc.innerHTML=Num2
  }
  else {
    resultBanner.innerHTML = "equal!"
    result.style.color=''
  } 

}




  




  