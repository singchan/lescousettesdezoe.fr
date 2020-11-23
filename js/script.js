

    window.silex = window.silex || {}
    window.silex.data = {"site":{"width":1277},"pages":[{"id":"page-home","displayName":"home","link":{"linkType":"LinkTypePage","href":"#!page-home"},"canDelete":true,"canProperties":true,"canMove":true,"canRename":true,"opened":false},{"id":"page-product","displayName":"product","link":{"linkType":"LinkTypePage","href":"#!page-product"},"canDelete":true,"canRename":true,"canMove":true,"canProperties":true,"opened":false},{"id":"page-tag","displayName":"tag","link":{"linkType":"LinkTypePage","href":"#!page-tag"},"canDelete":true,"canRename":true,"canMove":true,"canProperties":true,"opened":false},{"id":"page-commander","displayName":"commander","link":{"linkType":"LinkTypePage","href":"#!page-commander"},"canDelete":true,"canRename":true,"canMove":true,"canProperties":true,"opened":false},{"id":"page-qui","displayName":"qui","link":{"linkType":"LinkTypePage","href":"#!page-qui"},"canDelete":true,"canRename":true,"canMove":true,"canProperties":true,"opened":false},{"id":"page-default","displayName":"default","link":{"linkType":"LinkTypePage","href":"#!page-default"},"canDelete":true,"canRename":true,"canMove":true,"canProperties":true,"opened":false},{"id":"page-404","displayName":"404","link":{"linkType":"LinkTypePage","href":"#!page-404"},"canDelete":true,"canRename":true,"canMove":true,"canProperties":true,"opened":false}]}
$(function() {
    var bar = document.querySelector('.bar')

    // bar position at the bottom of the screen even when scaled down by silex
    function updateBar() {
        var barHeight = $(bar).height() * silex.scale
        var winHeight = window.innerHeight
        bar.style.top = ((winHeight - barHeight) / silex.scale) + "px"
    }
    updateBar()
    $(window).resize(updateBar)

    // open / close the bar
    var LS_KEY = 'accepted-cookies'
    try {
        var accepted = localStorage.getItem(LS_KEY)
        if (accepted) bar.style.display = 'none'
        $('.bar').click(function() {
            localStorage.setItem(LS_KEY, 'true')
            bar.style.display = 'none'
        })
    } catch(e) {}
})