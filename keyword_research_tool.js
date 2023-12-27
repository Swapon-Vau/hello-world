function performKeywordResearch() {
    var keywordInput = document.getElementById("keywords");
    var keyword = keywordInput.value.trim();

    if (keyword.length === 0) {
        alert("Please enter a keyword.");
        return;
    }

    var multipleVariationsCheckbox = document.getElementById("multipleVariations");
    var generateMultipleVariations = multipleVariationsCheckbox.checked;

    var keywordVariations = [keyword];
    if (generateMultipleVariations) {
        keywordVariations.push(keyword + "s");
        keywordVariations.push(keyword + "ing");
        keywordVariations.push(keyword + "ed");
    }

    keywordInput.value = "";

    var resultsContainer = document.getElementById("results");
    resultsContainer.innerHTML = "";

    var commonCpcRate = getRandomNumber(0.5, 5.0).toFixed(2);

    keywordVariations.forEach(function (variation) {
        var randomKeyword = getRandomKeyword();
        var searchVolume = getRandomNumber(100, 1000);

        var keywordResult = document.createElement("p");
        keywordResult.innerText = "Keyword: " + variation + ", Random Suggestion: " + randomKeyword + ", Search Volume: " + searchVolume + ", CPC Rate: $" + commonCpcRate;

        resultsContainer.appendChild(keywordResult);
    });
}

function getRandomKeyword() {
    var randomKeywords = ["technology", "travel", "health", "coding", "nature"];
    var randomIndex = Math.floor(Math.random() * randomKeywords.length);
    return randomKeywords[randomIndex];
}

function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}
