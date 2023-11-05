function searchText() {
    const text = document.getElementById("textInput").value;
    const searchLetters = document.getElementById("searchInput").value;

    var regex = new RegExp(searchLetters, "g");
    var matches = text.match(regex);
    let counter = matches ? matches.length : 0;

    var resultsDiv = document.getElementById("results");
    
    if (matches) {
        resultsDiv.innerHTML = `Збігів знайдено ${counter}: ` + matches.join(", ");
    } else {
        resultsDiv.innerHTML = "Збігів не знайдено.";
    }
}