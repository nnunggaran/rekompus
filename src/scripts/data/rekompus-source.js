import swal from 'sweetalert';
import API_ENDPOINT from '../globals/api-endpoint';

class RekompusSource {
  static async registerUser(data) {
    try {
      const response = await fetch(API_ENDPOINT.REGISTER, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const responseJson = await response.json();
      console.log(responseJson);
      return responseJson;
    } catch (error) {
      swal({
        icon: 'warning',
        title: 'Error!',
        text: `Masalah yang terjadi adalah ${error.message}`,
      }).then(
        window.location.href = '/',
      );
    }
  }

  static async loginUser(data) {
    try {
      const response = await fetch(API_ENDPOINT.LOGIN, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      swal({
        icon: 'warning',
        title: 'Error!',
        text: `Masalah yang terjadi adalah ${error.message}`,
        timer: 2000,
      }).then(
        window.location.href = '/#/',
      );
    }
  }

  static async listKampus() {
    try {
      const response = await fetch(API_ENDPOINT.KAMPUS, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('jwt')}`,
        },
      });

      if (response.ok) {
        const responseJson = await response.json();
        return responseJson.data;
      }

      if (response.status === 401) {
        swal({
          icon: 'warning',
          title: 'Unauthorized!',
          text: `Masalah yang terjadi adalah anda tidak memiliki akses pada halaman tersebut. Dengan response status code ${response.status}. Harap login terlebih dahulu!.`,
        }).then(
          window.location.href = '/#/login',
        );
      }

      if (response.status === 500) {
        swal({
          icon: 'warning',
          title: 'Internal Server Error!',
          text: `Masalah yang terjadi adalah internal server error. Dengan response status code ${response.status} Jika halaman masih belum dapat diakses harap hubungi admin rekompus.`,
        }).then(
          window.location.href = '/#/',
        );
      }
    } catch (error) {
      swal({
        icon: 'warning',
        title: 'Error!',
        text: `Masalah yang terjadi adalah ${error.message}. Jika halaman masih belum dapat diakses harap hubungi admin rekompus.`,
      }).then(
        window.location.href = '/#/',
      );
    }
  }

  static async detailKampus(id) {
    try {
      const response = await fetch(API_ENDPOINT.DETAIL_KAMPUS(id), {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('jwt')}`,
        },
      });
      if (response.ok) {
        const responseJson = await response.json();
        return responseJson.data;
      }

      if (response.status === 401) {
        swal({
          icon: 'warning',
          title: 'Unauthorization!',
          text: 'Masalah yang terjadi adalah anda tidak memiliki akses halaman tersebut. Jika halaman masih belum dapat diakses harap hubungi admin rekompus.',
        }).then(
          window.location.href = '/#/login',
        );
      }

      if (response.status === 500) {
        swal({
          icon: 'warning',
          title: 'Internal server error!',
          text: 'Masalah yang terjadi adalah internal server error. Jika halaman masih belum dapat diakses harap hubungi admin rekompus.',
        }).then(
          window.location.href = '/#/',
        );
      }
    } catch (error) {
      swal({
        icon: 'warning',
        title: 'Data tidak tersedia',
        text: `Masalah yang terjadi adalah ${error.message}. Jika halaman masih belum dapat diakses harap hubungi admin rekompus.`,
      }).then(
        window.location.href = '/#/',
      );
    }
  }

  static async addKampus(data) {
    try {
      const response = await fetch(API_ENDPOINT.KAMPUS, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('jwt')}`,
        },
        body: JSON.stringify(data),
      });
      const responseJson = await response.json();
      console.log(responseJson);
      return responseJson;
    } catch (error) {
      swal({
        icon: 'warning',
        title: 'Error!',
        text: `Masalah yang terjadi adalah ${error.message}. Jika halaman masih belum dapat diakses harap hubungi admin rekompus.`,
      }).then(
        window.location.href = '/#/',
      );
    }
  }

  static async updateKampus(data) {
    try {
      const response = await fetch(API_ENDPOINT.UPDATE_KAMPUS(data.id), {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('jwt')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const responseJson = await response.json();
      console.log(responseJson);
      return responseJson;
    } catch (error) {
      swal({
        icon: 'success',
        title: 'Gagal Update!',
        text: `Gagal update kampus!, karena terjadi error berikut ${error.message} `,
      });
    }
  }
}

export default RekompusSource;
