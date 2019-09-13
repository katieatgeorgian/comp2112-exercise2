// STEP 1 - Change your avatar URL here
const AVATAR_URL = "https://avatars0.githubusercontent.com/u/47111708?v=4";
const my_avatar = document.querySelectorAll(".my_avatar");
my_avatar.forEach(img => (img.src = AVATAR_URL));

// STEP 2 - Declare constant imgGifPoll
const imgGifPoll = document.querySelector("#imgGifPoll");

// STEP 4 - Create a function called handleFileSelect
function handleFileSelect(e) {
  e.preventDefault();
  const reader = new FileReader(); //helps read file

  reader.addEventListener("load", e => {
    console.log(e.target.result);
    imgGifPoll.innerHTML = `<img class="thumb" src="${e.target.result}" style="width:100%">`;
  });
  //Read the image file as a data url base64
  reader.readAsDataURL(e.target.files[0]);
}

// STEP 3 - Add a change event listener to #uploadPic
document
  .querySelector("#uploadPic")
  .addEventListener("change", handleFileSelect);

// STEP 5 - Submit hosted url in Blackboard

let tweets = [];
const btn = document.getElementById("tweet");

function tweeting(e) {
  e.preventDefault();
  let tweet = {};
  let tweetText = document.getElementById("textarea").value;
  let tweetImg = document.querySelector(".thumb").src;
  tweet.tweet = tweetText;
  tweet.image = tweetImg;

  tweets.unshift(tweet);
  display(tweets);
  document.getElementById("textarea").value = "";
  document.querySelector(".thumb").src = "";
}

function display(tweets) {
  let newTweet = tweets
    .map(function(tweet) {
      //callback function
      return `
        <div class="form-group">
              <hr />
              <div class="column">
                <div class="fb-start">
                    <img
                    id="avatar"
                    src="https://instagram.fyyz1-1.fna.fbcdn.net/vp/e75c368a6e9624ff872ba315fac50e72/5DF17A92/t51.2885-19/11410505_833412053410486_294445979_a.jpg?_nc_ht=instagram.fyyz1-1.fna.fbcdn.net"
                    alt=""
                    />
                    <p class="h6 pt-1">Katie H.</p>
                    <a  href="#" class="username pl-2">@katieatgeorgian</a>
                </div>
                <div>
                    <p class="tweetText">${tweet.tweet} </p>
                    <img src="${tweet.image}" class="tweetImage">
                </div>
                <div class="fb tweetText">
                    <section>
                        <div id="inserts" class="btn-group mr-2">
                            <button
                            type="button"
                            class="btn btn-secondary mdi mdi-comment-outline"
                            aria-label="Reply"
                            ></button>
                            <button
                            type="button"
                            class="btn btn-secondary mdi mdi-twitter-retweet"
                            aria-label="Retweet"
                            ></button>
                            <button
                            type="button"
                            class="btn btn-secondary mdi mdi-heart-outline"
                            aria-label="Like"
                            style=""
                            ></button>
                            <button
                            type="button"
                            class="btn btn-secondary mdi mdi-upload"
                            aria-label="Share tweet"
                            ></button>
                        </div>
                    </section>
                </div>
              </div>
              
              
            </div>`;
    })
    .join("");

  const main = document.querySelector("main");
  main.innerHTML = newTweet;
}
btn.addEventListener("click", tweeting);
