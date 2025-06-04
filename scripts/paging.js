// flag : 0 - 개인채팅
// flag : 1 - 그룹채팅
// flag : 2 - 친구목록
async function loadPage(url, flag) {
    try {
        console.log("테스트!");
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

        container.innerHTML = bodyContent;
    } catch (err) {
        console.error("불러오기 실패:", err);
    }
}
