const About = {
  async render() {
    return `
    <section class="hero container-fluid row">
      <div class="col-sm-12 col-md-7 my-2 mx-auto">
          <h1 class="fw-bold text-secondary">Tentang Rekompus</h1>
          <hr>
          <p align="justify">Rekompus adalah sebuah website yang memberikan kemudahan bagi para siswa SMA sederajat untuk mencari informasi mengenai perguruan tinggi di Indonesia beserta program studinya.</p>

          <p align="justify">Rekompus ingin membantu para siswa melihat informasi perguruan tinggi beserta program studinya dengan mudah, nyaman, dan efektif hanya cukup mengaksesnya lewat website tanpa datang ke tiap perguruan tinggi yang tentunya menyita banyak waktu dan tenaga ataupun harus mencari melalui search engine dan mengunjungi satu persatu. Rekompus berkontribusi untuk pemerintah dalam meningkatkan Angka Partisipasi Kasar Perguruan Tinggi, dan berperan dalam meningkatkan kualitas pengembangan manusia Indonesia.
          </p>     
          <hr>                        
      </div>
      <div class="col-sm-12 col-md-5 my-2 mx-auto">
        <img src="./favicon.png" alt="rekompus-logo" class="hero-image w-100 rounded">
      </div>
      <hr class="mt-4">
    </section>
    <div class="container-fluid row mt-5">
      <h2 class="fw-bold text-muted text-center text-secondary">Rekompus Contributors</h2>
      <hr>  
      <div class="col-sm-6 col-md-4 col-lg-3 my-1">
        <div class="card shadow">
          <img src="./images/nosef-nunggaran.jpeg" class="card-img-top" alt="user-profile">
          <div class="card-body" style="height: 240px;">
            <h5 class="card-title">Nosef Nunggaran</h5>
            <p class="card-text">Berkontribusi dalam pengembangan Back-End dan pembuatan API</p>
            <a href="https://www.linkedin.com/in/nosef-nunggaran/" class="btn btn-primary" target="_blank"><i class="fa-brands fa-linkedin"></i> </a>
            <a href="https://github.com/nnunggaran" class="btn btn-dark" target="_blank"><i class="fa-brands fa-github"></i> 
            </a>
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-md-4 col-lg-3 my-1">
        <div class="card shadow">
          <img src="./images/nurul-huda.png" class="card-img-top" alt="user-profile">
          <div class="card-body" style="height: 240px;">
            <h5 class="card-title">Nurul Huda</h5>
            <p class="card-text">Berkontribusi dalam pengembangan Front-End Web dan Consume API</p>
            <a href="https://www.linkedin.com/in/nurulhuda-jombang/" class="btn btn-primary" target="_blank"><i class="fa-brands fa-linkedin"></i> </a>
            <a href="https://github.com/rulhuda" class="btn btn-dark" target="_blank"><i class="fa-brands fa-github"></i> 
            </a>
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-md-4 col-lg-3 my-1">
        <div class="card shadow">
          <img src="./images/raihan-putro.jpeg" class="card-img-top" alt="user-profile">
          <div class="card-body" style="height: 240px;">
            <h5 class="card-title">Raihan Putro Maulana Rizky</h5>
            <p class="card-text">Berkontribusi dalam pengembangan Front-End Web dan Data Rekompus</p>
            <a href="https://www.linkedin.com/in/raihanputro/" class="btn btn-primary" target="_blank"><i class="fa-brands fa-linkedin"></i> </a>
            <a href="https://github.com/raihanputro" class="btn btn-dark" target="_blank"><i class="fa-brands fa-github"></i> 
            </a>
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-md-4 col-lg-3 my-1">
        <div class="card shadow">
          <img src="./images/zahra-amalia.jpeg" class="card-img-top" alt="user-profile">
          <div class="card-body" style="height: 240px;">
            <h5 class="card-title">Zahra Amalia Nur Sabrina</h5>
            <p class="card-text">Berkontribusi dalam pengembangan Front-End Web dan Data Rekompus</p>
            <a href="https://www.linkedin.com/in/zahra-amalia-nur-sabrina-6a6468232/" class="btn btn-primary" target="_blank"><i class="fa-brands fa-linkedin"></i> </a>
            <a href="https://github.com/Zahraamalia" class="btn btn-dark" target="_blank"><i class="fa-brands fa-github"></i> 
            </a>
          </div>
        </div>
      </div>
    </div>

    <div id="loading-container">
      <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
    </div>
    `;
  },

  async afterRender() {
    const loadingContainer = document.getElementById('loading-container');
    scrollTo({ top: 0 });
    loadingContainer.classList.add('show');

    const btnEksplor = document.getElementById('btn-eksplor');
    loadingContainer.classList.remove('show');
    btnEksplor.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: kampusRekomendasiEl.offsetTop - 35 });
    });
  },
};

export default About;
