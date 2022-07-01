class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <nav class="navbar navbar-expand-lg navbar-light bg-header fixed-top mb-3">
          <div class="container-fluid">
            <a class="title-header" href="/">Rekompus</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse ms-auto" id="navbarSupportedContent">
              <ul class="navbar-nav mb-2 mb-lg-0">
                <li class="navitem-1">
                  <a class="nav-link active fw-bold text-muted" aria-current="page" href="/#/kampus">Cari Kampus</a>
                </li>
                <li class="navitem-2">
                  <a class="nav-link active fw-bold text-muted" aria-current="page" href="/#/about">Tentang Rekompus</a>
                </li>
              </ul>
              <form class="d-flex ms-auto" id="btnAppbar">
                  <button type="button" class="btn1 btn-outline-primary me-3"><a class="nav-link active text-white" aria-current="page" href="#/daftar">Daftar</a></button>
                  <button type="button" class="btn2 btn-outline-primary"><a class="nav-link active" aria-current="page" href="#/login">Masuk</a></button>
              </form>
            </div>
          </div>
        </nav>
        `;
  }
}

customElements.define('app-bar', AppBar);
