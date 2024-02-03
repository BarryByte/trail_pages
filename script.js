

function createDiv(text, index) {
  const div = `
            <div class="interact">
                <div class="components">
                    <img class="p-img" src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/031/original/profile_image.png?1706888739">
                    <div class="user">
                        <div class="user-1">
                            <p class="username">@mainsh</p>
                            <div class="edit">
                                <button class="transparent-button" id="edit_${index}">
                                    <img id="delete_${index}" src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/028/original/edit.png?1706888661">
                                </button>
                                <button class="transparent-button" onclick="deletePost(${index})">
                                    <img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/027/original/delete.png?1706888643">
                                </button>
                            </div>
                        </div>
                        <textarea class="right-input" placeholder="Type">${text}</textarea>
                        <button class="transparent-button">
                            <div class="interact-icons">
                                <img id="comment" src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/026/original/comment.png?1706888619">
                                <img id="like" src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/029/original/heart.png?1706888679">
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        `;
  return div;
}

document.addEventListener("DOMContentLoaded", function () {
  const dataOfLocalStorage = localStorage.getItem("feed");
  const feed_arr = JSON.parse(dataOfLocalStorage);
  basicContent(feed_arr);

  const text = document.getElementById("text-area");
  text.addEventListener("input", (e) => {
    var length = e.target.value.length;
    document.getElementById("text_count").innerHTML = ${length}/100;
  });

  const post_button = document.getElementById("post_button");

  post_button.addEventListener("click", (e) => {
    const text_of_post = text.value;
    text.value = "";
    feed_arr.push(text_of_post);
    localStorage.setItem("feed", JSON.stringify(feed_arr));
    const div_elem = createDiv(text_of_post, feed_arr.length - 1);
    document.querySelector(".right-main").innerHTML += div_elem;
  });
});

function deletePost(index) {
  const dataOfLocalStorage = localStorage.getItem("feed");
  const feed_arr = JSON.parse(dataOfLocalStorage);
  feed_arr.splice(index, 1);
  localStorage.setItem("feed", JSON.stringify(feed_arr));
  basicContent(feed_arr);
}
