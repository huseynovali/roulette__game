let Enter__Page = document.querySelector(".enter__page");
let User1Input = document.getElementById("user1");
let User2Input = document.getElementById("user2");
let Start__button = document.querySelector(".start__button");
let Fire__button = document.querySelector(".fire__button");

let User1Name = document.querySelector(".user1name");
let User2Name = document.querySelector(".user2name");
let Game__Page = document.querySelector(".game__page");
let User1bullet = document.getElementById('user1bullet');
let User2bullet = document.getElementById('user2bullet');



function eventListener() {
  document.addEventListener("DOMContentLoaded", firstLoad);
  Start__button.addEventListener("click", checkUser);
  Fire__button.addEventListener('click',checkValue)
}

eventListener();

function firstLoad() {
  Enter__Page.style.display = "block";
  Game__Page.style.display = "none";
}

function checkUser() {
  let User1InputValue = User1Input.value.trim();
  let User2InputValue = User2Input.value.trim();
  if (User1InputValue !== "" && User2InputValue !== "") {
    startGame(User1InputValue, User2InputValue);
    Enter__Page.style.display = "none";
  } else {
    console.log("gicdir ey ");
  }
}
const bullet = (Math.ceil(Math.random() * 100) % 6) + 1;



function startGame(user1, user2) {
  Enter__Page.style.display = "none";
  Game__Page.style.display = "flex";
  User1Name.textContent = user1;
  User2Name.textContent = user2;
  console.log(bullet);


}


function checkValue(){
 
    let user1bulletvalue = User1bullet.value;
    let user2bulletvalue = User2bullet.value;
 
    if(user1bulletvalue==user2bulletvalue){
        console.log('aye korsuzmu eynidi!')
        return 0
    }
     if(user1bulletvalue*1 == bullet){
        alert(User1Name.textContent + " "+ 'gorbagor oldun aye reqem '+bullet +' idi')
        window.location.reload()
     }
      else if(user2bulletvalue*1==bullet){
       alert(User2Name.textContent + " "+ 'gorbagor oldun aye reqem '+bullet +' idi' )
       window.location.reload()
     }else{
        User1bullet.value=''
        User2bullet.value=''
     }

}