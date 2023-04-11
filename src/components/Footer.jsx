import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook, faYoutube} from '@fortawesome/free-brands-svg-icons';
import {faGear, faBook} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
const Footer = () => {
  return (
    <>
    <div className="footer">
        <div className="main-footer">
            <div className="logo"></div>
            <div className="contact">
                <div className="copyright">
                    Sản phẩm được hợp tác phát hành bởi Công ty TNHH Liên Minh Huyền Thoại & Công ty Cổ phần Giải trí và Thể thao Điện tử Việt Nam.
                    <br/>
                    Văn phòng đại diện: Tầng 29, tòa nhà Trung tâm Lotte Hà Nội, số 54 đường Liễu Giai, phường Cống Vị, quận Ba Đình, thành phố Hà Nội, Việt Nam.
                    <br/>
                    Điện thoại: (04)7305-3939; Fax: (04)3759-2429
                </div>

                <div className="social-links">
                    <div className="link">
                        <FontAwesomeIcon icon={faFacebook} />
                        <div className="link-txt">Facebook</div>
                    </div>
                    <div className="link">
                        <FontAwesomeIcon icon={faYoutube} />
                        <div className="link-txt">Youtube</div>
                    </div>
                    <div className="link">
                        <FontAwesomeIcon icon={faBook} />
                        <div className="link-txt">Điều khoản dịch vụ</div>
                    </div>
                    <div className="link">
                        <FontAwesomeIcon icon={faGear} />
                        <div className="link-txt">Hỗ trợ</div>
                    </div>
                </div>

                <div className="play-free">
                    <Link to="#" className='btn play-for-free'>Chơi miễn phí</Link>
                    <span className='age-limit'></span>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer