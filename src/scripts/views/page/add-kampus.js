/* eslint-disable no-shadow */
import swal from 'sweetalert';
import RekompusSource from '../../data/rekompus-source';
import { heroText } from '../templates/template-creator';

const AddKampus = {
  async render() {
    return `
    <section class="hero-text container-fluid">
    </section>
    <section class="container-fluid bg-info">
      <section class="head-profile mt-2">
        <div class="card border-orange bg-light">
          <div class="row alert-info m-3">
            <div class="col-md-2 p-3">
              <img src="./images/default-school.png" alt="foto-profile-school" class="thumb-img-detail">
            </div>
            <div class="col-md-5 p-3 my-auto ml-auto">
              <h4 class="fw-bold text-muted">Nama Kampus</h4>
              <p class="fw-bold text-muted">Kota</p>
            </div>
            <div class="col-md-5 p-3 my-auto">
              <a href="/#/admin/${localStorage.getItem('email')}"
                class="link text-dark text-decoration-none border-bottom border-info border-2 fw-bold fs-5 py-2">
                <i class="fa fa-edit fa-2x text-muted" aria-hidden="true"></i> <span class="text-muted ">Atur data
                  kampus</span>
              </a>
            </div>
          </div>
        </div>

      </section>
      
      <section class="form-kampus my-3">
        <div class="card">
          <div class="card-header alert-info">
            <h4 class="text-heading text-muted fw-bolder">Form Kampus</h4>
          </div>
        <form id="formAddKampus" method="post">
          <div class="card-body">
          <div class="card border-orange mb-3 alert-info">
            <div class="row p-2 align-items-center">
              <div class="col-sm-12 col-md-3">
                <label for="namaKampus">
                  <h5 class="fw-bold text-muted">Nama Kampus <span class="text-danger">*</span></h5>
                </label>
              </div>
              <div class="col-sm-12 col-md-9">
                <input type="text" class="form-control border-orange w-100" id="namaKampus" placeholder="Nama Kampus" required>
              </div>
            </div>
          </div>
          
          <div class="card border-orange mb-3 alert-info">
            <div class="row p-2 align-items-center">
              <div class="col-sm-12 col-md-3">
                <label for="deskripsi">
                  <h5 class="fw-bold text-muted">Deskripsi <span class="text-danger">*</span></h5>
                </label>
              </div>
              <div class="col-sm-12 col-md-9">
                <textarea id="deskripsi" class="form-control border-orange w-100" placeholder="Deskripsi kampus" required></textarea>
              </div>
            </div>
          </div>

          <div class="card border-orange mb-3 alert-info">
            <div class="row p-2 align-items-center">
              <div class="col-sm-12 col-md-3">
                <label for="jenisKampus">
                  <h5 class="fw-bold text-muted">Jenis Kampus <span class="text-danger">*</span></h5>
                </label>
              </div>
              <div class="col-sm-12 col-md-9">
              <select id="jenisKampus" class="form-control border-orange w-100" required>
                <option value="" selected>Jenis Kampus</option>
                <option value="PTN">PTN</option>
                <option value="PTS">PTS</option>
              </select>
              </div>
            </div>
          </div>

          <div class="card border-orange mb-3 alert-info">
            <div class="row p-2 align-items-center">
              <div class="col-sm-12 col-md-3">
                <label for="akreditasiKampus">
                  <h5 class="fw-bold text-muted">Akreditasi Kampus <span class="text-danger">*</span></h5>
                </label>
              </div>
              <div class="col-sm-12 col-md-9">
              <select id="akreditasiKampus" class="form-control border-orange w-100" required>
                <option value="" selected>Pilih Akreditasi Kampus</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="Baik">Baik</option>
                <option value="Sangat Baik">Sangat Baik</option>
                <option value="Unggul">Unggul</option>
                <option value="Belum Terakreditasi">Belum Terakreditasi</option>
              </select>
              </div>
            </div>
          </div>

          <div class="card border-orange mb-3 alert-info">
            <div class="row p-2 align-items-center">
              <div class="col-sm-12 col-md-3">
                <label for="statusPMB">
                  <h5 class="fw-bold text-muted">Status PMB <span class="text-danger">*</span></h5>
                </label>
              </div>
              <div class="col-sm-12 col-md-9">
              <select id="statusPMB" class="form-control border-orange w-100" required>
                <option value="" selected>Status PMB</option>
                <option value="Buka">Dibuka</option>
                <option value="Tutup">Ditutup</option>
              </select>
              </div>
            </div>
          </div>
          
          <div class="card border-orange mb-3 alert-info">
            <div class="row p-2 align-items-center">
              <div class="col-sm-12 col-md-3">
                <label for="kota">
                  <h5 class="fw-bold text-muted">Kota <span class="text-danger">*</span></h5>
                </label>
              </div>
              <div class="col-sm-12 col-md-9">
                <input type="text" id="kota" class="form-control border-orange w-100" placeholder="Kota" required>
              </div>
            </div>
          </div>

          <div class="card border-orange mb-3 alert-info">
            <div class="row p-2 align-items-center">
              <div class="col-sm-12 col-md-3">
                <label for="alamat">
                  <h5 class="fw-bold text-muted">Alamat <span class="text-danger">*</span></h5>
                </label>
              </div>
              <div class="col-sm-12 col-md-9">
                <textarea id="alamat" class="form-control border-orange w-100" placeholder="Alamat kampus" required></textarea>
              </div>
            </div>
          </div>                             
          
          <div class="card border-orange mb-3 alert-info">
            <div class="row p-2 align-items-center">
              <div class="col-sm-12 col-md-3">
                <label for="kelasTersedia">
                  <h5 class="fw-bold text-muted">Kelas Tersedia</h5>
                </label>
              </div>

              <div class="col-sm-12 col-md-9 row">
                <div class="col-sm-6 col-md-4">
                  <input type="checkbox" name="kelasTersedia" id="Reguler" value="Reguler"
                    class="form-check-input">
                  <label for="Reguler" class="form-check-label">Reguler</label>
                </div>

                <div class="col-sm-6 col-md-4">
                  <input type="checkbox" name="kelasTersedia" id="Karyawan" value="Karyawan"
                    class="form-check-input">
                  <label for="Karyawan" class="form-check-label">Karyawan</label>
                </div>

                <div class="col-sm-6 col-md-4">
                  <input type="checkbox" name="kelasTersedia" id="Online" value="Online"
                    class="form-check-input">
                  <label for="Online" class="form-check-label">Online</label>
                </div>
              </div>
            </div>
          </div>      
          
          <div class="card border-orange mb-3 alert-info">
            <div class="row p-2 align-items-center">
              <div class="col-sm-12 col-md-3">
                <label for="tahunBerdiri">
                  <h5 class="fw-bold text-muted">Tahun berdiri</h5>
                </label>
              </div>
              <div class="col-sm-12 col-md-9">
                <input type="number" id="tahunBerdiri" class="form-control border-orange w-100" placeholder="Tahun berdiri">
              </div>
            </div>
          </div>

          <div class="card border-orange mb-3 alert-info">
            <div class="row p-2 align-items-center">
              <div class="col-sm-12 col-md-3">
                <label for="noTelepon">
                  <h5 class="fw-bold text-muted">No Telepon</h5>
                </label>
              </div>
              <div class="col-sm-12 col-md-9">
                <input type="text" id="noTelepon" class="form-control border-orange w-100" placeholder="No Telepon">
              </div>
            </div>   
          </div>

          <div class="card border-orange mb-3 alert-info">
            <div class="row p-2 align-items-center">
              <div class="col-sm-12 col-md-3">
                <label for="email">
                  <h5 class="fw-bold text-muted">Email</h5>
                </label>
              </div>
              <div class="col-sm-12 col-md-9">
                <input type="email" id="email" class="form-control border-orange w-100" placeholder="Email">
              </div>
            </div>                 
          </div>

          <div class="card border-orange mb-3 alert-info">
            <div class="row p-2 align-items-center">
              <div class="col-sm-12 col-md-3">
                <label for="linkPendaftaran">
                  <h5 class="fw-bold text-muted">Link pendaftaran</h5>
                </label>
              </div>
              <div class="col-sm-12 col-md-9">
                <input type="text" id="linkPendaftaran" class="form-control border-orange w-100" placeholder="Website kampus">
              </div>
            </div>               
          </div>

          <div class="card border-orange mb-3 alert-info">
            <div class="row p-2 align-items-center">
              <div class="col-sm-12 col-md-3">
                <label for="mediaSosial">
                  <h5 class="fw-bold text-muted">Media Sosial</h5>
                </label>
              </div>
              <div class="col-sm-12 col-md-9">
                <div class="input-group row" id="mediaSosial">
                  <div class="col-sm-12 col-md-4 my-1">
                    <input type="text" class="form-control border-orange w-100" id="facebook" placeholder="Facebook" aria-label="facebook">
                  </div>
                  <div class="col-sm-12 col-md-4 my-1">
                    <input type="text" class="form-control border-orange w-100" id="twitter" placeholder="Twitter" aria-label="twitter">
                  </div>
                  <div class="col-sm-12 col-md-4 my-1">
                    <input type="text" class="form-control border-orange w-100" id="instagram" placeholder="Instagram" aria-label="instagram">
                  </div>                    
                </div>
              </div>
            </div>                
          </div>
          
          <div id="controlJurusan">
            <button id="addFieldJurusan" class="btn btn-primary my-2 mx-1">+ Jurusan</button>
            <button id="removeFieldJurusan" class="btn btn-danger my-2 mx-1">- Jurusan</button>
            <span id="jurusan-ditambahkan"></span>
          </div>
          <div id="groupJurusan" class="alert-info">
          </div>
            <div class="text-end my-3">
              <button type="submit" class="btn btn-dblue fs-4"><i class="fa fa-save fa-lg" aria-hidden="true"></i>
                Simpan</button>
            </div>
          </div>
        </div>
      </section>
      </form>
    </section>
    `;
  },

  async afterRender() {
    const heroTextEl = document.querySelector('.hero-text');
    heroTextEl.innerHTML = heroText('Tambah Kampus');

    const formAddKampus = document.getElementById('formAddKampus');
    const fieldNamaKampus = document.getElementById('namaKampus');
    const fieldDeskripsi = document.getElementById('deskripsi');
    const selectJenisKampus = document.getElementById('jenisKampus');
    const selectAkreditasiKampus = document.getElementById('akreditasiKampus');
    const selectStatusPMB = document.getElementById('statusPMB');
    const fieldKota = document.getElementById('kota');
    const fieldAlamat = document.getElementById('alamat');
    const cbKelasReguler = document.getElementById('Reguler');
    const cbKelasKaryawan = document.getElementById('Karyawan');
    const cbKelasOnline = document.getElementById('Online');
    const fieldTahunBerdiri = document.getElementById('tahunBerdiri');
    const fieldNoTelepon = document.getElementById('noTelepon');
    const fieldEmail = document.getElementById('email');
    const fieldPendaftaran = document.getElementById('linkPendaftaran');
    const fieldFb = document.getElementById('facebook');
    const fieldTwt = document.getElementById('twitter');
    const fieldIg = document.getElementById('instagram');

    const groupJurusanContainer = document.getElementById('groupJurusan');
    groupJurusanContainer.classList.add('rounded', 'shadow-sm');
    const addFieldJurusan = document.getElementById('addFieldJurusan');
    const removeFieldJurusan = document.getElementById('removeFieldJurusan');
    const jurusanDitambahkan = document.getElementById('jurusan-ditambahkan');
    jurusanDitambahkan.classList.add('rounded', 'shadow-sm', 'px-3', 'py-2', 'mx-2', 'my-1', 'd-inline-block');

    const lengthField = [];

    addFieldJurusan.addEventListener('click', (e) => {
      e.preventDefault();
      lengthField.push('item');
      jurusanDitambahkan.innerText = `${lengthField.length} Jurusan Ditambahkan`;
      const dataJenjang = ['S1', 'S2', 'S3', 'D1', 'D2', 'D3', 'D4', 'Profesi', 'Sp-1', 'Sp-2'];
      const dataSppJurusan = ['sppReguler', 'sppKaryawan', 'sppOnline'];
      const dataCbKelas = ['Reguler', 'Karyawan', 'Online'];
      const dataAkreditasi = ['A', 'B', 'C', 'Baik', 'Sangat Baik', 'Unggul', 'Belum Terakreditasi'];

      const groupJurusanName = document.createElement('div');
      groupJurusanName.classList.add('col-md-8', 'mb-2');

      const labelJurusanName = document.createElement('label');
      labelJurusanName.appendChild(document.createTextNode('Nama Jurusan'));
      labelJurusanName.htmlFor = `namaJurusan-${lengthField.length}`;

      const fieldJurusanName = document.createElement('input');
      fieldJurusanName.setAttribute('type', 'text');
      fieldJurusanName.setAttribute('required', 'true');
      fieldJurusanName.setAttribute('placeholder', 'Nama jurusan');
      fieldJurusanName.setAttribute('id', `namaJurusan-${lengthField.length}`);
      fieldJurusanName.classList.add('form-control', 'nama-jurusan');

      groupJurusanName.append(labelJurusanName, fieldJurusanName);

      const groupAkreditasi = document.createElement('div');
      groupAkreditasi.classList.add('col-md-8', 'mb-2');

      const labelAkreditasi = document.createElement('label');
      labelAkreditasi.appendChild(document.createTextNode('Pilih Akreditasi'));
      labelAkreditasi.htmlFor = `akreditasi-${lengthField.length}`;

      const selectAkreditasi = document.createElement('select');
      selectAkreditasi.setAttribute('required', 'true');
      selectAkreditasi.setAttribute('id', `akreditasi-${lengthField.length}`);
      selectAkreditasi.classList.add('form-control', 'select-akreditasi');

      const placeholderAkreditasi = document.createElement('option');
      placeholderAkreditasi.value = '';
      placeholderAkreditasi.text = 'Pilih Akreditasi';
      selectAkreditasi.appendChild(placeholderAkreditasi);

      dataAkreditasi.forEach((akreditasi) => {
        const option = document.createElement('option');
        option.value = akreditasi;
        option.text = akreditasi;
        selectAkreditasi.appendChild(option);
      });

      groupAkreditasi.append(labelAkreditasi, selectAkreditasi);

      const groupJenjang = document.createElement('div');
      groupJenjang.classList.add('col-md-8', 'mb-2');

      const labelJenjang = document.createElement('label');
      labelJenjang.appendChild(document.createTextNode('Pilih Jenjang'));
      labelJenjang.htmlFor = `jenjang-${lengthField.length}`;

      const selectJenjang = document.createElement('select');
      selectJenjang.setAttribute('required', 'true');
      selectJenjang.setAttribute('id', `jenjang-${lengthField.length}`);
      selectJenjang.classList.add('form-control', 'select-jenjang');

      const placeholderJenjang = document.createElement('option');
      placeholderJenjang.value = '';
      placeholderJenjang.text = 'Pilih Jenjang';
      selectJenjang.appendChild(placeholderJenjang);

      dataJenjang.forEach((jenjang) => {
        const option = document.createElement('option');
        option.value = jenjang;
        option.text = jenjang;
        selectJenjang.appendChild(option);
      });

      groupJenjang.append(labelJenjang, selectJenjang);

      const cbContainer = document.createElement('div');
      cbContainer.classList.add('col-md-8', 'mb-2');
      const cbResult = document.createElement('div');
      cbResult.classList.add('row');
      dataCbKelas.forEach((kelas) => {
        const checkbox = document.createElement('input');
        const label = document.createElement('label');
        label.appendChild(document.createTextNode(`${kelas}`));
        label.htmlFor = `cb${kelas}-${lengthField.length}`;
        label.classList.add('mx-2');
        label.style.fontSize = '16px';
        const divCb = document.createElement('div');
        divCb.classList.add('col-sm-6', 'col-md-4');
        checkbox.type = 'checkbox';
        checkbox.value = kelas;
        checkbox.setAttribute('id', `cb${kelas}-${lengthField.length}`);
        checkbox.classList.add(`cb${kelas}Jurusan`, 'form-check-input', 'my-1');
        divCb.append(checkbox, label);
        cbResult.appendChild(divCb);
      });
      cbContainer.appendChild(cbResult);

      const sppContainer = document.createElement('div');
      sppContainer.classList.add('col-md-8', 'mb-2');

      const fieldSPPKelas = document.createElement('div');
      fieldSPPKelas.classList.add('row');
      dataSppJurusan.forEach((jurusan) => {
        const inputText = document.createElement('input');
        const divField = document.createElement('div');
        inputText.type = 'number';
        inputText.placeholder = `Masukkan ${jurusan}`;
        inputText.setAttribute('id', `${jurusan}-${lengthField.length}`);
        inputText.classList.add(`${jurusan}Jurusan`, 'form-control', 'my-1');
        divField.append(inputText);
        divField.classList.add('col-md-4');
        fieldSPPKelas.appendChild(divField);
      });

      sppContainer.appendChild(fieldSPPKelas);

      const groupFormJurusan = document.createElement('div');
      groupFormJurusan.classList.add('group-form-jurusan', 'p-3', 'border-orange', 'my-2', 'mx-2');

      groupFormJurusan.append(
        groupJurusanName,
        groupJenjang,
        groupAkreditasi,
        cbContainer,
        sppContainer,
      );

      groupJurusanContainer.appendChild(groupFormJurusan).classList.add('border-orange', 'shadow-sm');
    });
    addFieldJurusan.click();
    removeFieldJurusan.addEventListener('click', (e) => {
      e.preventDefault();
      const groupJurusanSelector = document.querySelectorAll('.group-form-jurusan');
      if (groupJurusanSelector.length < 2) {
        swal({
          icon: 'warning',
          title: 'Gagal menghapus jurusan!',
          text: 'Tidak bisa menghapus jurusan. Setidaknya ada minimal satu jurusan!',
        });
        return;
      }

      lengthField.splice(lengthField.length - 1, lengthField.length);
      jurusanDitambahkan.innerText = `${lengthField.length} Jurusan Ditambahkan`;
      groupJurusanContainer.removeChild(groupJurusanSelector[groupJurusanSelector.length - 1]);
    });

    formAddKampus.addEventListener('submit', async (e) => {
      e.preventDefault();
      const cbData = [];
      const cbKelarTersedia = [
        cbKelasReguler,
        cbKelasKaryawan,
        cbKelasOnline,
      ];

      cbKelarTersedia.forEach((value) => {
        if (value.checked) {
          cbData.push(value.value);
        }
      });

      const groupFormJurusan = document.querySelectorAll('.group-form-jurusan');
      const jurusan = [];

      if (groupFormJurusan) {
        groupFormJurusan.forEach((formJurusan, index) => {
          const namaJurusan = document.querySelectorAll('.nama-jurusan')[index].value;
          const jenjang = document.querySelectorAll('.select-jenjang')[index].value;
          const akreditasi = document.querySelectorAll('.select-akreditasi')[index].value;
          const kelas = [];
          const cbRegulerJurusan = document.querySelectorAll('.cbRegulerJurusan')[index];
          const cbKaryawanJurusan = document.querySelectorAll('.cbKaryawanJurusan')[index];
          const cbOnlineJurusan = document.querySelectorAll('.cbOnlineJurusan')[index];
          const sppRegulerJurusan = document.querySelectorAll('.sppRegulerJurusan')[index];
          const sppKaryawanJurusan = document.querySelectorAll('.sppKaryawanJurusan')[index];
          const sppOnlineJurusan = document.querySelectorAll('.sppOnlineJurusan')[index];

          if (cbRegulerJurusan.checked) {
            const data = {
              name: 'Reguler',
              biayaSPP: sppRegulerJurusan.value,
            };
            kelas.push(data);
          }
          if (cbKaryawanJurusan.checked) {
            const data = {
              name: 'Karyawan',
              biayaSPP: sppKaryawanJurusan.value,
            };
            kelas.push(data);
          }
          if (cbOnlineJurusan.checked) {
            const data = {
              name: 'Online',
              biayaSPP: sppOnlineJurusan.value,
            };
            kelas.push(data);
          }

          jurusan.push({
            namaJurusan,
            jenjang,
            akreditasi,
            kelas,
          });
        });

        const formData = {
          name: fieldNamaKampus.value,
          description: fieldDeskripsi.value,
          city: fieldKota.value,
          alamat: fieldAlamat.value,
          telepon: fieldNoTelepon.value,
          email: fieldEmail.value,
          tahunBerdiri: fieldTahunBerdiri.value,
          linkPendaftaran: fieldPendaftaran.value,
          jenisKampus: selectJenisKampus.value,
          akreditasiKampus: selectAkreditasiKampus.value,
          statusPmb: selectStatusPMB.value,
          kelasTersedia: cbData,
          linkFb: fieldFb.value,
          linkIg: fieldIg.value,
          linkTwitter: fieldTwt.value,
          jurusan,
        };
        const postKampus = await RekompusSource.addKampus(formData);
      }
    });
  },
};

export default AddKampus;
