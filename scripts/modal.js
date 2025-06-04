document.addEventListener("DOMContentLoaded", async () => {
    // 1. modal-dialog.html 불러오기
    const res = await fetch("./components/modal-dialog.html");
    const html = await res.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");

    // 2. 모달 요소 찾기
    const dialog = doc.querySelector("dialog");
    if (!dialog) {
        console.error("modal-dialog.html에 <dialog> 태그 없음");
        return;
    }

    // 3. 스타일시트 동적으로 삽입 (이미 있으면 생략 가능)
    const cssPath = "../styles/modal-dialog.css";
    const alreadyLinked = [...document.styleSheets].some((sheet) =>
        sheet.href?.includes("modal-dialog.css")
    );
    if (!alreadyLinked) {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = cssPath;
        document.head.appendChild(link);
    }

    // 4. 모달 삽입
    document.body.appendChild(dialog);

    // 5. showModal
    dialog.showModal();

    // 6. 닫기 버튼 연결
    const closeBtn = dialog.querySelector(".dialog__close");
    if (closeBtn) {
        closeBtn.addEventListener("click", () => dialog.close());
    }
});
