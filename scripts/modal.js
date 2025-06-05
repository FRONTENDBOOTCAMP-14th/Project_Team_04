document.addEventListener("DOMContentLoaded", async () => {
    const res = await fetch("./components/modal-dialog.html");
    const html = await res.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");

    const dialog = doc.querySelector("dialog");
    if (!dialog) {
        console.error("modal-dialog.html에 <dialog> 태그 없음");
        return;
    }

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

    document.body.appendChild(dialog);

    dialog.showModal();

    const closeBtn = dialog.querySelector(".dialog__close");
    if (closeBtn) {
        closeBtn.addEventListener("click", () => dialog.close());
    }
});
