import React from 'react';
import Image from '../Images/man2.png';
import Tutor from '../components/Tutors';

function UserInfo() {
  return (
    <div>
      <div class="card mb-2 shadow">
        <div class="row">
          <div class="col-lg-12">
            <div class="card-body ">
              <img src={Image} width="150" height="150" alt="" />
              <h4 className="me-2"> John Doe</h4>
            </div>
            <h6 className="text-start mx-5"> İlerlemeniz:</h6>
            <div class="progress mx-5 mb-5">
              <div
                class="progress-bar "
                role="progressbar"
                style={{
                  width: ((window.localStorage.getItem('t1') / 15) * 100/4)+'%',
                }}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                %{((window.localStorage.getItem('t1') / 15) * 100/4).toFixed('0')}
              </div>
            </div>
          </div>
        </div>
        <Tutor />
      </div>
    </div>
  );
}

export default UserInfo;
