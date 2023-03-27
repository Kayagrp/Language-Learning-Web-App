import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import LectureCardTable from '../components/LectureCardTable';
import './lecturepage.css';
import Image from '../Images/headphones.png'
import axios from 'axios';
const LecturePage = () => {
  let [open, setOpen] = useState(false);
  var items = [];
  var items2 = [];
  var items3 = [];
  var items4 = [];
  var items5 = [];
  var items6 = [];
  var items7 = [];
  var items8 = [];
  var items9 = [];
  var items10 = [];
  let [contents,setContents]=useState([])
  const loadContents= async () => {
    const response=await axios.get('http://localhost:8080/api/1.0/content')

    setContents(response.data)
    
    
  }




  useEffect(()=>{
    
  loadContents()
  
 },[])




  function toggleQuestionBar() {
    setOpen(!open);
  }

  return (
    <div>
      <div>
      {contents.map((c,index)=>{
        console.log(c.id)
        let splitedText = c.examples.split("@")
        let maintext = splitedText[0]
        let subText = ""
        if(splitedText.length == 2) {
          subText = splitedText[1].replaceAll(")","")
          
        }
        if(c.content_no==1&&c.module_no==1){
          console.log(maintext)
          console.log(subText)
          var tut=[maintext,subText]
          items.push(tut)
          
        }
        if(c.content_no==2&&c.module_no==1){
          console.log(maintext)
          console.log(subText)
          var tut=[maintext,subText]
          items2.push(tut)
          
        }
        if(c.content_no==3&&c.module_no==1){
          console.log(maintext)
          console.log(subText)
          var tut=[maintext,subText]
          items3.push(tut)
          
        }
        if(c.content_no==1&&c.module_no==2){
          console.log(maintext)
          console.log(subText)
          var tut=[maintext,subText]
          items4.push(tut)
          
        }
        if(c.content_no==2&&c.module_no==2){
          console.log(maintext)
          console.log(subText)
          var tut=[maintext,subText]
          items5.push(tut)
          
        }
        if(c.content_no==3&&c.module_no==2){
          console.log(maintext)
          console.log(subText)
          var tut=[maintext,subText]
          items6.push(tut)
          
        }
        if(c.content_no==4&&c.module_no==2){
          console.log(maintext)
          console.log(subText)
          var tut=[maintext,subText]
          items7.push(tut)
          
        }
        if(c.content_no==1&&c.module_no==3){
          console.log(maintext)
          console.log(subText)
          var tut=[maintext,subText]
          items8.push(tut)
          
        }
        if(c.content_no==1&&c.module_no==4){
          console.log(maintext)
          console.log(subText)
          var tut=[maintext,subText]
          items9.push(tut)
          
        }
        if(c.content_no==1&&c.module_no==5){
          console.log(maintext)
          console.log(subText)
          var tut=[maintext,subText]
          items10.push(tut)
          
        }
      })}
      </div>

      <div className='card bg-dark text-white 'style={{width: "86%", height:"280px",borderRadius:"10px",marginLeft:"7%",border:"none"}}>
      <div class="col-md-12 px-0 my-2 " >
                  <h6 class="display-6 fst-italic text-white  " style={{marginTop:"3%",zIndex:"10000"}}>
                    Merhaba! İngilizce öğrenmek için harika bir adım attınız.
                  </h6>
                  <div className=''>
                  <h4 class="lead my-3 mt-4 text-white ">
                    Giriş dersimiz, dilin ilk adımlarını atmak için sizlere
                    yardımcı olacak öğrenme materyallerini içeriyor. {<br></br>}
                    Dil öğrenme süreci zor olsa da, eminiz ki dil becerilerinizi
                    geliştirirken keyif alacaksınız.
                  </h4>
                  </div>
                  <h4 class="lead my-3 mt-4 text-white " >
                    Başlamaya hazır mısınız? İlk dersimize geçelim!
                  </h4>
                  <div style={{marginBottom:"90px"}}>
                  </div>
                </div>
        <div id="container"style={{borderRadius:"10px"}}>
          
        <div id="container-inside">
          
        <div id="circle-small"></div>
        
        <div id="circle-medium"></div>
        
        <div id="circle-large"></div>
        
        <div id="circle-xlarge"></div>
        
        <div id="circle-xxlarge"></div>
        
        </div>
        </div>
      </div>
      <div className={`questions ${open ? '' : 'questions-closed'} shadow`}>
    <div style={{position:"absolute",marginTop:"10px",opacity:"0.7"}}>
     <img width={"90%"} src='https://img.freepik.com/free-vector/flat-happy-teen-girl-headphones-sitting-home-bean-bag-chair-using-smartphone-online-education-woman-relaxing-listening-music-audio-podcast-radio-audiobook-mobile-phone_88138-540.jpg?w=900&t=st=1671969215~exp=1671969815~hmac=de2f3a619b6933a2ce2c8ff8d116c8978e8f7d354df5f843e2c1fb339a81fcec'></img>
     </div>  
        <button
          className="close"
          style={{ float: 'right', margin: '20px' }}
          onClick={toggleQuestionBar}
        >
          X
        </button>
        <br />
        <br />
        <br />
        <div className="main-wrapper" style={{position:"relative",color:"#000000",fontWeight:"bold"}}>
          Twinkle, twinkle, little _____
          <div className="btn-wrapper">
            <button
              className="btn btn-primary btn-sm"
              style={{ width: '5em', margin: '10px'}}
              onClick={(e) =>
                console.log((e.target.style.backgroundColor = 'red'))
              }
            >
              saw
            </button>
            <button
              className="btn btn-primary btn-sm"
              style={{ width: '5em' }}
              onClick={(e) =>
                console.log((e.target.style.backgroundColor = 'green'))
              }
            >
              star
            </button>
          </div>
        </div>
        <br></br>
        <div className="main-wrapper" style={{position:"relative",color:"#000000",fontWeight:"bold"}}>
          How I wonder what you _____
          <div className="btn-wrapper">
            <button
              className="btn btn-primary btn-sm"
              style={{ width: '5em', margin: '10px' }}
              onClick={(e) =>
                console.log((e.target.style.backgroundColor = 'red'))
              }
            >
              ar
            </button>
            <button
              className="btn btn-primary btn-sm"
              style={{ width: '5em' }}
              onClick={(e) =>
                console.log((e.target.style.backgroundColor = 'green'))
              }
            >
              are
            </button>
          </div>
        </div>
        <br></br>
        <div className="main-wrapper" style={{position:"relative",color:"#000000",fontWeight:"bold"}}>
          Up above the world so _____
          <div className="btn-wrapper">
            <button
              className="btn btn-primary btn-sm"
              style={{ width: '5em', margin: '10px' }}
              onClick={(e) =>
                console.log((e.target.style.backgroundColor = 'green'))
              }
            >
              high
            </button>
            <button
              className="btn btn-primary btn-sm"
              style={{ width: '5em' }}
              onClick={(e) =>
                console.log((e.target.style.backgroundColor = 'red'))
              }
            >
              hi
            </button>
          </div>
        </div>
        <br></br>
        <div className="main-wrapper" style={{position:"relative",color:"#000000",fontWeight:"bold"}}>
          Like a diamond in the _____
          <div className="btn-wrapper">
            <button
              className="btn btn-primary btn-sm"
              style={{ width: '5em', margin: '10px' }}
              onClick={(e) =>
                console.log((e.target.style.backgroundColor = 'green'))
              }
            >
              sky
            </button>
            <button
              className="btn btn-primary btn-sm"
              style={{ width: '5em' }}
              onClick={(e) =>
                console.log((e.target.style.backgroundColor = 'red'))
              }
            >
              say
            </button>
          </div>
        </div>
        <br></br>
        
      </div>
      <main>
        
        <div class="container">
        <div class="row align-items-md-stretch py-3">
            <div class="col-md-6">
              <div class="h-100 p-5 text-dark shadow rounded-3 bg-white ">
                <h3>Selamlar ve Tanışma</h3>
                <p>
                  Selamlaşma ve tanışma, her dilde iletişimin çok önemli bir
                  yönüdür ve İngilizce için de bu durum geçerlidir. Bu derste,
                  İngilizcede selamlaşma ve tanışmanın temellerini ele alacağız.
                  Farklı durumlarda insanları nasıl selamlayacağımızı, kendimizi
                  ve başkalarını nasıl tanıtacağımızı ve selamlara nasıl
                  karşılık vereceğimizi öğreneceğiz.
                </p>

                <div class="accordion" id="accordionPanelsStayOpenExample">
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseOne"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseOne"
                      >
                        Basic Greetings: Temel Selamlar
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseOne"
                      class="accordion-collapse collapse"
                      aria-labelledby="panelsStayOpen-headingOne"
                    >
                      <div class="accordion-body">
                      
                       <LectureCardTable data={items} />
                    

                        
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseTwo"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseTwo"
                      >
                        Introducing Yourself: Kendini Tanıma
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseTwo"
                      class="accordion-collapse collapse"
                      aria-labelledby="panelsStayOpen-headingTwo"
                    >
                      <div class="accordion-body">
                        <LectureCardTable data={items2} />
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2
                      class="accordion-header"
                      id="panelsStayOpen-headingThree"
                    >
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseThree"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseThree"
                      >
                        Asking for Someone's Name: Birinin Adını Sorma
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseThree"
                      class="accordion-collapse collapse"
                      aria-labelledby="panelsStayOpen-headingThree"
                    >
                      <div class="accordion-body">
                        <LectureCardTable tableTitle="" data={items3} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 shadow rounded-3">
              <img
                src="https://cdn.discordapp.com/attachments/1032330999046098999/1055958862399815720/selam.png"
                class="img-fluid"
                alt="..."
              ></img>
            </div>
          </div>
          <br></br>
          <div className="row align-items-md-stretch">
            <div className="col-md-6 shadow rounded-3">
              <img
                src="https://cdn.discordapp.com/attachments/1032330999046098999/1055949042682691744/pronouns.jpg"
                class="img-fluid"
                alt="..."
              ></img>
            </div>
            <div class="col-md-6">
              <div class="h-100 p-5 text-dark bg-white shadow rounded-3">
                <h2>Kişi zamirleri</h2>
                <p>
                  Kişi zamirleri, bir ismin veya isim tamlamasının yerine geçen
                  ve belirli kişilere veya şeylere atıfta bulunan kelimelerdir.
                  Kişi zamirlerini anlamak ve doğru kullanmak, İngilizce'de
                  kendimizi doğru ve etkili bir şekilde ifade etmek için çok
                  önemlidir. Bu derste, İngilizcedeki farklı kişi zamirlerini
                  öğreneceğiz.
                </p>

                <LectureCardTable
                  tableTitle="Personal pronouns: Kişi zamirleri"
                  data={items8}
                />
              </div>
            </div>
          </div>
          <br></br>
          <div className="row align-items-md-stretch">
            <div class="col-md-6">
              <div class="h-100 p-5 text-dark bg-white shadow rounded-3">
                <h2>Temel fiillerin zamanları</h2>
                <p>
                  Fiil zamanları, eylemlerin veya olayların zamanını ve süresini
                  iletmemizi sağlayan İngilizce dilinin önemli bir yönüdür. Fiil
                  zamanlarını doğru anlamak ve kullanmak, İngilizce'de kendimizi
                  doğru ve etkili bir şekilde ifade etmek için çok önemlidir. Bu
                  derste, İngilizcedeki farklı fiil zamanlarını ve bunları uygun
                  şekilde nasıl kullanacağımızı keşfedeceğiz.
                </p>

                <div class="accordion" id="accordionPanelsStayOpenExample2">
                  <div class="accordion-item">
                    <h2
                      class="accordion-header"
                      id="panelsStayOpen-headingFour"
                    >
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseFour"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseFour"
                      >
                        Present simple: Şimdiki zaman
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseFour"
                      class="accordion-collapse collapse"
                      aria-labelledby="panelsStayOpen-headingFour"
                    >
                      <div class="accordion-body">
                        <LectureCardTable data={items4} />
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2
                      class="accordion-header"
                      id="panelsStayOpen-headingFive"
                    >
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseFive"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseFive"
                      >
                        Present continuous: Şimdiki zaman devam eden
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseFive"
                      class="accordion-collapse collapse"
                      aria-labelledby="panelsStayOpen-headingFive"
                    >
                      <div class="accordion-body">
                        <LectureCardTable data={items5} />
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="panelsStayOpen-headingSix">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseSix"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseSix"
                      >
                        Past simple: Geçmiş zaman
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseSix"
                      class="accordion-collapse collapse"
                      aria-labelledby="panelsStayOpen-headingSix"
                    >
                      <div class="accordion-body">
                        <LectureCardTable tableTitle="" data={items6} />
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2
                      class="accordion-header"
                      id="panelsStayOpen-headingSeven"
                    >
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseSeven"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseSeven"
                      >
                        Future simple: Gelecek zaman
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseSeven"
                      class="accordion-collapse collapse"
                      aria-labelledby="panelsStayOpen-headingSeven"
                    >
                      <div class="accordion-body">
                        <LectureCardTable tableTitle="" data={items7} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 shadow rounded-3">
              <img
                src="https://cdn.discordapp.com/attachments/1032330999264182373/1055953905160298588/tenses.png"
                class="img-fluid"
                alt="..."
              ></img>
            </div>
          </div>
          <br></br>
          <div className="row align-items-md-stretch">
            <div className="col-md-6 shadow rounded-3">
              <img
                src="https://cdn.discordapp.com/attachments/1032330999046098999/1055949602039283772/places.jpg"
                class="img-fluid "
                alt="..."
              ></img>
            </div>
            <div class="col-md-6">
              <div class="h-100 p-5 text-dark bg-white shadow  rounded-3">
                <h2>Sahiplik Sıfatları ve Yer Edatları</h2>
                <p>
                  Sahiplik sıfatları ve yer edatları, İngilizce dilinde çok
                  önemli roller oynar. Sahiplik sıfatları, bir şeyin sahipliğini
                  veya mülkiyetini gösteren zamirlerdir ve my, your, his, her,
                  its, our ve their gibi farklı seçenekleri vardır. Yer edatları
                  ise, bir şeyin başka bir şeye göre yerini veya konumunu
                  gösteren kelimelerdir ve in, on, at, under, behind, in front
                  of ve next to gibi seçenekleri vardır. Bu iki zamir türünü
                  doğru anlamak ve kullanmak, İngilizce dilinde kendimizi doğru
                  ve etkili bir şekilde ifade etmemizi sağlar. Bu derste bu iki
                  zamir türünü öğreneceğiz.
                </p>
                <div class="accordion" id="accordionPanelsStayOpenExample4">
                  <div class="accordion-item">
                    <h2
                      class="accordion-header"
                      id="panelsStayOpen-headingNine"
                    >
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseNine"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseNine"
                      >
                        Possessive adjectives: Sahiplik sıfatları
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseNine"
                      class="accordion-collapse collapse"
                      aria-labelledby="panelsStayOpen-headingNine"
                    >
                      <div class="accordion-body">
                        <LectureCardTable data={items9} />
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="panelsStayOpen-headingTen">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseTen"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseTen"
                      >
                        Prepositions of place: Yer edatları
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseTen"
                      class="accordion-collapse collapse"
                      aria-labelledby="panelsStayOpen-headingTen"
                    >
                      <div class="accordion-body">
                        <LectureCardTable data={items10} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row py-4">
            <div class="p-5 mb-4 rounded-3 shadow">
              <div className="p-4 p-md-5 mb-4 text-white  bg-primary" style={{ borderRadius:"6px"}}>
                <div class="col-md-12 px-0 my-2 ">

                  <h3 class="lead my-3 fst-italic  mt-4 text-white navbarLogo2 ">
                  Bu kısımda ise konuşma, okuma ve dinleme becerilerinizi geliştirebilmeniz için birkaç egzersiz bulunmaktadır.Unutmayın, dil öğrenmenin en iyi yolu pratik yapmaktır, bu yüzden bu egzersizleri sık sık tekrarlamaya çalışın.
                  </h3>
                  <h4 class="lead my-3 fst-italic mt-4 text-white navbarLogo2 ">
                   İyi çalışmalar!
                  </h4>
                </div>
              </div>

              <div class="row mb-2">
                <div class="col-md-6 hoverItem">
                  <div class="row g-0  overflow-hidden flex-md-row mb-4 shadow-s h-md-250 position-relative">
                    <div
                      class="col p-4 d-flex flex-column position-static"
                      style={{ height: '260px' }}
                    >
                      <strong class="d-inline-block mb-2 text-primary">
                        Speaking
                      </strong>

                      <h3 class="mb-0">
                        Speaking Exercise (Konuşma Egzersizi)
                      </h3>

                      <p class="card-text mb-auto my-2">
                        Aşağıdaki rol yapma örneğini bir arkadaşınızla
                        karşılıklı konuşarak gerçekleştiriniz.
                      </p>

                      <button
                        type="button"
                        class="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        style={{ marginTop: '10px' }}
                      >
                        İçeriği Göster
                      </button>
                      <div
                        class="modal fade"
                        id="exampleModal"
                        tabindex="-1"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h1
                                class="modal-title fs-5"
                                id="exampleModalLabel"
                              >
                                Speaking Exercise (Konuşma Egzersizi)
                              </h1>
                              <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              ></button>
                            </div>
                            <div class="modal-body">
                              <div className="text-left">
                                • Customer: Hi, can you help me find a dress?
                                (Merhaba, benim için elbise bulmada yardımcı
                                olabilir misin?) <hr></hr>• Salesperson: Sure,
                                what size and style are you looking for? (Tabii,
                                ne boy ve tarz arıyorsun?) <hr></hr>• Customer:
                                I'm looking for a size 8, and I'd like something
                                formal. (Boyu 8 arıyorum ve resmi bir şey
                                arıyorum.) <hr></hr>• Salesperson: We have a few
                                options in size 8. This black dress is formal
                                and elegant. And this red dress is also formal
                                but more playful. Which one would you prefer?
                                (Boyu 8'de birkaç seçenek var. Bu siyah elbise
                                resmi ve zarif. Ve bu kırmızı elbise de resmi
                                ama daha eğlenceli. Hangisini tercih edersin?)
                                <hr></hr>• Customer: I'll try the black dress,
                                please. (Siyah elbiseyi deneyeyim, lütfen.)
                              </div>
                            </div>
                            <div class="modal-footer">
                              <button
                                type="button"
                                class="btn btn-secondary"
                                data-bs-dismiss="modal"
                              >
                                Kapat
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-auto d-none d-lg-block lessonCard">
                      <img
                        src="https://cdn.discordapp.com/attachments/1032330999046098999/1055585579460472942/7014440.jpg"
                        alt="My Happy SVG"
                        width="250"
                        height="100%"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-md-6 hoverItem">
                  <div class="row g-0  overflow-hidden flex-md-row mb-4 h-md-250 position-relative">
                    <div
                      class="col p-4 d-flex flex-column position-static "
                      style={{ height: '260px' }}
                    >
                      <strong class="d-inline-block mb-2 text-danger">
                        Reading
                      </strong>

                      <h3 class="mb-0">Reading Exercise </h3>
                      <h3 class="mb-0">(Okuma Egzersizi) </h3>

                      <p class="card-text mb-auto my-1">
                        Aşağıdaki "The Lost Dog" ("Kayıp Köpek") isimli hikayeyi
                        okuyarak anlamaya çalışınız.
                      </p>

                      <button
                        type="button"
                        class="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal2"
                        style={{ marginTop: '10px' }}
                      >
                        İçeriği Göster
                      </button>
                      <div
                        class="modal fade"
                        id="exampleModal2"
                        tabindex="-1"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h1
                                class="modal-title fs-5"
                                id="exampleModalLabel"
                              >
                                Reading Exercise (Okuma Egzersizi)
                              </h1>
                              <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              ></button>
                            </div>
                            <div class="modal-body">
                              <div className="text-left">
                                "The Lost Dog" ("Kayıp Köpek") One day, Tim and
                                his dog Max were playing in the park. Tim was
                                throwing a ball and Max was running after it.
                                Suddenly, Max ran too far and disappeared behind
                                some bushes. Tim looked for Max everywhere, but
                                he couldn't find him. He asked some people if
                                they had seen a brown dog, but no one had. Tim
                                was very worried. He went back home and told his
                                parents what had happened. His parents called
                                the police and they searched for Max together.
                                They searched for hours, but they still couldn't
                                find him. The next morning, Tim woke up early
                                and went to the park again. He saw a little girl
                                playing with a brown dog. He ran to her and saw
                                that it was Max! The little girl had found Max
                                and brought him home. Tim was so happy to see
                                Max again. He thanked the little girl and
                                brought Max back home. From then on, Tim always
                                kept a close eye on Max when they were playing
                                in the park.
                              </div>
                            </div>
                            <div class="modal-footer">
                              <button
                                type="button"
                                class="btn btn-secondary"
                                data-bs-dismiss="modal"
                              >
                                Kapat
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-auto d-none d-lg-block lessonCard">
                      <img
                        src="https://cdn.discordapp.com/attachments/1032330999046098999/1055585660825767946/6768291.jpg"
                        alt="My Happy SVG"
                        width="250"
                        height="100%"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-12 px-4 py-5 hoverItem">
              <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
                <div class="col-10 col-sm-8 col-lg-6">
                  <iframe
                    width="100%"
                    height="100%"
                    class="d-block mx-auto img-fluid video"
                    src="https://www.youtube.com/embed/yCjJyiqpAuU"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                    style={{
                      height: '300px',
                      width: '100%',
                      borderRadius: '13px',
                    }}
                  ></iframe>
                </div>
                <div class="col-lg-6">
                  <h1 class="display-5 fw-bold lh-1 mb-3">
                    Listening Exercise (Dinleme Egzersizi)
                  </h1>
                  <p class="lead">
                    Merhaba! Bu bölümde, İngilizce dinleme becerilerinizi
                    geliştirmeyi amaçlıyoruz. Öncelikle, yandaki şarkıyı
                    dinleyeceksiniz. Ardından, verilen videodaki şarkının
                    sözlerindeki boşlukları tamamlamaya çalışacaksınız. Bu
                    etkinlik, İngilizce kelime hazinesini ve gramerini
                    öğrenmenizi sağlarken aynı zamanda dinleme becerilerinizi de
                    geliştirir. Bu bölümde keyifli vakit geçireceğinize eminiz!
                  </p>
                  <div class="d-grid gap-2 d-md-flex justify-content-md-center">
                    <button
                      className="btn btn-lg btn-primary "
                      onClick={toggleQuestionBar}
                    >
                      Soruları Gör
                    </button>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
        
        
      </main>
      <Footer />
    </div>
  );
};

export default LecturePage;
