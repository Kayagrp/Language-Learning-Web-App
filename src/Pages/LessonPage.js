import React from 'react';
import Footer from '../components/Footer';
import LessonCard from '../components/LessonCard';
import UserInfo from '../components/UserInfo';

const LessonPage = () => {
  return (
    <div>
      <div className="container mt-3">
        <div className="row">
          <div className="col-lg-4">
            <UserInfo />
          </div>
          <div className="col-lg-8">
            <LessonCard
              CollapseLink="a"
              pageLink="a"
              pageContent="Konu Anlatimi"
              LessonsName="Başlangıç Seviyesi"
              icerik="İngilizce öğrenmeye yeni mi başlıyorsunuz? Bu ders sizin için mükemmel! İngilizce dilbilgisi ve kelime bilgisinin temellerini öğrenecek ve konuşma, dinleme, okuma ve yazma becerilerinizi geliştirmeye başlayacaksınız."
            />
            <LessonCard
              CollapseLink="b"
              pageLink="b"
              pageContent="Konu Anlatimi2"
              LessonsName="Orta Seviye"
              icerik="İngilizce becerilerinizi geliştirmek mi istiyorsunuz? Bu kurs, temel İngilizce anlayışına sahip olan ve becerilerini bir sonraki seviyeye taşımak isteyen bireyler için tasarlanmıştır. Daha karmaşık dilbilgisi yapılarını kullanma pratiği yapacak ve kelime dağarcığınızı genişletecek, ayrıca dinleme, konuşma, okuma ve yazma becerilerinizi geliştireceksiniz."
            />
            <LessonCard
              CollapseLink="c"
              pageLink="c"
              pageContent="Konu Anlatimi3"
              LessonsName="İleri Seviye"
              icerik="Becerilerinizi bir üst seviyeye taşımak isteyen ileri düzey bir İngilizce öğrenicisi misiniz? Bu kurs, güçlü bir İngilizce bilgisine sahip olan ancak becerilerine ince ayar yapmak ve daha akıcı hale gelmek isteyen kişiler için tasarlanmıştır. Gelişmiş gramer yapılarını kullanma pratiği yapacak ve kelime dağarcığınızı genişletecek, ayrıca dinleme, konuşma, okuma ve yazma becerilerinizi geliştireceksiniz."
            />
            <LessonCard
              CollapseLink="d"
              pageLink="d"
              pageContent="Konu Anlatimi4"
              LessonsName="Ana Dil Seviyesi"
              icerik="İngilizceyi zaten akıcı bir şekilde konuşuyor ancak becerilerinizi geliştirmek ve bir uzman olmak mı istiyorsunuz? Bu kurs, İngilizce'de yüksek derecede yeterliliğe sahip olan ve becerilerini en üst düzeye çıkarmak isteyen bireyler için tasarlanmıştır. Gelişmiş dilbilgisi yapılarını kullanma pratiği yapacak ve kelime dağarcığınızı genişletecek, ayrıca dinleme, konuşma, okuma ve yazma becerilerinizi geliştireceksiniz."
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LessonPage;
