/* eslint-disable no-void */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useNavigate, NavigateFunction } from 'react-router-dom';
import { DebounceInput } from 'react-debounce-input';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useAppSelector, useAppDispatch } from '../../../redux/hooks';
import { RootState } from '../../../redux/store';
import { loginRequest } from '../../../redux/actions';

import './Login.scss';

export default function Login() {
  const [account, setAccount] = React.useState({
    email: '',
    passWord: '',
  });
  const [show, setShow] = React.useState<boolean>(false);
  const auth = useAppSelector((state: RootState) => state.AuthReducer);
  console.log('auth data ????', auth)
  const dispatch = useAppDispatch();
  const navigate: NavigateFunction = useNavigate();
//   function handleGoBack() {
//     navigate(-1);
//   }
  React.useEffect(() => {
    // neu co trang truoc thi goBack neu khong co return trang chu
    // auth.data !== null && (navigate('/home', { replace: true }) || navigate(-1)) 
    if (auth.data !== null) {
      const result = navigate('/home', { replace: true });
      if (result === void 0) {
        navigate(-1);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth.data]);
  return (
    <div className="wapper">
      <div className="wapper-child">
        <div className="sign-in">
          <h2>ĐĂNG NHẬP</h2>
          <hr />
          
            <div className="contain">
              <button className="user">
                <UserOutlined />
              </button>
              <DebounceInput
            debounceTimeout={5000}
            className="email"
            placeholder="Email"
            onChange={(e) => {
              setAccount({
                ...account,
                email: e.target.value,
              });
            }}
          />
            </div>
            <div className="contain">
              <button className="lock">
                <LockOutlined />
              </button>
              <DebounceInput
              className="password"
              type={show === true ? 'text' : 'password'}
              placeholder="****"
              debounceTimeout={5000}
              onChange={(e) => {
                setAccount({
                  ...account,
                  passWord: e.target.value,
                });
              }}
            />
            </div>
            <span className="forgot-password">Quên mật khẩu?</span>
            <div className="form-footer">
              <a className="form-btn">Tạo tài khoản mới</a>
              <a className="wrap">
                <button
                  className="form-btn"
                  onClick={() => {
                    dispatch(loginRequest(account));
                  }}
                >
                  Đăng nhập
                </button>
              </a>
            </div>
          
        </div>
      </div>
    </div>
  );
}
