function loadAnnouncements() {
    let data = getData();

    document.getElementById("announcements").innerHTML = data.announcements.map(a => `
        <div class="ann">
            <h3>${a.title}</h3>
            <p>${a.content}</p>

            ${a.pdfName ? `<p>PDF: ${a.pdfName}</p>` : ""}
            ${a.docName ? `<p>Word: ${a.docName}</p>` : ""}
            ${a.imgUrl ? `<img src="${a.imgUrl}" width="120">` : ""}
        </div>
    `).join("");
}

loadAnnouncements();
