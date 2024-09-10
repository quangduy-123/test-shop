document.addEventListener('DOMContentLoaded', function () {
    // lấy  classs
    const inputField = document.querySelector('.header__search-input');
    const searchHistory = document.querySelector('.header__search-search-history');
    const historyItems = document.querySelectorAll('.header__search-search-history-item a');

    //  hiển thị lịch sử tìm kiếm khi focus
    inputField.addEventListener('focus', function () {
        searchHistory.style.display = 'block';
    });

    //  ẩn ls tim kiếm khi blur
    inputField.addEventListener('blur', function () {
        // time cho phép nhấp chuột
        setTimeout(() => {
            searchHistory.style.display = 'none';
        }, 100);
    });

    // cập nhật vào input khi nhấp chuột
    historyItems.forEach(item => {
        item.addEventListener('click', function (event) {
            event.preventDefault();
            inputField.value = this.textContent;
        });
    });
});


// input search
document.querySelectorAll('.home-product-item__like').forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('home-product-item__like--liked');
    });
});
