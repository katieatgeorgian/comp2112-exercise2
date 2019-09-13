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
