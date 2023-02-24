
import './Footer.scss';
import { Col, Row } from 'antd';
import { AndroidFilled, AppleFilled, FacebookOutlined, InstagramOutlined, TwitterOutlined, YoutubeOutlined } from '@ant-design/icons';

export default function Footer() {
  return <div className='footer'>
    <div className='wapper'>
      <h1 className='footer-title'>Soyuli.Access the Now.</h1>
      <div className='footer-shoe'>
        <Row>
          <Col span={4}>
            <p className='item-unique'>Air Jordan</p>
            <p className='item'>Air Jordan</p>
            <p className='item'>Air Jordan</p>
            <p className='item'>Air Jordan</p>
            <p className='item'>Air Jordan</p>
            <p className='item'>Air Jordan</p>
            <p className='item'>Air Jordan</p>
          </Col>
          <Col span={4}>
            <p className='item-unique'>Air Jordan</p>
            <p className='item'>Air Jordan</p>
            <p className='item'>Air Jordan</p>
            <p className='item'>Air Jordan</p>
            <p className='item'>Air Jordan</p>
            <p className='item'>Air Jordan</p>
            <p className='item'>Air Jordan</p>
          </Col>
          <Col span={4}>
            <p className='item-unique'>Air Jordan</p>
            <p className='item'>Air Jordan</p>
            <p className='item'>Air Jordan</p>
            <p className='item'>Air Jordan</p>
            <p className='item'>Air Jordan</p>
            <p className='item'>Air Jordan</p>
            <p className='item'>Air Jordan</p>
          </Col>
          <Col span={4}>
            <p className='item-unique'>Air Jordan</p>
            <p className='item'>Air Jordan</p>
            <p className='item'>Air Jordan</p>
            <p className='item'>Air Jordan</p>
            <p className='item'>Air Jordan</p>
            <p className='item'>Air Jordan</p>
            <p className='item'>Air Jordan</p>
          </Col>
          <Col span={4}>
            <p className='item-unique'>Air Jordan</p>
            <p className='item'>Air Jordan</p>
            <p className='item'>Air Jordan</p>
            <p className='item'>Air Jordan</p>
            <p className='item'>Air Jordan</p>
            <p className='item'>Air Jordan</p>
            <p className='item'>Air Jordan</p>
          </Col>
          <Col span={4}>
            <p className='item-unique'>Air Jordan</p>
            <p className='item'>Air Jordan</p>
            <p className='item'>Air Jordan</p>
            <p className='item'>Air Jordan</p>
            <p className='item'>Air Jordan</p>
            <p className='item'>Air Jordan</p>
            <p className='item'>Air Jordan</p>
          </Col>
        </Row>
      </div>
      <hr/>
      <div className='footer-about'>
        <div>
            <button className='footer-btn'>Vietnam | English | Currency</button>
        </div>
        <div>
            <p>Find Us on Social</p>
            <div className='footer-social'>
            <TwitterOutlined />
            <FacebookOutlined />
            <InstagramOutlined />
            <YoutubeOutlined />
            </div>
        </div>
        <div>
            <p>Download Our App</p>
            <div className='footer-operation'>
            <AppleFilled />
            <AndroidFilled />
            </div>
        </div>
        <div>
            <p>Proudly Built in HaNoi, VietNam</p>
        </div>
      </div>
    </div>
    <div className='footer-help'>
        <p className='footer-text'>HELP | HOW IT WORKS | PRIVACY | TERMS | JOBS | CONTACT | PRODUCT SUGGESTION | PRESS | YOUR PRIVACY CHOICES</p>
        <p className='footer-text'>EN EN-GB IT DE FR FR-CA ZH-CN ZN-TW JA KO ES-MX ES-US ES-ES</p>
      </div>
  </div>;
}
