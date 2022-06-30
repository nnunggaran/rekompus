/* eslint-disable consistent-return */
import { openDB } from 'idb';
import CONFIG from '../globals/config';

const { DATABASE_JURUSAN, DATABASE_JURUSAN_VERSION, OBJECT_STORE_JURUSAN } = CONFIG;

const dbPromise = openDB(DATABASE_JURUSAN, DATABASE_JURUSAN_VERSION, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE_JURUSAN, { keyPath: 'id' });
  },
});

const FavoriteJurusanIdb = {
  async getJurusan(id) {
    if (!id) {
      return;
    }
    return (await dbPromise).get(OBJECT_STORE_JURUSAN, id);
  },
  async getAllJurusan() {
    return (await dbPromise).getAll(OBJECT_STORE_JURUSAN);
  },
  async putJurusan(jurusan) {
    if (!jurusan.hasOwnProperty('id')) {
      return;
    }
    return (await dbPromise).put(OBJECT_STORE_JURUSAN, jurusan);
  },
  async deleteJurusan(id) {
    return (await dbPromise).delete(OBJECT_STORE_JURUSAN, id);
  },
};

export default FavoriteJurusanIdb;
