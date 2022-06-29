const selectJenisKampusItem = () => `
  <option value="PTN">PTN</option>
  <option value="PTS">PTS</option>
`;
const selectKotaItem = () => `
  <option value="Medan">Medan</option>
  <option value="Jakarta">Jakarta</option>
  <option value="Bandung">Bandung</option>
  <option value="Surabaya">Surabaya</option>
`;

const selectKelasItem = () => `
  <option value="Reguler">Reguler</option>
  <option value="Karyawan">Karyawan</option>
  <option value="Online">Online</option>
`;

const selectAkreditasiItem = () => `
  <option value="A">A</option>
  <option value="B">B</option>
  <option value="C+">C+</option>
  <option value="C">C</option>
  <option value="Unggul">Unggul</option>
  <option value="Sangat Baik">Sangat Baik</option>
  <option value="Baik">Baik</option>
  <option value="Belum Terakreditasi">Belum Terakreditasi</option>
`;

const selectJenjangItem = () => `
  <option value="S1">S1</option>
  <option value="S2">S2</option>
  <option value="S3">S3</option>
  <option value="D3">D3</option>
  <option value="D4">D4</option>
`;

const selectPmbItem = () => `
  <option value="Buka">Buka</option>
  <option value="Tutup">Tutup</option>
`;

export {
  selectJenisKampusItem,
  selectKotaItem,
  selectKelasItem,
  selectAkreditasiItem,
  selectJenjangItem,
  selectPmbItem,
};
