import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Question from '../components/Question';
import './testpage.css'
import axios from 'axios';
const TestPage = () => {
  let [questions,setQuestions]=useState([])
  let [correct, setCorrect] = useState(0)
  useEffect(()=>{
    
  loadQuestions()
  
 },[])
 function increaseCorrect(){
  setCorrect(correct + 1)
 }
let saveAnswers = () =>{
  window.localStorage.setItem("t1", correct)
}

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}


  const loadQuestions= async () => {
    const response=await axios.get('http://localhost:8080/api/1.0/question')
    let qs = shuffle(response.data)
    
    setQuestions(qs.slice(0,15))
    
  }
  return (
    <div>
      <div className="count" data-toggle="tooltip" data-placement="bottom" title='Dogru Sayısı'>{correct}</div>
      <div className="container col-lg-6 my-5 text-dark rounded text-dark shadow bg-light"></div>
      {questions.map((q,index)=>{
        return <Question increaseCorrect={increaseCorrect} index={index} id={q.id} body={q.body} a={q.a} b={q.b} c={q.c} d={q.d}/>
      })}
      <a  href='/lesson'>
      <button class="btn btn-primary btn-sm px-4 me-md-2" style={{borderRadius:" 31px"}} onClick={saveAnswers}>Save Answers{">>>"}</button>
      </a>
      <Footer />
    </div>
  );
};

export default TestPage;
