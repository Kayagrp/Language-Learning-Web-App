import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Question = (props) => {
  let splitedText = props.body.split("(")
  let maintext = splitedText[0]
  let subText = ""
  if(splitedText.length == 2) {
    subText = splitedText[1].replaceAll(")","")
  }
  
  

  async function checkAnswer(e,ans,id){
    let isCorrect = await axios.post('http://localhost:8080/api/1.0/question',{
      id:id,
      option: ans
    })
    if(isCorrect.data){
      e.target.style.backgroundColor = 'green'
      props.increaseCorrect()
    }else {
      e.target.style.backgroundColor = 'red'
    }
    [...e.target.parentElement.childNodes].forEach(b => {
      b.disabled = true
    })
  }


  return (
    <div class="container shadow  p-3 mb-5" style={{borderRadius:" 31px"}} >
      <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div class="col-lg-12">
          <h5 class=" fw-bold lh-1 mb-3 text-start">Soru {props.index + 1}:</h5>
          <p class="lead">{maintext}</p>
          {subText !== "" ? <p class="lead">{'('+subText+')'}</p>: <></>}
          <hr></hr>
          <div class="d-grid gap-2 d-md-flex justify-content-md-center">
            <button type="button" class="btn btn-primary btn-sm px-4 me-md-2"  data-toggle="tooltip" data-placement="bottom" title='Emin misin?' style={{borderRadius:" 31px"}} onClick={(e) =>{checkAnswer(e,"A", props.id)}}>
              {props.a}
            </button>
            <button type="button" class="btn btn-primary btn-sm px-4 me-md-2" data-toggle="tooltip" data-placement="bottom" title='Emin misin?' style={{borderRadius:" 31px"}} onClick={(e) =>{checkAnswer(e,"B", props.id)}}>
              {props.b}
            </button>
            <button type="button" class="btn btn-primary btn-sm px-4 me-md-2" data-toggle="tooltip" data-placement="bottom" title='Emin misin?' style={{borderRadius:" 31px"}} onClick={(e) =>{checkAnswer(e,"C", props.id)}}>
              {props.c}
            </button>
            <button type="button" class="btn btn-primary btn-sm px-4 me-md-2" data-toggle="tooltip" data-placement="bottom" title='Emin misin?' style={{borderRadius:" 31px"}} onClick={(e) =>{checkAnswer(e,"D", props.id)}}>
              {props.d}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
