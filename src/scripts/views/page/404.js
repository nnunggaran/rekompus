const NotFound = {
  async render() {
    return `
      <section class="NotFound container-fluid">
        <div class="row mt-5">        
          <div class="col-lg-6 mx-auto">
            <h4 class="text-heading not-found mt-5 text-center">Halaman tidak tersedia</h4>
            <p class="text-muted">Bila ada kendala terkait halaman yang anda akses, Hubungi admin rekompus dibawah ini.</p>
            <div class="text-center">
              <a href="mailto:contact@rekompus.id" target="_blank" class="btn btn-info text-center">
                Contact Admin
              </a>
            </div>
            <img src="./images/404.png" alt="404 Not Found" class="w-100 p-5 mt-1 shadow">
          </div>          
        </div>
      </section>
      <div id="loading-container">
        <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
      </div>  
    `;
  },
  async afterRender() {
    const loadingContainer = document.getElementById('loading-container');
    loadingContainer.classList.add('show');
    setTimeout(() => {
      loadingContainer.classList.remove('show');
    }, 300);
    scrollTo({ top: 0 });
  },
};

export default NotFound;
