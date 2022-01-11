const BASE_API = "https://graph.instagram.com/me";
const ACCESS_TOKEN ="IGQVJVMTBNbE1HMHQ3c2ZAWYWxHTV9FNnpRNHVyRS10ODFtdkx3UEJ4SXo0Wkg1c3JSaFo4OWQ5R0cyMW5PSW85VkcxdS1OMzF3cnJqMnBWbWpRY3pycDVVaEJkYkF1RXozRnBNaUxWSnh3ZAjRqTVRhT0huR1h5UWstNnRJ";

const username = document.getElementById("username");
const posts = document.getElementById("posts");
const photos = document.getElementById("photos");

const getUserInfo = async() => {
  const response = await fetch(`${BASE_API}?fields=username,media_count&access_token=${ACCESS_TOKEN}`);
      const userInfo = await response.json();
      username.innerHTML = userInfo.username;
      posts.innerHTML = userInfo.media_count;
      return userInfo;
}
getUserInfo();

const getUserMediaInfo = async() => {
  const response = await fetch(`${BASE_API}/media?fields=media_url,media_type&access_token=${ACCESS_TOKEN}`);
      const userMediaInfo = await response.json();
      return userMediaInfo;
}

getUserMediaInfo().then((media) => {
  media.data.map((mediaInfo) => {
    if(mediaInfo.media_type !== 'VIDEO') {
      const img = document.createElement("img");
      img.style.width = "100px";
      img.style.filter = "blur(2px)";
      img.src = mediaInfo.media_url;
      photos.appendChild(img);
    }
  });
});

const like = () => {
  let icon = document.getElementById('like');
  icon.classList.toggle("liked-button");
}

const rotate = () => {
  let settingIcon = document.getElementById("settings-icon");
  settingIcon.classList.toggle("rotate");
}