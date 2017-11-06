document.getElementById("main").addEventListener('click', function(e) {
    if (e.target.tagName !== "H3" && e.target.tagName !== "MAIN") return    
    var query = document.getElementById("search")
    query.focus()
});
