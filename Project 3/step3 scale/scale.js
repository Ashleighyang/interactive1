// if (MATH.Abs(Angle)>MaximumAngle){
//   Angle = Maximum Angle * (Angle / MATH.Abs(Angle))
//
// let button = document.querySelector('#button')

let numTimesClicked = 0
let arm = document.querySelector('.arm')

button.addEventListener('click', function(){
  numTimesClicked = numTimesClicked + 9999
  console.log(numTimesClicked)



  if(numTimesClicked > 599940) {
    numTimesClicked = 599940
  }

  countNumber.innerHTML = numTimesClicked + 500437

  // arm.style.transform = "rotate("+(numTimesClicked/3)+"deg)"
  // panL.style.transform = "rotate("+(numTimesClicked/3)+"deg)"
  armBox.style.transform = "rotate("+(numTimesClicked/29997)+"deg)"
  leftPan.style.transform = "rotate("+(-numTimesClicked/29997)+"deg)"
  rightPan.style.transform = "rotate("+(-numTimesClicked/29997)+"deg)"
  count.style.transform = "rotate("+(-numTimesClicked/29997)+"deg)"
})


//   bar.style.transform = 'rotate(' + Angle + ' deg)'
