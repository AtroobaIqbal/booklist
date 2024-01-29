/*function createUserCard() {
    // Image URL ko input field se prapt karna
   // var imageUrl = document.getElementById("imageUrl").value;

    // Check karna ki user ne kuch enter kiya hai ya nahi
  //  if (imageUrl) {
        // Image container ko update karna
      //  document.getElementById("imageUrl").innerHTML = `<img src="${imageUrl}" alt="User Image">`;
   // }

    // Input values ko prapt karna
    let bookName = document.getElementById("bookName").value;
    let authorName = document.getElementById("authorName").value;
    let bookPrice = document.getElementById("bookPrice").value;
    let imageUrl = document.getElementById("imageUrl").value;

    // User card element banaye
    var card = document.createElement("div");
    card.classList.add("user-card");
    card.innerHTML = `
        <p>${imageUrl}</p>
        <p>${bookName}</p>
        <p>${authorName}</p>
        <p>${bookPrice}</p>
    `;

    // User cards container mein card ko append kare
    document.getElementById("bookForm").appendChild(card);

    // Input fields ko clear kare
    document.getElementById("bookName").value = "";
    document.getElementById("authorName").value = "";
    document.getElementById("bookPrice").value = "";
    document.getElementById("imageUrl").value = "";
}*/

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
        <p>Book: ${bookName}</p>
        <p>Author: ${author}</p>
        <p>Price: ${price}</p>
        <img src="${imageUrl}" alt="${bookName} Cover">
    `;

    // Book cards container mein card ko append kare
    document.getElementById("bookCardsContainer").appendChild(card);

    // Input fields ko clear kare
    document.getElementById("bookName").value = "";
    document.getElementById("author").value = "";
    document.getElementById("price").value = "";
    document.getElementById("imageUrl").value = "";
}