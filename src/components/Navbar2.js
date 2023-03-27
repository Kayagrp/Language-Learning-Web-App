import React from 'react';
import Image from '../Images/BrandImage.PNG';

const Navbar2 = (props) => {
  let navbarLogo = Image;
  return (
    <div className="navbar navbar-expand-lg navbar-dark bg-white sticky-top">
      <a className="navbar-brand" href="/">
        <img
          className="navbarLogo"
          src={navbarLogo}
          width="155"
          height="60"
          alt=""
        />
      </a>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link text-dark" href="/">
              Ana Sayfa{' '}
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-dark" type="button" href="/login">
              Dersler
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link text-dark"
              onClick={() =>
                alert('This function has not been implemented yet!')
              }
              type="button"
            >
              Testler
            </a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle text-dark"
              id="navbarDarkDropdownMenuLink"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Daha Fazlası
            </a>
            <ul
              class="dropdown-menu dropdown-menu-dark"
              aria-labelledby="navbarDarkDropdownMenuLink"
            >
              <li>
                <a
                  class="dropdown-item"
                  onClick={() =>
                    alert('This function has not been implemented yet!')
                  }
                  type="button"
                >
                  Hakkımızda
                </a>
              </li>
              <li>
                <a
                  class="dropdown-item"
                  onClick={() =>
                    alert('This function has not been implemented yet!')
                  }
                  type="button"
                >
                  Bizimle İletişime Geç
                </a>
              </li>
              <li>
                <a
                  class="dropdown-item"
                  onClick={() => {
                    window.localStorage.removeItem('t1');
                    window.location.reload();
                  }}
                  type="button"
                >
                  İlerlemeyi Sıfırla
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="navbar-nav ml-auto d-flex">
        
        <a
          href="/signup"
          class="btn btn-outline-primary me-2"
          role="button"
          aria-pressed="true"
          style={{margin:"2px"}}
        >
          Çıkış Yap
        </a>
      </div>
    </div>
  );
};

export default Navbar2;
