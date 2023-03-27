import React from 'react';
import Card from '../components/Card';
import Carousel from '../components/Carousel';
import Footer from '../components/Footer';
import ProficiencyImage from '../Images/exam.png';
import TutorImage from '../Images/tutor.png';
import LessonImage from '../Images/lesson.png';

const HomePage = () => {
  let ProfImg = ProficiencyImage;
  let TutorImg = TutorImage;
  let LessonImg = LessonImage;
  return (
    <div className="App">
      <Carousel />
      <div className="container my-4">
        <div className="row">
          <div className="col-lg-4">
            <Card
              cardImage={LessonImg}
              cardTitle="New Language"
              cardText="You can use Peak Learning to learn a new language efficiently."
              cardButtonName="Learn Now"
              cardDirection="/login"
            />
          </div>
          <div className="col-lg-4">
            <Card
              cardImage={ProfImg}
              cardTitle="Proficiency Exam"
              cardText="Take a proficiency test to find out what level you are at."
              cardButtonName="Take the Test"
              cardAlert={() =>
                alert('This function has not been implemented yet!')
              }
            />
          </div>
          <div className="col-lg-4">
            <Card
              cardImage={TutorImg}
              cardTitle="Personal Tutors"
              cardText="Strugle to pass the test or have question about the lesson?"
              cardButtonName="Contact With a Personal Tutor"
              cardAlert={() =>
                alert('This function has not been implemented yet!')
              }
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
