function Card(title, cName, views, monthsOld, duration) {
    let viewStr;
    if (views < 1000) {
        viewStr = views;
    }
    else if (views >= 1000000) {
        viewStr = views / 1000000 + "M";
    }
    else {
        viewStr = views / 1000 + "K";
    }
    let html = `<div class="card">
            <div class="image">
                <img src="thumbnail.webp" alt="">
                <div class="duration_video">${duration}</div>
            </div>
            <div class="content">
                <div class="title">${title}</div>
                <div class="details">
                    <p>${cName} . ${viewStr} views . ${monthsOld} months ago</p>
                </div>
            </div>
        </div>`;
    document.querySelector(".container").innerHTML += html;
}

Card("JavaScript Exercise 13 - Solution & Shoutouts | Sigma Web Development Course - Tutorial #77", "CodeWithFadi", 100000000, 2, "32:01");
Card("JavaScript Exercise 13 - Solution & Shoutouts | Sigma Web Development Course - Tutorial #78", "CodeWithFadi", 100000000, 2, "32:01");
Card("JavaScript Exercise 13 - Solution & Shoutouts | Sigma Web Development Course - Tutorial #78", "CodeWithFadi", 100000000, 2, "32:01");
Card("JavaScript Exercise 13 - Solution & Shoutouts | Sigma Web Development Course - Tutorial #78", "CodeWithFadi", 100000000, 2, "32:01");
Card("JavaScript Exercise 13 - Solution & Shoutouts | Sigma Web Development Course - Tutorial #78", "CodeWithFadi", 100000000, 2, "32:01");
Card("JavaScript Exercise 13 - Solution & Shoutouts | Sigma Web Development Course - Tutorial #78", "CodeWithFadi", 100000000, 2, "32:01");