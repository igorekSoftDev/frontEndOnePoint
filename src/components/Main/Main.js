import Pagination from '../Pagination';
import styles from '../../index.css';
import { getList } from '../../actions/actions';
import DisplayUsers from './../DisplayUsers';

const Main = (app) => {
  const header = `<div class=${styles.header}>
                    <div class=${styles.rowMain}>
                      <span class=${styles.signature}>Full name</span>
                      <span class=${styles.login}>Login</span>
                      <span class=${styles.email}>Email</span>
                      <button class=${styles.btnShowMore}>Action</button>
                    </div>
                  </div>`;
  const selectSort = `<div class=${styles.sortBy}>
                        <span class=${styles.sortTitle}>Sort by:</span>
                        <select data-sort="sorting">
                          <option disabled selected value></option>
                          <option value="login,asc">Login - ASC</option>
                          <option value="login,desc">Login - DESC</option>
                          <option value="email,asc">Email - ASC</option>
                          <option value="email,desc">Email - DESC</option>
                        </select>
                      </div>`;
  app.innerHTML = `${header} ${selectSort}`;
  
  const tableElem = document.createElement('div');
  tableElem.classList.add('table');
  DisplayUsers(tableElem, 1);
  app.appendChild(Pagination(getList()));
  app.appendChild(tableElem);
}

export default Main;