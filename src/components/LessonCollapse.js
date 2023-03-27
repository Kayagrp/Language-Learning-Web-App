import React from 'react';
import LessonCardButton from './LessonCardButton';

const LessonCollapse = (props) => {
  let isDisabled = props.pageLink != 'a';
  return (
    <div>
      <div class="collapse" id={props.CollapseLink}>
        <div class="card card-body">
          <div class="row">
            <LessonCardButton
              disabled={isDisabled}
              pageLink="/lecturepage"
              pageContent="Ders İçeriği"
              makeID="okButton"
            />
          </div>
          <div class="row">
            <LessonCardButton
              disabled={isDisabled}
              action={() =>
                alert('This function has not been implemented yet!')
              }
              pageContent="Dinleme Egzersizleri"
              makeID="lessonButton"
            />
          </div>
          <div class="row">
            <LessonCardButton
              disabled={isDisabled}
              action={() =>
                alert('This function has not been implemented yet!')
              }
              pageContent="Yazma Egzersizleri"
              makeID="lessonButton"
            />
          </div>
          <div class="row">
            <LessonCardButton
              disabled={isDisabled}
              action={() =>
                alert('This function has not been implemented yet!')
              }
              pageContent="Konuşma Egzersizleri"
              makeID="lessonButton"
            />
          </div>
          <div class="row">
            <LessonCardButton
              disabled={isDisabled}
              action={() =>
                alert('This function has not been implemented yet!')
              }
              pageContent="Okuma Egzersizleri"
              makeID="lessonButton"
            />
          </div>
          <div class="row">
            <LessonCardButton
              disabled={isDisabled}
              pageLink="/testpage"
              pageContent="Ders Testi"
              makeID="okButton"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonCollapse;
