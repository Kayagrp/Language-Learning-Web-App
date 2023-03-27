import React from 'react';

const LessonCardButton = (props) => {
  return (
    <div class="row">
      <div class="col-lg-9">
        <div class="card mb-3 shadow">
          <div class="d-grid gap-2">
            <a
              href={props.pageLink}
              class="btn btn-light btn-lg active"
              id={props.makeID}
              role="button"
              data-toggle="tooltip" data-placement="bottom" 
              title={props.pageLink == "/testpage"?"Ders içeriklerini kapsayan test":null}
              aria-pressed="true"
              onClick={(e) => {
                

                if (props.disabled) {
                  e.preventDefault();
                } else {
                  props.action();
                }
              }}
            >
              {props.pageContent}
            </a>
          </div>
        </div>
      </div>
      <div class="col-lg-3">
        <div class="card mb-3 shadow">
          <div class="d-grid gap-2">
            <a
              class="btn btn-light btn-lg active"
              role="button"
              aria-pressed="true"
              onClick={() =>
                alert('This function has not been implemented yet!')
              }
            >
              Forum
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonCardButton;
