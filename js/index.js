window.onload = function() {
    const btn = document.querySelector('.toggel')
    btn.addEventListener('click', function() {
        const menu = document.querySelector('.menu')
        menu.classList.toggle('toggel-menu')
    })

}