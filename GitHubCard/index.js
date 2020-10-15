import axios from 'axios';
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
axios
	.get('https://api.github.com/users/MattBokovitz1')
	.then((res) => {
		console.log(res);
	})
	.catch((drama) => {
		console.log(drama);
	});

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
@@ -16,6 +25,25 @@
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/
const entry = document.querySelector('.cards');
axios
	.get('https://api.github.com/users/MattBokovitz1')
	.then((res) => {
		const userCard = cardMaker({
			avatar_url: res.data.avatar_url,
			name: res.data.name,
			login: res.data.login,
			location: res.data.location,
			html_url: res.data.html_url,
			followers: res.data.followers,
			following: res.data.following,
			bio: res.data.bio,
		});
		entry.append(userCard);
	})
	.catch((err) => {
		console.log(err);
	});

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
@@ -28,7 +56,33 @@
    user, and adding that card to the DOM.
*/


const followersArray = [
	'tetondan',
	'dustinmyers',
	'justsml',
	'luishrd',
  'bigknell',
  'yirano',
  'yvette-luong',
  'MorganWilliamson'
];
followersArray.forEach((i) => {
	axios
		.get(`https://api.github.com/users/${i}`)
		.then((res) => {
			const userCard = cardMaker({
				avatar_url: res.data.avatar_url,
				name: res.data.name,
				login: res.data.login,
				location: res.data.location,
				html_url: res.data.html_url,
				followers: res.data.followers,
				following: res.data.following,
				bio: res.data.bio,
			});
			entry.append(userCard);
		})
		.catch((err) => {
			console.log(err);
		});
});

/*
  STEP 3: Create a function that accepts a single object as its only argument.
@@ -49,6 +103,73 @@ const followersArray = [];
      </div>
    </div>
*/
function cardMaker({
	avatar_url,
	name,
	login,
	location,
	html_url,
	followers,
	following,
	bio,
}) {
	//instantiate elements of card
	const card = document.createElement('div');
	const avatar = document.createElement('img');
	const cardInfo = document.createElement('div');
	const endName = document.createElement('h3');
	const username = document.createElement('p');
	const endLocation = document.createElement('p');
	const profile = document.createElement('p');
	const profileLink = document.createElement('a');
	const endFollowers = document.createElement('p');
	const endFollowing = document.createElement('p');
	const endBio = document.createElement('p');

	//structure
	card.append(avatar);
	card.append(cardInfo);
	cardInfo.append(endName);
	cardInfo.append(username);
	cardInfo.append(endLocation);
	cardInfo.append(profile);
	profile.append(profileLink);
	cardInfo.append(endFollowers);
	cardInfo.append(endFollowing);
	cardInfo.append(endBio);

	//class names
	card.classList.add('card');
	cardInfo.classList.add('card-info');
	endName.classList.add('name');
	username.classList.add('username');

	//text content
	avatar.src = avatar_url;
	endName.textContent = name;
	username.textContent = login;
	endLocation.textContent = `location: ${location}`;
	profileLink.textContent = `URL: ${html_url}`;
	endFollowers.textContent = `followers: ${followers}`;
	endFollowing.textContent = `following: ${following}`; 
	endBio.textContent = bio;

	//return
	return card;
}


/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
