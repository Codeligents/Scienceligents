let colorIcons = document.querySelector(".color-icon"),
icons = document.querySelector(".color-icon .icons");

icons.addEventListener("click" , () => {
  colorIcons.classList.toggle("open");
})

let content = document.querySelector(".content")
content.onclick = (event) => {
  if(!event.target.matches(".color-icon")){
    if(colorIcons.classList.contains("open")){
      colorIcons.classList.remove("open")
    }
  }
}

let buttons = document.querySelectorAll(".button");

for (var button of buttons) {
  button.addEventListener("click", (e) => { //Click event
    let target = e.target;

    let open = document.querySelector(".open");
    if(open) open.classList.remove("open");

    document.querySelector(".active").classList.remove("active");
    target.classList.add("active");

    // Switch colors
    let root = document.querySelector(":root");
    let dataColor = target.getAttribute("data-color");
    let color = dataColor.split(" ");

    root.style.setProperty("--white-color", color[0]);
    root.style.setProperty("--primary-color", color[1]);
    root.style.setProperty("--primary-color-hover", color[2]);
    root.style.setProperty("--background", color[3]);
    root.style.setProperty("--input-background", color[4]);
    root.style.setProperty("--input-border", color[5]);
    root.style.setProperty("--transparent-background", color[6]);
    // root.style.setProperty("--animation", color[7]);

    let iconName = target.className.split(" ")[2];


    if(target.classList.contains("bxs-moon")){
      target.classList.replace(iconName, "bxs-sun")
      colorIcons.style.display = "none";
    }else if (target.classList.contains("bxs-sun")) {
      target.classList.replace("bxs-sun", "bxs-moon");
      colorIcons.style.display = "block";
      document.querySelector(".button.black").click();
    }

  });
}
