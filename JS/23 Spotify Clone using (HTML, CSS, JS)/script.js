// console.log("Now writing JS");

let currentSong = new Audio();
let songs;
let currfolder


function secondsToMinutesSeconds(seconds) {
    if (isNaN(seconds) || seconds < 0) {
        return "invalid input";
    }

    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(remainingSeconds).padStart(2, "0");

    return `${formattedMinutes}:${formattedSeconds}`;
}

function isAudioPlaying(audio) {
    return !audio.paused && !audio.ended && audio.readyState > 2;
}

const playMusic = (track, pause = false) => {
    // let audio = new Audio("/Songs/" + track);
    currentSong.src = `/${currfolder}/` + track;
    document.querySelector(".songTime").innerHTML = "00:00 / 00:00";
    if (!pause) {
        currentSong.play();
        play.src = "Image/pause.svg";
    }
    currentSong.volume = 0.20;
    document.querySelector(".songName").innerHTML = decodeURI(track);

    // Attach event listener to timeout of songs
    currentSong.addEventListener("timeupdate", () => {
        document.querySelector(".songTime").innerHTML = `${secondsToMinutesSeconds(currentSong.currentTime)} / ${secondsToMinutesSeconds(currentSong.duration)}`;
        document.querySelector(".circle").style.left = (currentSong.currentTime / currentSong.duration) * 100 + "%";
    })
}

async function getSongs(folder) {
    currfolder = folder;
    let a = await fetch(`http://127.0.0.1:3000/${currfolder}/`);
    let response = await a.text();
    // console.log(response);
    let div = document.createElement("div");
    div.innerHTML = response;
    let as = div.getElementsByTagName("a");
    songs = [];
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".mp3")) {
            songs.push(element.href.split(`/${currfolder}/`)[1]);
        }
    }


    // Listing all songs in library
    let songUL = document.querySelector(".songList").getElementsByTagName("ul")[0];
    songUL.innerHTML = "";
    console.log(songUL);
    for (const song of songs) {
        songUL.innerHTML = songUL.innerHTML + `<li>
                                <div class="left-part">
                                    <img class="invert" src="Image/music.svg" alt="music">
                                    <div class="infoSong">
                                        <p>${song.replaceAll("%20", " ")}</p>
                                    </div>
                                </div>
                                <div class="right-part">
                                    <p>Play</p>
                                    <div>
                                    <img class="invert" src="Image/play.svg" alt="play">
                                    </div>
                                </div></li>`;
    }

    if (!isAudioPlaying(currentSong)) {
        playMusic(songs[0], true);
    }

    // Attach event listener to each song
    Array.from(document.querySelector(".songList").getElementsByTagName("li")).forEach(e => {
        e.addEventListener("click", (element) => {
            console.log(e.querySelector(".infoSong").firstElementChild.innerHTML);
            playMusic(e.querySelector(".infoSong").firstElementChild.innerHTML);
        })
    })

}

async function DisplayAlbums() {
    let Folder;
    let cardContainer = document.querySelector(".cardContainer");
    let a = await fetch(`http://127.0.0.1:3000/Songs/`);
    let response = await a.text();
    // console.log(response);
    let div = document.createElement("div");
    div.innerHTML = response;
    let anchors = div.getElementsByTagName("a");
    let array = Array.from(anchors);
    for (let index = 0; index < array.length; index++) {
        const e = array[index];
        if (e.href.includes("/Songs")) {
            Folder = e.href.split("/").slice(-2)[0];
            let a = await fetch(`http://127.0.0.1:3000/Songs/${Folder}/info.json`);
            let response = await a.json();
            cardContainer.innerHTML += `<div data-folder="${Folder}" class="card radius">
                        <img src="Songs/${Folder}/cover.jpg" alt="cover">
                        <div class="content-in-card">
                            <h2>${response.title}</h2>
                            <p>${response.description}</p>
                        </div>
                    </div>`;
        }
    }


}

async function main() {

    await DisplayAlbums();

    // Loading songs dynamically by clicking on card
    Array.from(document.getElementsByClassName("card")).forEach(e => {
        e.addEventListener("click", async (items) => {
            console.log(items.currentTarget.dataset);
            await getSongs(`Songs/${items.currentTarget.dataset.folder}`);
        })
    })

    // Attach event listener to play..
    play.addEventListener("click", () => {
        if (currentSong.paused) {
            currentSong.play();
            play.src = "Image/pause.svg";
        }
        else {
            currentSong.pause();
            play.src = "Image/play.svg";
        }
    })

    // Attach event listener to seekbar
    document.querySelector(".seekbar").addEventListener("click", (e) => {
        let percent = (e.offsetX / e.target.getBoundingClientRect().width) * 100;
        document.querySelector(".circle").style.left = percent + "%";
        currentSong.currentTime = (currentSong.duration * percent) / 100;
    })

    // Attach event listener to hamburger
    document.querySelector(".hamburger").addEventListener("click", () => {
        document.querySelector(".left").style.left = "0%";
    })

    // Attach event listener to close hamburger
    document.querySelector(".closing").addEventListener("click", () => {
        document.querySelector(".left").style.left = "-100%";
    })

    // Attach event listener to close hamburger when clicked on right part
    document.querySelector(".spotifyPlaylists").addEventListener("click", () => {
        document.querySelector(".left").style.left = "-100%";
    })

    // Attach event listener to previous button
    previous.addEventListener("click", () => {
        let index = songs.indexOf(currentSong.src.split("/").slice(-1)[0]);
        // console.log(index);
        if ((index - 1) >= 0) {
            playMusic(songs[index - 1]);
        }
        else if ((index - 1) == -1) {
            index = songs.length - 1;
            // console.log(index);
            playMusic(songs[index]);
        }
    })

    // Attach event listener to next button
    next.addEventListener("click", () => {
        let index = songs.indexOf(currentSong.src.split("/").slice(-1)[0]);
        // console.log(index);
        if ((index + 1) < songs.length) {
            playMusic(songs[index + 1]);
        }
        else if ((index + 1) == songs.length) {
            index = 0;
            // console.log(index);
            playMusic(songs[index]);
        }
    })

    // Attach event listener to volume
    rangevolume.addEventListener("change", (e) => {
        currentSong.volume = parseInt(e.target.value) / 100;
    })

}

main();