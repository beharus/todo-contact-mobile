// Add list

let ul = document.querySelector("ul");

let colorAct = "";
let save = document.querySelector(".save");
let modal = document.querySelector(".modal");
let name2 = document.querySelector(".name");
let number = document.querySelector(".number");
let color = document.querySelector(".color");
let deleteElement = document.querySelector(".delete");
let btn = document.querySelector(".plus");
let bgcol = document.querySelector('.changecolor')
let classSpan = `font-oswald text-2xl font-semibold`;
console.log(classSpan);
let classNum = "font-oswald opacity-[.8]";
let bodyContent = document.querySelector('body')

btn.addEventListener("click", (e) => {
  modal.classList.remove("hidden");
  modal.classList.add("block");

  modal.style.display = "block";
  console.log("clicked");
});

// SAVE
save.addEventListener("click", () => {
  if (number.value == "" && name2.value == "") {
    alert("you don't write anything");
  } else if (number.value == "") {
    alert("you don't write your phone number");
  } else if (name2.value == "") {
    alert("you don't write your name");
  } else {
    let lenght1 = number.value;
    let numlength = lenght1.length;
    console.log(numlength);
    if (numlength < 8) {
      alert("your number is not long enought, \nat least 8 numbers please");
    } else {
      modal.classList.remove("block");
      modal.classList.add("hidden");
      modal.style.display = "none";

      let li = document.createElement("li");
      li.setAttribute(
        "class",
        "flex justify-between items-center cursor-pointer border-b-2 px-4 py-4"
      );
      let colorAct = color.value;
      li.innerHTML = `<span class="${classSpan}" style="color: ${colorAct}">${name2.value}</span><span class="${classNum}" style="color: ${colorAct}"> ${number.value}</span/>`;
      ul.appendChild(li);
    }
  }
});

// changecolor
bgcol.addEventListener('click', () => {
  let col = prompt('write the name of color or the fotmat of color(rgb, ...)')
  bodyContent.style.background=`${col}`
})


// delete
deleteElement.addEventListener("click", (e) => {
  deleteElement.classList.toggle("bga");
  ul.addEventListener("click", (e) => {
    if (e.target.nodeName == "LI") {
      e.target.remove();
    }
  });
});

// Watch
let span = document.getElementById("span");
function time() {
  let d = new Date();
  let m = d.getMinutes();
  let h = d.getHours();
  span.textContent = ("0" + h).substr(-2) + ":" + ("0" + m).substr(-2);
}
setInterval(time, 1000);
