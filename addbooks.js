function addBook() {
    // Input values ko prapt karna
    var bookName = document.getElementById("bookName").value;
    var author = document.getElementById("author").value;
    var price = document.getElementById("price").value;
    var imageUrl = document.getElementById("imageUrl").value;

    // Book card element banaye
    var card = document.createElement("div");
    card.classList.add("book-card");
    card.innerHTML = `
        <span class="delete-btn" onclick="deleteBook(this)">x</span>
        <p>Book: ${bookName}</p>
        <p>Author: ${author}</p>
        <p>Price: ${price}</p>
        <img src="${imageUrl}" alt="${bookName} Cover">
    `;
    saveData();

    // Book cards container mein card ko append kare
    document.getElementById("bookCardsContainer").appendChild(card);

    // Input fields ko clear kare
    document.getElementById("bookName").value = "";
    document.getElementById("author").value = "";
    document.getElementById("price").value = "";
    document.getElementById("imageUrl").value = "";
}
function deleteBook(element) {
    // Book card element ko delete kare
    var card = element.parentNode;
    var container = document.getElementById("bookCardsContainer");
    container.removeChild(card);
    saveData();
}
function saveData() {
    localStorage.setItem("data", bookCardsContainer.innerHTML)
}