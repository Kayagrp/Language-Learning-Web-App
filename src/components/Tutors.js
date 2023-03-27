import React from 'react';
import Image from '../Images/ProfilePicture.png';
import ImageTeacher from '../Images/teacher.png';
import ImageTeacher2 from '../Images/teacher2.png';
import ImageTeacher3 from '../Images/teacher3.png';
import ImageTeacher4 from '../Images/teacher4.png';

const Tutor = () => {
  return (
    <div className="container mb-4 ">
      <div class="list-group ">
        <div
          className="bg-primary text-white"
          style={{
            borderRadius: '30px 30px 0px 0px',
          }}
        >
          <h6 className="fs-6 my-2 ">Eğitmenler ile şimdi iletişime geçin!</h6>
        </div>
        <a
          class="list-group-item list-group-item-action "
          type="button"
          aria-current="true"
          onClick={() => alert('This function has not been implemented yet!')}
        >
          <div class="d-flex w-100 justify-content-between ">
            <h5 class="mb-1">Juan Telleś</h5>
            <small>İletişime geçmek için tıkla! </small>
          </div>
          <div className="content float-start my-2">
            <img
              src={ImageTeacher}
              width="50"
              height="50"
              alt=""
              className="rounded-circle"
            />
            <div className="text">
              <div className="rating-wrap">
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
              </div>
            </div>
          </div>
        </a>
        <a
          class="list-group-item list-group-item-action"
          onClick={() => alert('This function has not been implemented yet!')}
          type="button"
        >
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1"> Evelyn Green</h5>
            <small class="text-muted float-right">
              İletişime geçmek için tıkla!{' '}
            </small>
          </div>
          <div className="content float-start my-2">
            <img
              src={ImageTeacher3}
              width="50"
              height="50"
              alt=""
              className="rounded-circle"
            />
            <div className="text">
              <div className="rating-wrap">
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
              </div>
            </div>
          </div>
        </a>
        <a
          class="list-group-item list-group-item-action"
          onClick={() => alert('This function has not been implemented yet!')}
          type="button"
        >
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1"> Roberto Byrd</h5>
            <small class="text-muted">İletişime geçmek için tıkla! </small>
          </div>
          <div className="content float-start my-2">
            <img
              src={ImageTeacher2}
              width="50"
              height="50"
              alt=""
              className="rounded-circle"
            />
            <div className="text">
              <div className="rating-wrap">
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
              </div>
            </div>
          </div>
        </a>
        <a
          class="list-group-item list-group-item-action"
          onClick={() => alert('This function has not been implemented yet!')}
          type="button"
        >
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1"> Ethan Harvey</h5>
            <small class="text-muted">İletişime geçmek için tıkla! </small>
          </div>
          <div className="content float-start my-2">
            <img
              src={ImageTeacher4}
              width="50"
              height="50"
              alt=""
              className="rounded-circle"
            />
            <div className="text">
              <div className="rating-wrap">
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Tutor;
