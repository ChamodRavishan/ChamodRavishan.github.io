document.getElementById("showProfile").addEventListener("click", () => {
document.getElementById('short').style.display='block';
document.getElementById('long').style.display='none';
document.getElementById('wide').style.display='none';
})

document.getElementById("showBlog").addEventListener("click", () => {
document.getElementById('short').style.display='none';
document.getElementById('long').style.display='block';
document.getElementById('wide').style.display='none';
})

document.getElementById("showBlog2").addEventListener("click", () => {
document.getElementById('short').style.display='none';
document.getElementById('long').style.display='none';
document.getElementById('wide').style.display='block';
})


