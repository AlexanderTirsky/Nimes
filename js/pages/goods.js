

async function getGoods() {
    const url = "http://109.71.242.174/greeting";

    const res = await fetch(url, {
    method: "GET",
    });

    const data = await res.text();

    console.log(data);
    alert(data);
}

async function init() {
    getGoods();
}

document.addEventListener("DOMContentLoaded", init);