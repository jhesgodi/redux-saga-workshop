const GITHUB_URL = 'https://api.github.com';
const USER_PATH = '/users';
const REPOS_PATH = '/repos';
const MAX_USER = 20000000;

function resp2JSON(response) {
	return response.json();
}

function getJSON(url) {
	return fetch(url).then(resp2JSON);
}

function getRandomNumber(max) {
	return Math.floor(Math.random()*max);
}

export function getUsersList() {
	return getJSON(`${GITHUB_URL}${USER_PATH}?since=${getRandomNumber(MAX_USER)}`);
}

export function getUserReposList(user) {
	return getJSON(`${GITHUB_URL}${USER_PATH}/${user}${REPOS_PATH}`);
}
