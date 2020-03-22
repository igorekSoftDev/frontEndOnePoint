import RowComponent from '../components/RowComponent';
import avatarEmpty from '../assets/empty-avatar.png';
import { getList } from '../actions/actions';
import styles from '../index.css';

export const capitalizeFirstLetter = name => {
  return name.charAt(0).toUpperCase() + name.slice(1)
};

export const imageExists = (image_url) => {
  const image = new Image();
  image.src = image_url;
  return image.width > 0 ? image_url : avatarEmpty;
}

export const toggleAdvancedInfo = (event) => {
  const id = event.target.getAttribute('data-infoId');
  if (id) {
    const advancedInfoElement = document.querySelector("[data-advancedInfoId='"+id+"']");
    event.target.classList.toggle('activated');
    if (event.target.classList.contains('activated')) {
      event.target.innerHTML = `Hide info</br>&#11205;`;
      advancedInfoElement.style.display = 'flex';
    } else {
      event.target.innerHTML = `Show info</br>&#11206;`;
      advancedInfoElement.style.display = 'none';
    }
  }
} 

let page = 1;

export const sort = (event, app) => {
  if (event.target.getAttribute('data-sort')) {
    const tableElem = document.querySelector('.table');
    tableElem.innerHTML = '';
    const usersList = getList();
    page--;
    let start = 10 * page;
    let end = start + 10;
    const sorted = usersList.sort(compareValues(...(event.target.value.split(','))));
    let paginatedItems = sorted.slice(start, end);
    paginatedItems.map((el, index) => {
      const rowElement = document.createElement('div');
      rowElement.classList.add(styles.rowWrapper);
      rowElement.innerHTML = RowComponent(el, index);
      tableElem.appendChild(rowElement);
    });
    app.append(tableElem);      
  }
}

export function compareValues(key, order = 'asc') {
  return function innerSort(a, b) {
    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      return 0;
    }

    const varA = (typeof a[key] === 'string')
      ? a[key].toUpperCase() : a[key];
    const varB = (typeof b[key] === 'string')
      ? b[key].toUpperCase() : b[key];

    let comparison = 0;
    if (varA > varB) {
      comparison = 1;
    } else if (varA < varB) {
      comparison = -1;
    }
    return (
      (order === 'desc') ? (comparison * -1) : comparison
    );
  };
}
