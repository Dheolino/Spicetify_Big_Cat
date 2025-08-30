const style = document.createElement("style");
style.textContent = `
.btn {
}
`;
document.head.appendChild(style);
//canvasVideoContainerNPV

function waitForElement(selector, callback) {
    const el = document.querySelector(selector);
    if (el) return callback(el);

    const observer = new MutationObserver(() => {
        const el = document.querySelector(selector);
        if (el) {
            observer.disconnect();
            callback(el);
        }
    });

    observer.observe(document.body, { childList: true, subtree: true });
}

let changedImg: boolean = false;

const button = new Spicetify.Topbar.Button("Hello", "download", () => {
    if (!changedImg) {
	waitForElement("#catjam-webm", (cat) => {
	    console.log(cat);
	    cat.style.display = "none";
	    cat.id = "catjam-webm_old";
	    changedImg = true;
	});
	let vid = document.getElementsByClassName("main-nowPlayingView-coverArtContainer")[0];
	console.log(vid);
	vid.innerHTML = '<video loop="true" style="position: relative; scale: 1.2; top: 10%" autoplay="true" muted="true" src="https://github.com/BlafKing/spicetify-cat-jam-synced/raw/main/src/resources/catjam.webm" id="catjam-webm" class="big-cat"></video>';
    } else {
	Spicetify.showNotification("Lade Spotify neu mit: Ctrl + Shift + R");
    }	
});

let btn = button.element.children[0];
let catSvg = btn.children[0];
catSvg.setAttribute("height", "32");
catSvg.setAttribute("width", "32");
catSvg.style.transform = "rotate(180deg)";

console.log("CatSVG: ", catSvg);

button.element.classList.add("btn");
button.disabled = false;
