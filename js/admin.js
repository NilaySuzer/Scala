function addAnnouncement() {
    let data = getData();

    let title = document.getElementById("aTitle").value;
    let content = document.getElementById("aContent").value;

    let pdf = document.getElementById("pdfFile").files[0];
    let doc = document.getElementById("docFile").files[0];
    let img = document.getElementById("imgFile").files[0];

    let announcement = {
        title: title,
        content: content,
        pdfName: pdf ? pdf.name : null,
        docName: doc ? doc.name : null,
        imgUrl: img ? URL.createObjectURL(img) : null
    };

    data.announcements.push(announcement);
    saveData(data);
    renderAnnouncements();
}

function renderAnnouncements() {
    let data = getData();

    document.getElementById("announcementList").innerHTML = data.announcements.map((a, i) => `
        <div class="item">
            <h3>${a.title}</h3>
            <p>${a.content}</p>

            ${a.pdfName ? `<p>📄 PDF: ${a.pdfName}</p>` : ""}
            ${a.docName ? `<p>📝 Word: ${a.docName}</p>` : ""}
            ${a.imgUrl ? `<img src="${a.imgUrl}" width="120">` : ""}

            <button onclick="deleteAnn(${i})">Sil</button>
        </div>
    `).join("");
}

function deleteAnn(i) {
    let data = getData();
    data.announcements.splice(i,1);
    saveData(data);
    renderAnnouncements();
}

renderAnnouncements();
