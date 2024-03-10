function showPage(Number) {
    const Page = 2;
    const items = document.querySelectorAll("#items p");

    items.forEach((item, index) => {
        if (index >= (Number - 1) * Page && index < Number * Page) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}