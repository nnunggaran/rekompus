const DetailJurusan = {
  async render() {
    return `
    <section class="hero-text container-fluid">
    <div class="row">
      <div class="col-md-12">
        <a href="#/kampus/:id">
          <span
            class="alert bg-primary border-2 border-white rounded-3 text-white fw-bold fs-5 py-0 px-2 d-inline-block"><i class="fa fa-school"></i> Nama Universitas</span>
        </a>
      </div>

      <div class="col-md-12">
        <h4 class="fw-bold text-white fs-3 pb-2"><i class="fa fa-graduation-cap"></i> Nama Jurusan</h4>
      </div>

      <div class="col-md-12">
        <span
          class="alert bg-transparent border-2 border-white rounded-pill text-white fw-bold py-1 px-3 d-inline-block my-1">S1</span>
        <span
          class="alert bg-transparent border-2 border-white rounded-pill text-white fw-bold py-1 px-2 d-inline-block my-1">Kelas
          Reguler</span>
        <span
          class="alert bg-transparent border-2 border-white rounded-pill text-white fw-bold py-1 px-2 d-inline-block my-1">Kelas
          Karyawan</span>
        <span
          class="alert bg-transparent border-2 border-white rounded-pill text-white fw-bold py-1 px-2 d-inline-block my-1">Kelas
          Umum</span>
      </div>
    </div>
    </section>
    <section id="detail-jurusan" class="container-fluid">
    <div class="row">
      <div class="col-md-8 mt-3">
        <div class="card bg-info border-orange">
          <div class="card-header alert-info text-center">
            <div class="d-flex scroll-x">
              <span><a href="/#/jurusan/id#pembelajaran" class="text-muted fw-bold text-decoration-none d-inline-block"
                  id="scrollKampus">Pembelajaran</a></span>
              <span><a href="/#/jurusan/id#deskripsi" class="text-muted fw-bold text-decoration-none d-inline-block"
                  id="scrollJurusan">Deskripsi Jurusan</a></span>
              <span><a href="/#/jurusan/id#prospek-karir" class="text-muted fw-bold text-decoration-none d-inline-block"
                  id="scrollProspek">Prospek Karir</a></span>              
            </div>

          </div>
          <div class="card-body bg-light br row m-2">
            <h4 class="text-muted text-center mb-2"><u>Yang dipelajari</u></h4>
            <div id="yangDipelajari" class="col-md-12 mb-4 d-flex p-3 alert-info ">
              <div class="row">
                <div class="col-sm-6 col-md-4 my-2"><i class="fa fa-book fa-xl text-primary" aria-hidden="true"></i>
                  Hukum Perdata</div>
                <div class="col-sm-6 col-md-4 my-2"><i class="fa fa-book fa-xl text-primary" aria-hidden="true"></i>
                  Hukum Perdata</div>
                <div class="col-sm-6 col-md-4 my-2"><i class="fa fa-book fa-xl text-primary" aria-hidden="true"></i>
                  Hukum Perdata</div>
                <div class="col-sm-6 col-md-4 my-2"><i class="fa fa-book fa-xl text-primary" aria-hidden="true"></i>
                  Hukum Perdata</div>
                <div class="col-sm-6 col-md-4 my-2"><i class="fa fa-book fa-xl text-primary" aria-hidden="true"></i>
                  Hukum Perdata</div>
              </div>
            </div>
            <h4 class="text-muted text-center mb-2"><u>Deskripsi Jurusan</u></h4>
            <div class="col-md-12 mb-4 d-flex justify-content-around alert-info p-3" id="info-kampus">
              <div class="row">
                <div class="col-md-12">
                  <p id="description-jurusan" class="desc-jurusan">Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Fugit accusamus
                    dolores, vitae ullam
                    necessitatibus perspiciatis atque dignissimos ut magni esse corrupti laborum quasi ipsa quisquam
                    sunt beatae veritatis porro a dolore et rem assumenda dicta. Sint ab accusantium saepe
                    exercitationem porro! Voluptatibus asperiores, itaque placeat consectetur laborum iusto est
                    consequuntur.
                </div>
              </div>
            </div>
            <h4 class="text-muted text-center mb-2"><u>Prospek Karir</u></h4>

            <div id="prospekKarir" class="col-md-12 mb-4 d-flex p-3 alert-info ">
              <div class="row">
                <div class="col-sm-6 col-md-4 my-2"><i class="fa fa-briefcase fa-xl text-primary"
                    aria-hidden="true"></i> Hukum Perdata</div>
                <div class="col-sm-6 col-md-4 my-2"><i class="fa fa-briefcase fa-xl text-primary"
                    aria-hidden="true"></i> Legal Officer</div>
                <div class="col-sm-6 col-md-4 my-2"><i class="fa fa-briefcase fa-xl text-primary"
                    aria-hidden="true"></i> Hakim</div>
                <div class="col-sm-6 col-md-4 my-2"><i class="fa fa-briefcase fa-xl text-primary"
                    aria-hidden="true"></i> Diplomat</div>
                <div class="col-sm-6 col-md-4 my-2"><i class="fa fa-briefcase fa-xl text-primary"
                    aria-hidden="true"></i> Hukum Perdata</div>
                <div class="col-sm-6 col-md-4 my-2"><i class="fa fa-briefcase fa-xl text-primary"
                    aria-hidden="true"></i> Legal Officer</div>
                <div class="col-sm-6 col-md-4 my-2"><i class="fa fa-briefcase fa-xl text-primary"
                    aria-hidden="true"></i> Hakim</div>
                <div class="col-sm-6 col-md-4 my-2"><i class="fa fa-briefcase fa-xl text-primary"
                    aria-hidden="true"></i> Diplomat</div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div class="col-md-4 mt-3">
        <div class="row">
          <div class="col-md-12">
            <div class="card border-orange">
              <div class="card-body">
                <div class="row">
                  <div class="col-md-12 col-lg-4">
                    <img src="./favicon.png" alt="" class="thumb-img-detail">
                  </div>
                  <div class="col-md-12 col-lg-8">
                    <div class="row">
                      <div class="col-md-12 col-lg-12">
                        <h5 class="text-heading">Nama Universitas</h5>
                      </div>
                      <div class="col-md-12 col-lg-12 mb-2">
                        <span class="alert alert-info px-2 py-1 d-inline-block rounded-pill my-1">Akreditasi: A</span>
                        <span class="alert alert-info px-3 py-1 d-inline-block rounded-pill my-1">PTS</span>
                      </div>
                      <div class="col-md-12 col-lg-12 mb-2">
                        <span class="alert alert-success rounded-pill px-2 py-1">Dibuka</span>                        
                      </div>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <a href="/#/">
                      <button class="btn btn-primary w-100 mt-1 mb-1 p-2"><i class="fab fa-wpforms fa-xl"></i> Link
                        Pendaftaran</button></a>
                  </div>
                  <div class="col-md-12">
                    <a href="/#/">
                      <button class="btn btn-success w-100 mt-1 mb-1 p-2"><i class="fab fa-whatsapp fa-xl"
                          aria-hidden="true"></i> Tanya via WhatsApp</button></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
    `;
  },

  async afterRender() {
    const heroText = document.querySelector('.hero-text');
    heroText.innerHTML += heroWithButton(data);

    const yangDipelajari = document.getElementById('yangDipelajari');
    yangDipelajari.innerHTML += itemList(data);

    const deskripsiJurusan = document.getElementById('deskripsi-jurusan');
    deskripsiJurusan.innerHTML += descriptionText(data);

    const prospekKarir = document.getElementById('prospekKarir');
    prospekKarir.innerHTML += itemList(data);

    const ringkasanKampus = document.getElementById('ringkasanKampus');
    ringkasanKampus.innerHTML += ringkasanKampus(data);
  },
};

export default DetailJurusan;
