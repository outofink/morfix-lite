var query = document.getElementById("search")

query.addEventListener('input', function (e) {
    if(containsEnglish(query.value)) {
        query.className = "mdl-textfield__input text-eng"
    }
    else {
        query.className = "mdl-textfield__input text-heb"
    }
}, false);

containsEnglish = function (text) {
    if (!text) return false
    return text.match(/^[a-zA-Z0-9]*$/)
}
