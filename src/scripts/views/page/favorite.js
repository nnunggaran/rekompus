import FavoriteRekompusIdb from '../../data/favoriterekompus-idb';
import { createRekompusItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Your Favorite Campus</h2>
        <div id="rekompuss" class="rekompuss">

        </div>
      </div>
    `;
  },

  async afterRender() {
    const rekompuss = await FavoriteRekompusIdb.getAllRekompuss();
    const moviesContainer = document.querySelector('#rekompuss');
    if (rekompuss.length) {
      rekompuss.forEach((rekompus) => {
        moviesContainer.innerHTML += createRekompusItemTemplate(rekompus);
      });
    } else {
      moviesContainer.innerHTML = `
        <div class="rekompus-item__not__found">Tidak ada kampus untuk ditampilkan</div>
      `;
    }
  },
};

export default Favorite;
