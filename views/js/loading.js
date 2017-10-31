function loading() {
    var cards = document.getElementsByClassName("card")
    for(var i = 0; i < cards.length; i++){
        cards[i].style.display = "none"
    }

    var title = document.getElementById("title")
    var query = document.getElementById("search")
    title.innerHTML = query.value

    query.blur()

    var searchbar = document.getElementById("searchbar")
    searchbar.className = "mdl-textfield mdl-js-textfield mdl-textfield--expandable mdl-textfield--floating-label is-upgraded"

    var loadingicon = document.getElementById("spinner")
    loadingicon.style = ""
}
