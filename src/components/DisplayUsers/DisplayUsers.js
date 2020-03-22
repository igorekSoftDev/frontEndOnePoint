import { getList } from '../../actions/actions';
import RowComponent from './../RowComponent';
import styles from '../../index.css';

const DisplayUsers = (tableElem, page) => {
  const usersList = getList();
  tableElem.innerHTML = '';
  page--;
  let start = 10 * page;
	let end = start + 10;
  let paginatedItems = usersList.slice(start, end);
  paginatedItems.map((el, index) => {
    const rowElement = document.createElement('div');
    rowElement.classList.add(styles.rowWrapper);
    rowElement.innerHTML = RowComponent(el, index);
    tableElem.appendChild(rowElement);
  });
}

export default DisplayUsers;