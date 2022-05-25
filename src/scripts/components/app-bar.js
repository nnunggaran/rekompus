class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <nav class="navbar navbar-expand-lg navbar-light bg-header">
          <div class="container-fluid">
            <a class="title-header" href="#">Rekompus</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mb-2 mb-lg-0">
                <li class="navitem-1">
                  <a class="nav-link active" aria-current="page" href="#">Cari Kampus</a>
                </li>
                <li class="navitem-2">
                  <a class="nav-link active" aria-current="page" href="#">Cari Jurusan</a>
                </li>
              </ul>
              <form class="d-flex">
                  <button type="button" class="btn1 btn-outline-primary me-3">Daftar</button>
                  <button type="button" class="btn2 btn-outline-primary">Masuk</button>
              </form>
            </div>
          </div>
        </nav>
        `;
  }
}

customElements.define('app-bar', AppBar);