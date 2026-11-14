const products = [
  {
    id: "3030",
    name: "3 Mảnh Plate 2x4 Màu Cát ",
    price: "15,000đ",
    img: "images/3020.jpg",
    link: "https://shopee.vn/tuankiet_7",
  },
  {
    id: "2431",
    name: "9 Mảnh Tile 1x6 Màu đen",
    price: "24,000đ",
    img: "images/2431.jpg",
    link: "https://shopee.vn/tuankiet_7",
  },
  {
    id: "3021",
    name: "7 Mảnh Plate 2x3 Màu đen",
    price: "21,000đ",
    img: "images/3021.jpg",
    link: "https://shopee.vn/tuankiet_7",
  },
  {
    id: "3024",
    name: "12 Mảnh Plate 1x1 Màu đen",
    price: "24,000đ",
    img: "images/3024.jpg",
    link: "https://shopee.vn/tuankiet_7",
  },
  {
    id: "3068",
    name: "5 Mảnh Tile 2x2 Màu trắng",
    price: "25,000đ",
    img: "images/3068.jpg",
    link: "https://shopee.vn/tuankiet_7",
  },
  {
    id: "3396",
    name: "3 Mảnh Tile Màu đen",
    price: "20,000đ",
    img: "images/3396.jpg",
    link: "https://shopee.vn/tuankiet_7",
  },
  {
    id: "3795",
    name: "9 Mảnh Plate 2x6 Màu đen",
    price: "25,000đ",
    img: "images/3795.jpg",
    link: "https://shopee.vn/tuankiet_7",
  },
  {
    id: "11477",
    name: "24 Mảnh Slope 1x2 Màu đen",
    price: "39,000đ",
    img: "images/11477.jpg",
    link: "https://shopee.vn/tuankiet_7",
  },
  {
    id: "13731",
    name: "4 Mảnh Mã 13731 Màu đỏ",
    price: "39,000đ",
    img: "images/13731.jpg",
    link: "https://shopee.vn/tuankiet_7",
  },
  {
    id: "14769",
    name: "4 Mảnh Tile 2x2 Màu đen",
    price: "20,000đ",
    img: "images/14769.jpg",
    link: "https://shopee.vn/tuankiet_7",
  },
  {
    id: "20482",
    name: "18 Mảnh Tile 1x1 Màu đen",
    price: "38,000đ",
    img: "images/20482.jpg",
    link: "https://shopee.vn/tuankiet_7",
  },
];
const itemsPerPage = 10;
let currentPage = 1;
const productContainer = document.getElementById("product-container");
const paginationContainer = document.getElementById("pagination");
// Hàm vẽ sản phẩm lên màn hình
function displayProducts(page) {
  if (!productContainer) return;
  productContainer.innerHTML = "";
  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const currentItems = products.slice(start, end);
  currentItems.forEach((item, index) => {
    const card = document.createElement("div");
    card.classList.add("post-item");
    card.innerHTML = `
      <div class="post-thumb">
        <img src="${item.img}" alt="${item.name}" />
      </div>
      <div class="post-details">
        <h3 class="post-title">${item.name}</h3>
        <p class="post-code">Mã: ${item.id} • <span class="post-price">${item.price}</span></p>
          <!-- Nút tròn dấu cộng mua hàng/sang Shopee -->
          <a href="${item.link}" target="_blank" rel="noopener noreferrer" class="btn-add-circle" title="Mua trên Shopee">
            <i class="fa-solid fa-plus"></i>
          </a>
        </div>
      </div>
    `;
    productContainer.appendChild(card);
  });
}
// Hàm tạo nút chuyển trang
function renderPagination() {
  if (!paginationContainer) return;
  paginationContainer.innerHTML = "";
  const totalPages = Math.ceil(products.length / itemsPerPage);
  if (totalPages <= 1) return; //  Chỉ có 1 trang thì ẩn
  for (let i = 1; i <= totalPages; i++) {
    // Điều kiện hiển thị các trang đầu, trang cuối và trang liền kề
    if (
      i === 1 ||
      i === 2 ||
      i >= totalPages - 2 ||
      (i >= currentPage - 1 && i <= currentPage + 1)
    ) {
      const btn = document.createElement("button");
      btn.innerText = i;
      if (i === currentPage) btn.classList.add("active");
      btn.addEventListener("click", () => {
        currentPage = i;
        displayProducts(currentPage);
        renderPagination();
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
      paginationContainer.appendChild(btn);
    }
    // Thêm dấu ...
    else if (
      (i === 3 && currentPage > 4) ||
      (i === totalPages - 3 && currentPage < totalPages - 3)
    ) {
      const dots = document.createElement("span");
      dots.classList.add("dots");
      dots.innerText = "...";
      paginationContainer.appendChild(dots);
    }
  }
}
// Chạy hiển thị
displayProducts(currentPage);
renderPagination();
