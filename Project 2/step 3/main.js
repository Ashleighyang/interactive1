let pry = document.querySelector('#pry')
let nervous = document.querySelector('#nervous')
let hehe = document.querySelector('.hehe')
let good = document.querySelector('.good')
let haha = document.querySelector('.haha')
let xxx = document.querySelector('.xxx')
let bye = document.querySelector('.bye')
let allright = document.querySelector('.allright')
let pryImage = document.querySelector('#pryImage')


pry.onpointerdown = function(){
  pryImage.src = "plz.png"
  pry.classList.add('animateShake')
  pry.classList.add('click')
}

pry.onpointerup = function(){
 pry.classList.remove('animateShake')
 pry.classList.remove('click')
}


nervous.onpointerdown = function(){
  pryImage.src = "https://emojipedia-us.s3.amazonaws.com/thumbs/320/facebook/111/disappointed-but-relieved-face_1f625.png"
  nervous.classList.add('animateShake')
}

nervous.onpointerup = function(){
  nervous.classList.remove('animateShake')
}



hehe.onpointerdown = function(){
  pryImage.src = "http://5b0988e595225.cdn.sohucs.com/images/20170929/305640b3aa194a06b52196450c364486.jpeg"
  hehe.classList.add('animateShake')
  hehe.classList.add('click')
}

hehe.onpointerup = function(){
 hehe.classList.remove('animateShake')
 hehe.classList.remove('click')
}


good.onpointerdown = function(){
  pryImage.src = "https://emojipedia-us.s3.amazonaws.com/thumbs/320/facebook/111/thumbs-up-sign_1f44d.png"
  good.classList.add('animateShake')
  good.classList.add('click')
}

good.onpointerup = function(){
 good.classList.remove('animateShake')
 good.classList.remove('click')
}


haha.onpointerdown = function(){
  pryImage.src = "https://emojipedia-us.s3.amazonaws.com/thumbs/320/facebook/111/smiling-face-with-open-mouth-and-tightly-closed-eyes_1f606.png"
  haha.classList.add('animateShake')
  haha.classList.add('click')
}

haha.onpointerup = function(){
 haha.classList.remove('animateShake')
 haha.classList.remove('click')
}


allright.onpointerdown = function(){
  pryImage.src = "https://emojipedia-us.s3.amazonaws.com/thumbs/320/apple/118/face-with-tears-of-joy_1f602.png"
  allright.classList.add('animateShake')
  allright.classList.add('click')
}

allright.onpointerup = function(){
 allright.classList.remove('animateShake')
 allright.classList.remove('click')
}

xxx.onpointerdown = function(){
  pryImage.src = "https://emojipedia-us.s3.amazonaws.com/thumbs/320/apple/118/face-throwing-a-kiss_1f618.png"
  xxx.classList.add('animateShake')
  xxx.classList.add('click')
}

xxx.onpointerup = function(){
 xxx.classList.remove('animateShake')
 xxx.classList.remove('click')
}

bye.onpointerdown = function(){
  pryImage.src = "https://www.chinlingo.com/daily/upload/ueditor/image/20170405/35861491371249250.png"
  bye.classList.add('animateShake')
  bye.classList.add('click')
}

bye.onpointerup = function(){
 bye.classList.remove('animateShake')
 bye.classList.remove('click')
}
