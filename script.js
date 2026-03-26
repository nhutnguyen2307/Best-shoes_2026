// đổi ảnh
function changeImg(el) {
    document.getElementById("mainImg").src = el.src;
}

// chọn size
function selectSize(el) {
    document.querySelectorAll(".sizes span").forEach(s => s.classList.remove("active"));
    el.classList.add("active");
}

// tăng giảm số lượng
let qty = 1;

function increase() {
    qty++;
    document.getElementById("qty").innerText = qty;
}

function decrease() {
    if (qty > 1) qty--;
    document.getElementById("qty").innerText = qty;
}

// countdown
let endDate = new Date().getTime() + 2 * 24 * 60 * 60 * 1000;

setInterval(() => {
    let now = new Date().getTime();
    let distance = endDate - now;

    let d = Math.floor(distance / (1000 * 60 * 60 * 24));
    let h = Math.floor((distance / (1000 * 60 * 60)) % 24);
    let m = Math.floor((distance / (1000 * 60)) % 60);
    let s = Math.floor((distance / 1000) % 60);

    document.getElementById("day").innerText = d;
    document.getElementById("hour").innerText = h;
    document.getElementById("min").innerText = m;
    document.getElementById("sec").innerText = s;
}, 1000);