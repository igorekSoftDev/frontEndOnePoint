import { capitalizeFirstLetter, imageExists } from '../../constants/utils';
import styles from '../../index.css';

const RowComponent = (data, index) => {
  return `<div class=${styles.rowMain}>
            <span class=${styles.signature}>${capitalizeFirstLetter(data.title)} ${capitalizeFirstLetter(data.firstname)} ${capitalizeFirstLetter(data.lastname)}</span>
            <span class=${styles.login}>${data.login}</span>
            <span class=${styles.email}>${data.email}</span>
            <button class=${styles.btnShowMore} data-infoId=${index}>
              Show info</br>
              &#11206;
            </button>
          </div>
          <div class=${styles.rowAdvanced} data-advancedInfoId=${index}>
            <img class=${styles.avatar} src=${imageExists(data.picture)} />
            <div class=${styles.infoWrapper}>
              <p><span>Login:</span> ${data.login}</p>
              <p><span>Password:</span> ${data.password}</p>
              <p><span>Full name:</span> ${capitalizeFirstLetter(data.title)} ${capitalizeFirstLetter(data.firstname)} ${capitalizeFirstLetter(data.lastname)}</p>
              <p><span>Gender:</span> ${data.gender}</p>
              <p><span>Email:</span> ${data.email}</p>
              <p><span>Address:</span> ${data.address}</p>
            </div>
          </div>`;
};

export default RowComponent;