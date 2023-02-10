let tools = document.getElementById("tools"),
      toggleButton = tools.querySelector(".toggle-button");

      toggleButton.addEventListener("click" , () => {
        tools.classList.toggle("open");
    });

let contentContainer = document.querySelector(".content-container")
      contentContainer.onclick = (event) => {
      if(!event.target.matches(".tools")){
        if(tools.classList.contains("open")){
      tools.classList.remove("open")
        }
      }
    }

let initialX = 0,
    initialY = 0;
let moveElement = false;

let events = {
    mouse: {
        down: "mousedown",
        move: "mousemove",
        up: "mouseup",
    },
    touch: {
        down: "touchstart",
        move: "touchmove",
        up: "touchend",
    },
};

let deviceType = "";

const isTouchDevice = () => {
    try{
        document.createEvent("TouchEvent");
        deviceType = "touch";
        return true;
    }
    catch(e){
        deviceType = "mouse";
        return false;
    }
};

isTouchDevice(); 

tools.addEventListener(events[deviceType].down,(e) => {
    initialX = !isTouchDevice() ? e.clientX : e.touches[0].clientX;
    initialY = !isTouchDevice() ? e.clientY : e.touches[0].clientY;

    moveElement = true;
});

tools.addEventListener(events[deviceType].move,(e) => {
    if(moveElement) {
        e.preventDefault();
        let newX = !isTouchDevice() ? e.clientX : e.touches[0].clientX;
        let newY = !isTouchDevice() ? e.clientY : e.touches[0].clientY;
        tools.style.top = tools.offsetTop - (initialY - newY) + "px";
        tools.style.left = tools.offsetLeft - (initialX - newX) + "px";
        initialX = newX;
        initialY = newY;
    }
});

tools.addEventListener(events[deviceType].up,(stopMovement = (e) => {
    moveElement = false;
})); 

tools.addEventListener("mouseleave",stopMovement);
tools.addEventListener(events[deviceType].up,(e) => {
    moveElement = false;
});