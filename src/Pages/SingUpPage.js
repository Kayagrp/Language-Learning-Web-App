import React from 'react';
import Footer from '../components/Footer';

const SingUpPage = () => {
  return (
    <div>

<div style={{position:"absolute"}} >
			<img   width={"1519px"}  src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwcHBw0HBwcHBwcHBw0HBwcHBw8ICQcNFREWFhURExMYKCggGBoxJxUfITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0NDw0PDysZFRk3LTc3LTcrLTcrKy03LS0rKy0rKy0tKy0rKysrKysrKystKysrKysrKystLSsrKzctLf/AABEIALcBEwMBIgACEQEDEQH/xAAaAAEBAQADAQAAAAAAAAAAAAACAQADBAUG/8QAFhABAQEAAAAAAAAAAAAAAAAAAAER/8QAGgEBAQEBAQEBAAAAAAAAAAAAAgEABQMGBP/EABYRAQEBAAAAAAAAAAAAAAAAAAABEf/aAAwDAQACEQMRAD8A9yHIkhSP1V+2UoUSHIJyrCkSFBr0lWHEkKC9JVhRIUGvSVYUSFBPShRIUYaUKDCiBThQYUQaUOBCjDThQIUQThShKUrDTlLXHq6w4eroa2o2Fo2po2s2LaNrWhahSNaNrWjaxyMw6jE+YhxIUdB+KUpCiQoNekqw4kKCcqwokKDXpKsKJCg16SrCiRYJylCiQozVYcCFEE4UCFEo04sGFEEoUCFKyUpSlCLqCeroausmFraOpqNhalqaNrLi2ja1o2sUjWha1o2oUjaw6zFj5+FEhx0XOlWFEhwacqwokKDXpKsKJCiU5VixosF6SlFiQoNOVYUGFBIosSLGQoUGLGEoUFYiFFFUQtXR1tRMPW0dbWTC1tHU1FwtS0dS1lxbRta0bWWRrQta0bUORdYNZlx40ODDjo1yZVhwYcE5VhRIUSvSVYUSFBOVYsSFEOVYsSEL0lWLEijhyrCglEVYqKiEoqyEwrqIWro62oha2jrajFqaOtrLi6lqalqLjWja1o2sUjWja1o2sUjawazFjzYcGHHScSVYcGHBwpVhRIUE5VixosTDlWFEiwcekqqyocrKywcOVlRRw5VVFRVUVRFXRZmJtHW1mLW0dbUxsXU1NTUXF1LUtS1FxbRtS0bUKRbQta0bWKRtYdZix04cGHHTfPyrDgwohSlCiRYNhyrCiQohyrFiRYOHKsWIqYcqqiicrK0YbDlZUZDlVUZCVkZGVtRNRl1tTU1lXU1NS1FW1LUtS1Fa0bWtG1Cka0bWtG1DkbWHWZXDDgwo6uPmpShRIUEpVhRIUQ5VixosTClWKhDhysrMmHKrMw4cqszIcrMzDhyszImHKrIw4crMiamKupramoq6NraNrEtqWpaNqLIto2taNqE1oWraFqE2smsy60KDDjqvlZShRIUQ5VhRIUHClWLEhIUrKyocrKijhyszMhyqyMmHKqMw4crMyJhyszIOFK2oyJhyslbU1MKVqlrUamFrWpa1G1MLWtG1rRtZdaja1o2tjayhqti65IcGFHTx8tpQ4MKIWlFjRYhSrFaKmHKrMqYUrMyicqKzJhyozMhSszIOHKyMyYcrIyIcrIyVMKVqNWjRw5WqWtRrLrWpalS1C1rRta0bUxda0LVtG1sXW1h1mxtdmHAhx0nzGlDgw4xasKJCiYWrFjRUKVlZkKVmZhw5WZmQ5UZkTClZFQcOVkZEOVkZKmHKw1ko4UrWpWo2thStalrWjamFrWja1qWpi6lo1bRtbC1KNa0bUxtZh1mxdd6HAhx0nzOnCgw4haUKDCiLqwkhNhSszMOFKzMyHKiKiYcrVGQcOVkZEKVkZKmHKw1rUqHK1StRtQpWtS1rRtTCla0bVtG1MLWtG1rRtTF1rRta0bWxda0LVtC1F1tYdZsXXoxyRmdF82cOMyKcKMyEUJmZWZmQolZmSnESownGGqyU4KVmQolFmE4lS1malBtSswnBtG1mQolG1mZRtG1mQhtG1mZRtC1mRR1WZmf/2Q=="></img>

		</div>
    <div>aa</div>

      <div className="container col-lg-6  text-dark  text-dark shadow bg-light" style={{marginTop:"5%",borderRadius:"50px",backgroundColor:"white",opacity:"0.87"}}>
        <br />
        <br />
        <form action="home.html" method="POST">
          <div class="row">
            <div class="form-group col-lg-6 mx-auto">
              <label className="my-3" for="rname">
                İsim Soyisim:
              </label>
              <input
                type="text"
                class="form-control"
                name="register-name"
                id="rname"
                placeholder="İsminiz ve soyisminiz..."
                required
              />
            </div>
          </div>

          <div class="row">
            <div class="form-group col-lg-6 mx-auto">
              <label for="rmail">E-mail:</label>
              <input
                type="email"
                class="form-control"
                name="register-email"
                id="rmail"
                placeholder="example@example.com"
                required
              />
            </div>
          </div>

          <div class="row">
            <div class="form-group col-lg-6 mx-auto">
              <label for="rpassword">Şifre:</label>
              <input
                type="password"
                class="form-control"
                name="register-password"
                id="rpassword"
                placeholder="Şifreniz..."
                required
              />
            </div>
          </div>

          <div class="row">
            <div class="form-group col-lg-6 mx-auto">
              <label for="dofbirth"> Doğum Tarihi:</label>
              <input
                type="date"
                class="form-control"
                name="register-dateofbirth"
                id="dofbirth"
              />
            </div>
          </div>

          <div class="row">
            <div class="form-group col-lg-6 mx-auto">
              <label for="telnumber"> Telefon Numarası:</label>
              <input
                type="tel"
                name="telno"
                class="form-control"
                id="telnumber"
                placeholder="En fazla 11 basamaklı olabilir..."
                required
                maxlength="11"
                pattern="[0-9]{11}"
              />
            </div>
          </div>

          <p class="text-center py-4">
            <a
              class="btn btn-primary mx-2 face"
              role="button"
              href="/"
              onClick={() =>
                alert('This function has not been implemented yet!')
              }
            >
              Kaydet
            </a>
            <br />
            <br />
          </p>
        </form>
      </div>
      <br /><br /><br /><br /><br /><br /><br /><br /><br />
      <Footer />
    </div>
  );
};

export default SingUpPage;
