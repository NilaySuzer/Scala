function getData() {
    return JSON.parse(localStorage.getItem("cmsData")) || {
        products: [],
        announcements: [],
    };
}

function saveData(data) {
    localStorage.setItem("cmsData", JSON.stringify(data));
}
