export const createMarkupShoppingList = arr =>
  arr
    .map(
      ({
        id,
        title,
        author,
        bookImage,
        categoryName,
        description,
        buyLinks: [
          { name: amazon, url: amazonUrl },
          { name: apple, url: appleUrl },
          { name: book, url: bookUrl },
        ],
      }) =>
        `<li class="item-shoppingList  js-item-book js-item-book" id = '${id}'>
                <img class="pict-shoppingList js-item-book" src="${bookImage}" alt="img"></img>
                <button type='button' class='delete-btn js-item-book' id= '${id}'>
                    </button>
                <div class="content-container-shoppingList js-item-book">
                    <div class="title-delete-shoppingList">
                        <div class="title-shoppingList">
                            <h3 class="shop-book-title">${title}</h3>
                            <p class="shop-sub-title">${categoryName}</p>
                        </div>
                        
                        
                    </div>
                    <p class="discription-shoppinglist">${description}</p>
                    <div>
                    <div class="autor-link-shoppingList">
                        <p class="shop-book-autor">${author}</p>
                        <ul class="links-shoppingList">
                        <li class="shop-book-link amazon-link"><a class="shop-a" href="${amazonUrl}"><img class="amazon" src="./../../img/icon-book-store/amazon.png" alt="${amazon} "></a></li>
                        <li class="shop-book-link apple-store-link"><a class="shop-a" href="${appleUrl}"><img class="apple-store" src="/img/icon-book-store/apple-store.png" alt="${apple} "></a></li>
                        <li class="shop-book-link book-shop-link"><a class="shop-a" href="${bookUrl}"><img class="book-shop" src="/img/icon-book-store/book-shop.png" alt="${book} "></a></li>
                        </ul>
                    </div> 
                    </div>
                </div>
            </li>`
    )
    .join('');