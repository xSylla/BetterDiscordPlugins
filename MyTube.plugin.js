//META{"name":"youtube", "source": "https://github.com/xSylla/BetterDiscord/blob/master/MyTube.plugin.js"}*//
const { shell } = require('electron');
class youtube {
    getAuthor() {
        return "xSylla#9834";
    }
    getName() {
        return "MyTube";
    }
    getVersion() {
        return "1.0";
    }
    getDescription() {
        return "Open YouTube links on MyTube app";
    }
    event(e) {
        if (e.target.href.includes("youtu.be") || (e.target.href.includes("youtube.com"))) {
            e.preventDefault();
            let url = e.target.href.split("/");
            shell.openExternal("mytube:link=" + e.target.href, {activate: true});
        };
    }
    start() {
        document.addEventListener("click", this.event);
    }
    stop() {
        document.removeEventListener("click", this.event);
    }
}