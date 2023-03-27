import React from 'react';
import LessonCollapse from './LessonCollapse';

const Lesson = (props) => {
  return (
    <div>
      <div class="card mb-2 shadow navbarLogo2">
        <div class="row">
          <div class="col-lg-12">
            <div class="card-body hoverItem" data-toggle="tooltip" data-placement="bottom" 
                  title={window.localStorage.getItem('t1') < 12 && props.CollapseLink != 'a' ? "Bu dersi açmak için önceki derste en az %80 başarı oranına ulaşın" : null}>
              <h5 class="card-title">{props.LessonsName}</h5>
              <p>{props.icerik}</p>

              <p
                style={{
                  textAlign: 'right',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <p>
                  {props.pageLink == 'a'
                    ? 'Test Skoru: ' +
                      ((window.localStorage.getItem('t1') / 15) * 100).toFixed(
                        '0'
                      ) +
                      '%'
                    : 'Henüz Başlanmadı'}
                </p>
                <button
                  disabled={(() => {
                    if (props.pageLink == 'a') {
                      return false;
                    } else if (props.pageLink == 'b') {
                      return !(window.localStorage.getItem('t1') >= 12);
                    }
                    return true;
                  })()}
                  class="btn btn-primary"
                  type="button"
                  
                  data-bs-toggle="collapse"
                  data-bs-target={'#' + props.CollapseLink}
                  aria-expanded="false"
                  aria-controls={props.CollapseLink}
                >
                  Ders İçeriğini Göster
                </button>
              </p>
              <LessonCollapse
                pageLink={props.pageLink}
                CollapseLink={props.CollapseLink}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lesson;
