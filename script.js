function OpenSlide() {
     document.querySelector('.DashboardNav').classList.toggle("OpenSlide");
}

const NoneParentMenu = document.querySelectorAll(".navLink");
console.log(NoneParentMenu)


if (document.body.clientWidth <= 992) {
     NoneParentMenu.forEach(function (eTargets) {
          eTargets.addEventListener('click', function (e) {
            e.target.parentElement.parentElement.parentElement.parentElement.classList.toggle("OpenSlide")
          })
     })
}



const breadCrum_Date = document.querySelector('.breadCrum_Date ');
breadCrum_Date.innerHTML = new Date().toDateString();