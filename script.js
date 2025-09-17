let displaymenu = document.getElementById("displaymenu")
let men = document.getElementById("men")
let women = document.getElementById("women")
let kids = document.getElementById("kids")
let home = document.getElementById("home")
let menu = document.getElementsByClassName("menu")[0]
let profile = document.getElementById("profile")
let cart = document.getElementById("cart")
let profileCnt = document.getElementById("profileCnt")
let profile_close = document.getElementById("profile_close")



menu.addEventListener("click",()=>{
    document.getElementsByTagName("nav")[0].classList.toggle("display")
})

men.addEventListener("mouseover", () => {
    displaymenu.innerHTML =
        `
    <div id="menuCard" data-left="18%">
      <ul>
        <li>Topware</li>
        <li>T-shirt</li>
        <li>Casual Shirts</li>
        <li>Sweaters</li>
        <li>Suits</li>
      </ul>
      <ul>
        <li>Topware</li>
        <li>T-shirt</li>
        <li>Casual Shirts</li>
        <li>Sweaters</li>
        <li>Suits</li>
      </ul>
      <ul>
        <li>Topware</li>
        <li>T-shirt</li>
        <li>Casual Shirts</li>
        <li>Sweaters</li>
        <li>Suits</li>
      </ul>
    </div>
    `
    menuCard.style.setProperty("--left", menuCard.dataset.left);
    document.getElementById("menuCard").addEventListener("mouseleave",()=>{
        displaymenu.innerHTML = ``
    })
})
women.addEventListener("mouseover", () => {
    displaymenu.innerHTML =
        `
    <div id="menuCard" data-left="27%">
      <ul>
        <li>Topware</li>
        <li>T-shirt</li>
        <li>Casual Shirts</li>
        <li>Sweaters</li>
        <li>Suits</li>
      </ul>
      <ul>
        <li>Topware</li>
        <li>T-shirt</li>
        <li>Casual Shirts</li>
        <li>Sweaters</li>
        <li>Suits</li>
      </ul>
      <ul>
        <li>Topware</li>
        <li>T-shirt</li>
        <li>Casual Shirts</li>
        <li>Sweaters</li>
        <li>Suits</li>
      </ul>
    </div>
    `
    menuCard.style.setProperty("--left", menuCard.dataset.left);
    document.getElementById("menuCard").addEventListener("mouseleave",()=>{
        displaymenu.innerHTML = ``
    })
})
kids.addEventListener("mouseover", () => {
    displaymenu.innerHTML =
        `
    <div id="menuCard" data-left="35%">
      <ul>
        <li>Topware</li>
        <li>T-shirt</li>
        <li>Casual Shirts</li>
        <li>Sweaters</li>
        <li>Suits</li>
      </ul>
      <ul>
        <li>Topware</li>
        <li>T-shirt</li>
        <li>Casual Shirts</li>
        <li>Sweaters</li>
        <li>Suits</li>
      </ul>
      <ul>
        <li>Topware</li>
        <li>T-shirt</li>
        <li>Casual Shirts</li>
        <li>Sweaters</li>
        <li>Suits</li>
      </ul>
    </div>
    `
    menuCard.style.setProperty("--left", menuCard.dataset.left);
    document.getElementById("menuCard").addEventListener("mouseleave",()=>{
        displaymenu.innerHTML = ``
    })
})
home.addEventListener("mouseover", () => {
    displaymenu.innerHTML =
        `
    <div id="menuCard" data-left="42%">
      <ul>
        <li>Topware</li>
        <li>T-shirt</li>
        <li>Casual Shirts</li>
        <li>Sweaters</li>
        <li>Suits</li>
      </ul>
      <ul>
        <li>Topware</li>
        <li>T-shirt</li>
        <li>Casual Shirts</li>
        <li>Sweaters</li>
        <li>Suits</li>
      </ul>
      <ul>
        <li>Topware</li>
        <li>T-shirt</li>
        <li>Casual Shirts</li>
        <li>Sweaters</li>
        <li>Suits</li>
      </ul>
    </div>
    `
    menuCard.style.setProperty("--left", menuCard.dataset.left);
    document.getElementById("menuCard").addEventListener("mouseleave",()=>{
        displaymenu.innerHTML = ``
    })
})
document.body.addEventListener("click", (e) => {
  // if click is outside nav or menu, then close
  if (!e.target.closest("nav") && !e.target.closest(".menu")) {
    displaymenu.innerHTML = "";
  }
});


const loginBox = document.getElementById("loginBox");
const registerBox = document.getElementById("registerBox");

const openRegister = document.getElementById("openRegister");
const openLogin = document.getElementById("openLogin");

profile.addEventListener("click", () => {
  profileCnt.style.display = "block";
});

profile_close.addEventListener("click", () => {
  profileCnt.style.display = "none";
});

// Switch to Register
openRegister.addEventListener("click", () => {
  loginBox.style.display = "none";
  registerBox.style.display = "block";
});

// Switch back to Login
openLogin.addEventListener("click", () => {
  registerBox.style.display = "none";
  loginBox.style.display = "block";
});