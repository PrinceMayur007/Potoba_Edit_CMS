// fixed navbar when we scroll down it gets a shadow.
let nav = document.querySelector(".navigation-wrap");
window.onscroll = function () {
    if (document.documentElement.scrollTop > 1) {
        nav.classList.add("scroll-on");
    } else {
        nav.classList.remove("scroll-on");
    }
}

//navbar hide when cliked on sm, md devices
let menuItems = document.querySelectorAll(".nav-item");
let navCollapse = document.querySelector('.navbar-collapse');
menuItems.forEach(element =>{
    element.addEventListener("click",()=>{
        navCollapse.classList.remove("show");
    })
})
// counter design

document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration) {
        let obj = document.getElementById(id),
            current = start,
            range = end - start,
            increment = end > start ? 1 : -1,
            step = Math.abs(Math.floor(duration / range)),
            timer = setInterval(() => {
                current += increment;
                obj.textContent = current;
                if (current == end) {
                    clearInterval(timer);
                }
            }, step);
    }
    counter("count1", 0, 4367, 3000);
    counter("count2", 100, 6351, 2500);
    counter("count3", 0, 6789, 2000);
    counter("count4", 0, 1271, 3000);
});