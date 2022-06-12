import FavoriteRekompusIdb from '../data/favoriterekompus-idb';
import { createLikeButtonTemplate, createLikedButtonTemplate } from '../views/templates/template-creator';

const LikeButtonInitiator = {
  async init({ likeButtonContainer, rekompus }) {
    this._likeButtonContainer = likeButtonContainer;
    this._rekompus = rekompus;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._rekompus;

    if (await this._isRekompusExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isRekompusExist(id) {
    const rekompus = await FavoriteRekompusIdb.getRekompus(id);
    return !!rekompus;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteRekompusIdb.putRekompus(this._rekompus);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createLikedButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteRekompusIdb.deleteRekompus(this._rekompus.id);
      this._renderButton();
    });
  },
};

export default LikeButtonInitiator;
