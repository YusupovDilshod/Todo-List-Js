// setInterval(() => {
//     const getHours = document.querySelector(".getHours")
//     let date = new Date();
//     let hour = date.getHours();
//     let minutes = date.getMinutes();
//     let seconds = date.getSeconds();
//     let day_light_night = "AM"

//     if (hour > 12) {
//         day_light_night = "PM"
//         hour -= 12
//     }
//     if (minutes < 10) {
//         minutes += "0"
//     }
//     if (seconds < 10) {
//         seconds += "0"
//     }

//     getHours.textContent = `${hour}:${minutes}:${seconds} ${day_light_night}`

// }, 1000)


let Add = document.querySelector("#Add");
let inp = document.querySelector("#input");
let delteTask = document.querySelector(".delteTask");

Add.addEventListener("click", () => {
    if (inp.value.length !== 0) {

        delteTask.innerHTML += `
             <div class="delteTask">
                <span id="taskname">
              ${inp.value}
                </span>
                <button class="delete">
                    <i class="fa-solid fa-trash"></i>
                </button>
            </div>
            `
        let deletet = document.querySelectorAll(".delete")
        let strike = document.querySelectorAll("#taskname")
        console.log(strike);
        for (let i = 0; i < deletet.length; i++) {
            deletet[i].onclick = function () {
                this.parentNode.remove();
            }
        }
        for (let i = 0; i < strike.length; i++) {
            strike[i].onclick = function () {
                this.classList.toggle("comp")
            }
        }

    } else {
        alert("Please Enter Check")
    }


})