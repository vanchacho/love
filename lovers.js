const openkonvert = document.getElementById('openkonvert')
const closekonvert = document.getElementById('closekonvert')
const heart = document.getElementById('heart')
const heart1 = document.getElementById('heart1')
const heart2 = document.getElementById('heart2')
const heart3 = document.getElementById('heart3')
const heart4 = document.getElementById('heart4')

heart.style.display = 'none'
heart1.style.display = 'none'
heart2.style.display = 'none'
heart3.style.display = 'none'
heart4.style.display = 'none'

openkonvert.addEventListener('click',()=>{
 
  document.querySelector('.mailtop').classList.toggle('up');
  document.querySelector('.mailpaper').classList.toggle('up');
  document.querySelector('body').classList.toggle('change')

  if (heart.style.display === 'none') {
    heart.style.display = 'block';
    openkonvert.innerText = 'დახურე კონვერტი';
  } else {
    heart.style.display = 'none';
    openkonvert.innerText = 'გახსენი კონვერტი';
  }

  if (heart1.style.display === 'none') {
  heart1.style.display = 'block';
  
  } else {
    heart1.style.display = 'none';
  }

  if (heart2.style.display === 'none') {
    heart2.style.display = 'block';
    
    } else {
      heart2.style.display = 'none';
      }
      
  if (heart3.style.display === 'none') {
    heart3.style.display = 'block';
    
    } else {
      heart3.style.display = 'none';
      }
  if (heart4.style.display === 'none') {
    heart4.style.display = 'block';
    
    } else {
      heart4.style.display = 'none';
      }
})








