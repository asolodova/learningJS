const tweetList = document.getElementById('tweet-list');


eventListeners();

// Event Listeners
function eventListeners(){
    // Form submission
    document.querySelector('#form').addEventListener('submit', newTweet);

    // Remove tweet from the list
    tweetList.addEventListener('click', removeTweet);

}

// Functions

function newTweet(e){
    e.preventDefault();
    // Read the textarea value
    const tweet = document.getElementById('tweet').value;

    // Create the remove button
    const removeBtn = document.createElement('a');
    removeBtn.classList = 'remove-tweet';
    removeBtn.textContent = ' X';

    // Create an <li> element
    const li = document.createElement('li');
    li.textContent = tweet;
    tweetList.appendChild(li);

    // Add the remove button to each tweet
    li.appendChild(removeBtn);

    // Add to the list
    tweetList.appendChild(li);
    // Add tweet to localStorage
    addTweetLocalStorage(tweet);

}

// Remove the tweets from the DOM
function removeTweet(e){
    if(e.target.classList.contains('remove-tweet')){
        e.target.parentElement.remove();
    }
}

// Adds tweets to localStorage
function addTweetLocalStorage(tweet) {
    let tweets = getTweetsFromStorage();

    //Add the tweet into the array
    tweets.push(tweet);

    // Converrt tweet array into String
    localStorage.setItem('tweets', JSON.stringify(tweets));
}
function getTweetsFromStorage() {
    let tweets;
    const tweetsLS = localStorage.getItem('tweets');
    if ( tweetsLS === null){
        tweets = [];
    } else{
        tweets = JSON.parse(tweetsLS);
    }
    return tweets;
}