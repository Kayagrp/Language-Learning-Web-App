import React from 'react';
import Banner from '../Images/banner.png';
import SignUp from '../Images/signup.png';
import Login from '../Images/login.png';
const Carousel = () => {
  let BannerImg = Banner;
  let SignImg = SignUp;
  let LoginImg = Login;
  return (
    <div>
      <div
        id="carouselExampleDark"
        class="carousel carousel-dark slide"
        data-bs-ride="carousel"
        
      >
        <div class="carousel-indicators ">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="5000">
            <img src={BannerImg} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block mb-3">
              <h1 class="text-light display-4 navbarLogo2">Welcome to Peak Learning!</h1>
              <br></br>
              <p class="text-center lead text-light mb-5 navbarLogo2">
                Turkey's most preferred foreign language learning web site
              </p>
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="5000">
            <img src={LoginImg} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block mb-5 text-right">
              <h3 class="text-white">Already have an account ?</h3>
              <p class="text-white">
                Continue learning a language by logging into your account now!
              </p>
              <p>
                <a class="btn btn-lg btn-primary" role="button" href="/login">
                  Log In
                </a>
              </p>
            </div>
          </div>

          <div class="carousel-item" data-bs-interval="5000">
            <img src={SignImg} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block mb-5 text-left">
              <h3 class="text-white ">Don't have an account yet?</h3>
              <p class="text-white ">Create your own account now!</p>
              <p>
                <a class="btn btn-lg btn-primary" role="button" href="/signup">
                  Sign Up
                </a>
              </p>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
