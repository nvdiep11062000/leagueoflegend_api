import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
// import "swiper/css/navigation";
import { Autoplay, Pagination} from "swiper";
import { dataNews } from '../data/data-news';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const MainPages = () => {
  return (
    <>
      <div className='background-slide'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src='https://cdn.vn.garenanow.com/web/lol-product/home/images/Lan_h3lpm3/06_2022/202206-81-Topup80-1220x400.jpg' alt='slide' /></SwiperSlide>
        <SwiperSlide><img src='https://cdn.vn.garenanow.com/web/lol-product/home/images/Lan_h3lpm3/06_2022/202206-083-CuaHangBatTan-1220x400.jpg' alt='slide' /></SwiperSlide>
        <SwiperSlide><img src='https://cdn.vn.garenanow.com/web/lol-product/home/images/Lan_h3lpm3/06_2022/mo-ban-linh-thu-1220x400.jpg' alt='slide' /></SwiperSlide>
        <SwiperSlide><img src='https://cdn.vn.garenanow.com/web/lol-product/home/images/Lan_h3lpm3/06_2022/belveth-1220x400.jpg' alt='slide' /></SwiperSlide>
        <SwiperSlide><img src='https://cdn.vn.garenanow.com/web/lol-product/home/images/Lan_h3lpm3/06_2022/ve-mua7-1220x400.jpg' alt='slide' /></SwiperSlide>
        <SwiperSlide><img src='https://cdn.vn.garenanow.com/web/lol-product/home/images/Lan_h3lpm3/06_2022/202206-087-CuaHangBauVat-1220x400.jpg' alt='slide' /></SwiperSlide>
        <SwiperSlide><img src='https://cdn.vn.garenanow.com/web/lol-product/home/images/Lan_h3lpm3/06_2022/belveth-1220x400.jpg' alt='slide' /></SwiperSlide>
      </Swiper>
      </div>

      <div className="main-page-content">
          <div className="center">
              <div id="news">
                {dataNews.map(item => (
                  <div className="newItem" key={item.name}>
                      <Link>
                          <div className="imgBox">
                              <img src={item.image} alt='news'/>
                          </div>

                          <div className="info">
                              <div className="info-top">
                                      <p className="category">{item.category}</p>
                                      <h3 className="tittle">{item.title}</h3>
                                      <p className="content">{item.content}</p>
                              </div>
                              <div className="info-bottom">
                                  <p className="time">{item.time}</p>
                              </div>
                          </div>
                      </Link>
                  </div>
                ))}
              </div>
          </div>
      </div>

      <div className="btn">
            <Link>Xem Thêm</Link>
      </div>
      <Footer/>
    </>

      

  )
}

export default MainPages