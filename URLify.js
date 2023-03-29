function urlify(blogTitle) {
	const punctuation = /[.,/#!$%^&*;:{}=!\-_`~()'"]/g;
	
	const blogTitleWithoutPunctuation = blogTitle.replace(punctuation, "");
    //The string method replaceAll doesn't work on google chrome.
    return blogTitleWithoutPunctuation.toLowerCase().trim().replaceAll(" ", "-");
}

console.log(urlify("How I Got Into Programming!!!"));
console.log(urlify("I've got a new job :)"));