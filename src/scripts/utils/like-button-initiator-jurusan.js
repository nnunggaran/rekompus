import FavoriteJurusanIdb from '../data/favoritejurusan-idb';
import CONFIG from '../globals/config';
import { createLikeButtonTemplate, createLikedButtonTemplate } from '../views/templates/template-creator';
import NotificationHelper from './notification-helper';

const LikeButtonInitiatorJurusan = {
  async init({ likeButtonContainer, jurusan }) {
    this._likeButtonContainer = likeButtonContainer;
    this._jurusan = jurusan;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._jurusan;

    if (await this._isJurusanExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isJurusanExist(id) {
    const jurusan = await FavoriteJurusanIdb.getJurusan(id);
    return !!jurusan;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteJurusanIdb.putJurusan(this._jurusan);
      swal('Berhasil', 'Berhasil menambahkan jurusan ke favorite', 'success').then(
        NotificationHelper.sendNotification({
          title: `${this._jurusan.name}`,
          options: {
            body: this._jurusan.description,
            image: `${CONFIG.BASE_IMAGE_URL}/${this._jurusan.pictureId}`,
          },
        }),
      );
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createLikedButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteJurusanIdb.deleteJurusan(this._jurusan.id);
      swal('Berhasil', 'Berhasil menghapus jurusan favorite', 'success').then(this._renderButton());
    });
  },
};

export default LikeButtonInitiatorJurusan;
