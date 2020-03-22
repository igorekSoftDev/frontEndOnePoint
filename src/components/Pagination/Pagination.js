import DisplayUsers from './../DisplayUsers';

const Pagination = (response) => {
  const pagination = document.createElement('div');
  pagination.classList.add('pagination');
  pagination.setAttribute('data-pagination', 'pagination');
  pagination.innerHTML = "";

  let page_count = Math.ceil(response.length / 10);
  for (let i = 1; i < page_count + 1; i++) {
    let btn = PaginationButton(i);
    pagination.appendChild(btn);
  }
  return pagination;
}

let current_page = 1;

const PaginationButton = (page) => {
  const button = document.createElement('button');
  button.innerText = page;
  button.setAttribute('data-pageButton', page);
  if (current_page == page){ 
    button.classList.add('active');
    button.setAttribute('data-active', 'active');
  }
  button.addEventListener('click', function () {
    current_page = page;
    DisplayUsers(document.querySelector('.table'), current_page);
		let current_btn = document.querySelector('.pagination button.active');
    current_btn.classList.remove('active');
    current_btn.removeAttribute('data-active');
    button.classList.add('active');
    button.setAttribute('data-active', 'active');
	});
  return button;
};

export default Pagination;