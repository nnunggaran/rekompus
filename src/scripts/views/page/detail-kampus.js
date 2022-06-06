// import UrlParser from '../../routes/url-parser';
// import { createKampusDetailTemplate } from '../templates/template-creator';

const DetailKampus = {
  async render() {
    return `
    <section id="detail-kampus" class="row">
      <div class="col-md-8 mt-3">
        <div class="card bg-info border-orange">
          <div class="card-header alert-info text-center">
            <div class="d-flex scroll-x">
              <span><a href="/#/kampus/id#info-kampus" class="text-muted fw-bold" id="scrollKampus">Info Kampus</a></span>
              <span><a href="/#/kampus/id#jurusan-tersedia" class="text-muted fw-bold" id="scrollJurusan">Jurusan Tersedia</a></span>
              <span><a href="/#/kampus/id#review" class="text-muted fw-bold" id="scrollReview">Review</a></span>              
            </div>

          </div>
          <div class="card-body bg-light br row m-2">
            <h4 class="text-muted text-center mb-2"><u>Kelas Tersedia</u></h4>
            <div class="col-md-12 mb-4 d-flex p-3 alert-info scroll-x">
              <span class="text-muted">Reguler</span>
              <span class="text-muted">Karyawan</span>
              <span class="text-muted">Online</span>
            </div>
            <h4 class="text-muted text-center mb-2"><u>Tentang Kampus</u></h4>
            <div class="col-md-12 mb-4 d-flex justify-content-around alert-info p-3" id="info-kampus">
              <div class="row">
                <div class="col-md-12">
                  <p class="desc-kampus">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit accusamus dolores, vitae ullam
                    necessitatibus perspiciatis atque dignissimos ut magni esse corrupti laborum quasi ipsa quisquam
                    sunt beatae veritatis porro a dolore et rem assumenda dicta. Sint ab accusantium saepe
                    exercitationem porro! Voluptatibus asperiores, itaque placeat consectetur laborum iusto est
                    consequuntur.
                </div>
                <div class="col-md-6 mt-2">
                  <div class="group-text d-flex">
                    <h6 class="text-heading">Tahun Berdiri</h6>
                    <span class="text-muted ms-auto">1999</span>
                  </div>
                  <div class="group-text d-flex">
                    <h6 class="text-heading">No Telepon</h6>
                    <span class="text-muted ms-auto">08123456789</span>
                  </div>
                  <div class="group-text d-flex">
                    <h6 class="text-heading">Email</h6>
                    <span class="text-muted ms-auto">kampus@ac.id</span>
                  </div>
                  <div class="group-text d-flex">
                    <h6 class="text-heading">Alamat</h6>
                    <span class="text-muted ms-auto" style="text-align: right;">Lorem ipsum dolor sit amet, consectetur
                      adipisicing elit. Enim, magni harum dolorem expedita earum eius magnam neque porro sed eligendi
                      dolor vero sequi rem, iusto ex est sapiente quo libero.</span>
                  </div>
                </div>
                <div class="col-md-6 mt-2">
                  <div class="group-text">
                    <h6 class="text-heading">Website</h6>
                    <p class="text-muted"><a href="https://universitas.ac.id">https://universitas.ac.id</a></p>
                  </div>
                  <div class="group-text">
                    <h6 class="text-heading">Media Sosial</h6>
                    <a href="www.facebook.com"><i class="fab fa-facebook-square fa-2x" aria-hidden="true"></i></a>
                    <a href="www.twitter.com"><i class="fab fa-twitter-square fa-2x" aria-hidden="true"></i></a>
                    <a href="www.instagram.com"><i class="fab fa-instagram-square fa-2x" aria-hidden="true"></i></a>
                  </div>
                </div>
              </div>
            </div>
            <h4 class="text-muted text-center mb-2"><u>Jurusan Tersedia</u></h4>
            <div class="col-md-12 mb-4 alert-info p-3" id="jurusan-tersedia">
              <div class="row">
                <div class="col-md-6">
                  <div class="input-group mb-2">
                    <div class="input-group-text">
                      <i class="fas fa-magnifying-glass"></i>
                    </div>
                    <input type="search" class="form-control" id="jurusanField" placeholder="Masukkan Jurusan">
                  </div>
                </div>
                <div class="col-md-6 mt-2">
                  <h5>5 dari 12 Jurusan ditampilkan</h5>
                </div>
                <div class="col-md-12">
                  <div class="row border-orange">
                    <div class="col-md-12">
                      <div class="card border-orange mt-2 mb-2">
                        <div class="card-body d-flex m-0 p-2 scroll-x" id="jurusan-tersedia">
                          <div class="group-text">
                            <h5 class="text-heading">S1 - Pariwisata</h5>
                            <span class="alert alert-info rounded-pill p-1 fs-6">Akreditasi: A</span>
                          </div>
                          <div class="group-text ps-1 ms-auto">
                            <p class="text-muted">Biaya SPP</p>
                            <h6 class="text-heading">Rp. 11.250.000</h6>
                          </div>
                        </div>
                        <div class="card-footer bg-primary">
                          <a href="/#/kampus-rekomendasi/id">
                            <button class="btn btn-primary fw-bold w-100">Detail</button>
                          </a>
                        </div>
                      </div>
                    </div> 
                    <div class="col-md-12">
                      <div class="card border-orange mt-2 mb-2">
                        <div class="card-body d-flex m-0 p-2 scroll-x" id="jurusan-tersedia">
                          <div class="group-text">
                            <h5 class="text-heading">S1 - Pariwisata</h5>
                            <span class="alert alert-info rounded-pill p-1 fs-6">Akreditasi: A</span>
                          </div>
                          <div class="group-text ps-1 ms-auto">
                            <p class="text-muted">Biaya SPP</p>
                            <h6 class="text-heading">Rp. 11.250.000</h6>
                          </div>
                        </div>
                        <div class="card-footer bg-primary">
                          <a href="/#/kampus-rekomendasi/id">
                            <button class="btn btn-primary fw-bold w-100">Detail</button>
                          </a>
                        </div>
                      </div>
                    </div> 
                    <div class="col-md-12">
                      <div class="card border-orange mt-2 mb-2">
                        <div class="card-body d-flex m-0 p-2 scroll-x" id="jurusan-tersedia">
                          <div class="group-text">
                            <h5 class="text-heading">S1 - Pariwisata</h5>
                            <span class="alert alert-info rounded-pill p-1 fs-6">Akreditasi: A</span>
                          </div>
                          <div class="group-text ps-1 ms-auto">
                            <p class="text-muted">Biaya SPP</p>
                            <h6 class="text-heading">Rp. 11.250.000</h6>
                          </div>
                        </div>
                        <div class="card-footer bg-primary">
                          <a href="/#/kampus-rekomendasi/id">
                            <button class="btn btn-primary fw-bold w-100">Detail</button>
                          </a>
                        </div>
                      </div>
                    </div> 
                    <div class="col-md-12">
                      <div class="card border-orange mt-2 mb-2">
                        <div class="card-body d-flex m-0 p-2 scroll-x" id="jurusan-tersedia">
                          <div class="group-text">
                            <h5 class="text-heading">S1 - Pariwisata</h5>
                            <span class="alert alert-info rounded-pill p-1 fs-6">Akreditasi: A</span>
                          </div>
                          <div class="group-text ps-1 ms-auto">
                            <p class="text-muted">Biaya SPP</p>
                            <h6 class="text-heading">Rp. 11.250.000</h6>
                          </div>
                        </div>
                        <div class="card-footer bg-primary">
                          <a href="/#/kampus-rekomendasi/id">
                            <button class="btn btn-primary fw-bold w-100">Detail</button>
                          </a>
                        </div>
                      </div>
                    </div> 
                    <div class="col-md-12">
                      <div class="card border-orange mt-2 mb-2">
                        <div class="card-body d-flex m-0 p-2 scroll-x" id="jurusan-tersedia">
                          <div class="group-text">
                            <h5 class="text-heading">S1 - Pariwisata</h5>
                            <span class="alert alert-info rounded-pill p-1 fs-6">Akreditasi: A</span>
                          </div>
                          <div class="group-text ps-1 ms-auto">
                            <p class="text-muted">Biaya SPP</p>
                            <h6 class="text-heading">Rp. 11.250.000</h6>
                          </div>
                        </div>
                        <div class="card-footer bg-primary">
                          <a href="/#/kampus-rekomendasi/id">
                            <button class="btn btn-primary fw-bold w-100">Detail</button>
                          </a>
                        </div>
                      </div>
                    </div> 
                  </div>
                  <nav aria-label="Page navigation example mb-2">
                    <ul class="pagination pagination-md justify-content-center mt-2">
                      <li class="page-item">
                        <a class="page-link" href="#" aria-label="Previous">
                          <span aria-hidden="true">Previous</span>
                        </a>
                      </li>
                      <li class="page-item"><a class="page-link" href="#">1</a></li>
                      <li class="page-item"><a class="page-link" href="#">2</a></li>

                      <li class="page-item">
                        <a class="page-link" href="#" aria-label="Next">
                          <span aria-hidden="true">Next</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
            <h4 id="review" class="text-center mb-2">Form Review</h4>
            <hr>
            <form id="postReview">
              <input type="hidden" id="txtId" value=":id">
              <label for="txtName">Nama anda :</label>
              <br>
              <input type="text" id="txtNama" placeholder="Masukkan nama anda..." class="form-control mb-2" value="user" readonly>
              <label for="txtReview">Review anda :</label>
              <textarea id="txtReview" placeholder="Masukkan review anda..." class="form-control mb-2"></textarea>
              <button type="submit" class="btn btn-primary">Post</button>
              <hr>
            </form>
            
            <br>
            <h4 class="text-center mb-2">User Reviews</h4>
            <hr>
            <div class="container-reviews">
              <div class="row">
                <div class="col-3 col-sm-3 col-md-2 col-lg-2">
                  <img src="./favicon.png" alt="foto-profil" class="rounded-circle w-100">
                </div>
                <div class="col-9 col-sm-9 col-md-10 col-lg-10">
                  <div class="row">
                    <div class="col-md-12">
                    <h5 class="text-heading">Name</h5>
                    </div>
                    <div class="col-md-12">
                    <p class="text-muted">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus quibusdam natus ullam. Qui modi doloremque cumque necessitatibus ab incidunt pariatur eligendi iste. Molestiae, cumque delectus dolor ut dicta error provident qui unde! Ut accusantium necessitatibus labore, repellat quisquam error quibusdam eveniet voluptas accusamus maiores delectus consequuntur assumenda, impedit neque id.</p>
                    </div>
                    <div class="col-md-12">
                    <p class="text-primary">Date</p>
                    </div>
                  </div>
                </div>
                <hr>
              </div>
              <div class="row">
                <div class="col-3 col-sm-3 col-md-2 col-lg-2">
                  <img src="./favicon.png" alt="foto-profil" class="rounded-circle w-100">
                </div>
                <div class="col-9 col-sm-9 col-md-10 col-lg-10">
                  <div class="row">
                    <div class="col-md-12">
                    <h5 class="text-heading">Name</h5>
                    </div>
                    <div class="col-md-12">
                    <p class="text-muted">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus quibusdam natus ullam.</p>
                    </div>
                    <div class="col-md-12">
                    <p class="text-primary">Date</p>
                    </div>
                  </div>
                </div>
                <hr>
              </div>
              <div class="row">
                <div class="col-3 col-sm-3 col-md-2 col-lg-2">
                  <img src="./favicon.png" alt="foto-profil" class="rounded-circle w-100">
                </div>
                <div class="col-9 col-sm-9 col-md-10 col-lg-10">
                  <div class="row">
                    <div class="col-md-12">
                    <h5 class="text-heading">Name</h5>
                    </div>
                    <div class="col-md-12">
                    <p class="text-muted">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus quibusdam natus ullam. Qui modi doloremque cumque necessitatibus ab incidunt pariatur eligendi iste.</p>
                    </div>
                    <div class="col-md-12">
                    <p class="text-primary">Date</p>
                    </div>
                  </div>
                </div>
                <hr>
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
    </section>
    `;
  },
  async afterRender() {
    // const url = UrlParser.parseActiveUrlWithoutCombiner();
    // const kampus = await KampusSource.detailKampus(url.id);
    // const kampusContainer = document.querySelector('#detail-kampus');
    // kampusContainer.innerHTML = createKampusDetailTemplate(kampus);

    const scrollKampus = document.getElementById('scrollKampus');
    const scrollJurusan = document.getElementById('scrollJurusan');
    const scrollReview = document.getElementById('scrollReview');

    const infoKampus = document.getElementById('info-kampus');
    const jurusanTersedia = document.getElementById('jurusan-tersedia');
    const containerReviews = document.querySelector('.container-reviews');

    scrollKampus.addEventListener('click', () => {
      window.scrollTo({ top: infoKampus.offsetTop - 20 });
    });
    scrollJurusan.addEventListener('click', () => {
      window.scrollTo({ top: jurusanTersedia.offsetTop - 20 });
    });
    scrollReview.addEventListener('click', () => {
      const mediaQueryLarge = window.matchMedia('(min-width: 760px)');
      const checkMedia = mediaQueryLarge.matches;
      if (checkMedia) {
        window.scrollTo({ top: containerReviews.offsetTop - 50 });
      } else {
        window.scrollTo({
          top: (2 * containerReviews.offsetHeight) + 1200,
        });
      }
    });
  },
};

export default DetailKampus;
