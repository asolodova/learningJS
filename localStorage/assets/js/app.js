const tweetList = document.getElementById('tweet-list');


eventListeners();

// Event Listeners
function eventListeners(){
    // Form submission
    document.querySelector('#form').addEventListener('submit', newTweet);

    // Remove tweet from the list
    tweetList.addEventListener('click', removeTweet);

    // document
    document.addEventListener('DOMContentLoaded', localStorageOnLoad)

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

    // Print the alert
    alert('Tweet added');
    this.reset();
}

// Remove the tweets from the DOM
function removeTweet(e){
    if(e.target.classList.contains('remove-tweet')){
        e.target.parentElement.remove();
    }
    // Remove from Storage
    removeTweetLocalStorage(e.target.parentElement.textContent);
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

function localStorageOnLoad() {
    let tweets = getTweetsFromStorage();
    tweets.forEach(function (tweet) {

        const removeBtn = document.createElement('a');
        removeBtn.classList = 'remove-tweet';
        removeBtn.textContent = 'X';

        // Create an <li> element
        const li = document.createElement('li');
        li.textContent = tweet;
        tweetList.appendChild(li);

        // Add the remove button to each tweet
        li.appendChild(removeBtn);

        // Add to the list
        tweetList.appendChild(li);
    })
}

// Removes the tweet from localStorage

function removeTweetLocalStorage(tweet) {
    let tweets = getTweetsFromStorage();
    // Remove the X from the tweet
    const tweetDelete = tweet.substring(0, tweet.length - 1);
    console.log(tweetDelete);

    // Loop
    tweets.forEach(function (tweetLS, index) {
        if(tweetDelete === tweetLS){
            tweets.splice(index, 1)
            }
    });
    // Save the data
    localStorage.setItem('tweets', JSON.stringify(tweets));
    alert('Tweet deleted');

}