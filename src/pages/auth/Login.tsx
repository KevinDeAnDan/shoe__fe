/* eslint-disable @typescript-eslint/no-unused-expressions */
import React from 'react';
import {  useNavigate,NavigateFunction  } from 'react-router-dom';
import { DebounceInput } from 'react-debounce-input';
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { RootState } from '../../redux/store';
import { loginRequest } from '../../redux/actions';

function LoginCp() {
  const [account, setAccount] = React.useState({
    email: '',
    passWord: '',
  });
  const [show, setShow] = React.useState<boolean>(false);
  const auth = useAppSelector((state: RootState) => state.AuthReducer);
  // eslint-disable-next-line @typescript-eslint/no-use-before-define, react-hooks/rules-of-hooks
  const dispatch = useAppDispatch();
  const navigate: NavigateFunction = useNavigate();
  function handleGoBack() {
    navigate(-1);
  }
  React.useEffect(() => {
    // neu co trang truoc thi goBack neu khong co return trang chu
    auth.data !== null && ( handleGoBack || navigate('/', { replace: true }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth.data]);

  return (
    <div className="wrapp-form">
      <div className="form-container">
        <div className="form-left">
          <span className="name-form">LOGIN FORM</span>
          <span className="name-title">Email</span>
          <DebounceInput
            debounceTimeout={500}
            className="input"
            placeholder="Email"
            onChange={(e) => {
              setAccount({
                ...account,
                email: e.target.value,
              });
            }}
          />
          <span className="name-title">passpord</span>
          <div className="wrap-input-password">
            <DebounceInput
              className="input-password"
              type={show === true ? 'text' : 'password'}
              placeholder="****"
              debounceTimeout={500}
              onChange={(e) => {
                setAccount({
                  ...account,
                  passWord: e.target.value,
                });
              }}
            />
            {show === true ? (
              // eslint-disable-next-line jsx-a11y/no-static-element-interactions
              <span onClick={() => setShow(false)}>
                {' '}
                <EyeOutlined />{' '}
              </span>
            ) : (
              // eslint-disable-next-line jsx-a11y/no-static-element-interactions
              <span onClick={() => setShow(true)}>
                {' '}
                <EyeInvisibleOutlined />{' '}
              </span>
            )}
          </div>
          <button onClick={() => {  dispatch(loginRequest(account)) ;
          }}>Dang nhap</button>
        </div>

        {/* <div className='form-right'>
          <div className='block'> </div>
          <div className='block'> </div>
          <div className='block'></div>
          <div className='block'> </div>
          <div className='block'></div>
          <div className='block'> </div>
          <div className='block'> </div>
          <div className='block'></div>
          <div className='block'></div>


          <h3 className='h3' >admin site pandashop</h3>


          {animeBlock()}


        </div> */}
      </div>
    </div>
  );
}

export default LoginCp;
