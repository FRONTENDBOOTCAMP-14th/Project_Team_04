// flag : 0 - 개인채팅
// flag : 1 - 그룹채팅
// flag : 2 - 친구목록
async function loadPage(url, flag) {
    try {
        const res = await fetch(url);
        const html = await res.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");

        const bodyContent = doc.body.innerHTML;
        const container = document.getElementsByClassName(
            "friend-list-contanier"
        )[0];

        if (flag === 0) {
            const app = document
                .querySelector(".application")
                .classList.add("application__not-friend-list");

            const header = document.querySelector(".main-panel-header");
            header.style.display = "none";
        }

        if (flag === 1) {
            const app = document
                .querySelector(".application")
                .classList.add("application__not-friend-list");

            const header = document.querySelector(".main-panel-header");
            header.style.display = "none";
        }

        if (flag === 2) {
            const app = document
                .querySelector(".application")
                .classList.remove("application__not-friend-list");

            const header = document.querySelector(".main-panel-header");
            header.style.display = "block";
        }

        container.innerHTML = bodyContent;

        if (flag === 1) {
            const app = document
                .querySelector(".chat-panel-container")
                .classList.add("chat-panel-server-panel");

            const app2 = document
                .querySelector(".chat-panel-container__left-side")
                .classList.add("chat-panel-server-panel__left-size");
        }
    } catch (err) {
        console.error("불러오기 실패:", err);
    }
}

// flag : 0 - 친구목록
// flag : 1 - 서버목록
async function loadServerPage(url, flag) {
    try {
        const res = await fetch(url);
        const html = await res.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");

        const bodyContent = doc.body.innerHTML;
        const container =
            document.getElementsByClassName("side-friend-list")[0];

        const serverList = document.querySelector(".server-list-container");

        container.innerHTML = bodyContent;
    } catch (err) {
        console.error("불러오기 실패:", err);
    }
}
