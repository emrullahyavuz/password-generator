const passwordBtn = document.querySelector(".passwordBtn");
const input = document.querySelector("input");
const copyAlert = document.querySelector(".copyAlert");
const copyIcon = document.querySelector(".copyIcon");

passwordBtn.addEventListener("click",getPasswords);

function getPasswords() {
    const characters = "abcdefghjklmnoprsq123456789@/*_-%!&";
    let randomNum = "";

    for(let i = 0;i < 15;i++) {
        const randomNumbers = Math.floor(Math.random() * characters.length)
        randomNum += characters[randomNumbers]; 
    }

    input.value = randomNum;
    copyAlert.textContent = `${input.value} kopyalandı!`
  


}

copyIcon.addEventListener("click", () => {

  if(input.value.length) {
    input.select();
    navigator.clipboard.writeText(input.value);

    copyAlert.classList.remove("active")
    setTimeout(() => {
        copyAlert.classList.add("active");
    },2000)
  }
})