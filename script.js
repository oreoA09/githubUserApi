'use strict'

function getRepos(username) {
	fetch(`https://api.github.com/users/${username}/repos`)//${}is a template string
		.then(response => response.json())
		.then(responseJson => displayRepos(responseJson));
}

function displayRepos(responseJson) {
	console.log(responseJson)
	//reads the data from the fetch and creates an html
	$("#results").html("")//clears the results div
	responseJson.forEach(item => {//loops thru the arr
		$("#results").append(`
    <div class="resultsrow p-4"><h3><a href="${item.html_url}">${item.full_name}</a></h3> <h6>Forks: ${item.forks}</h6></div>
    `)//appends image to results div
	})
}

function watchForm() {
	$('#form').submit(event => {
		event.preventDefault();
		const username = event.target.username.value
		// console.log(username);
		getRepos(username);
	});
}

$(function() {
	console.log('App loaded! Waiting for submit!');
	watchForm();
});
