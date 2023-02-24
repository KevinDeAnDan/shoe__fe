/* eslint-disable jsx-a11y/anchor-is-valid */
import './Browse.scss';
import { DownOutlined } from '@ant-design/icons';

export default function Browse() {
  return <div className='wapper'>
    <div className='title'>
        <h1 className='browse-title'>Sneakers</h1>
        <span className='browse-about'>Every sneaker you want is always available and verified by Soyuli. Elevate your life and style with Soyuli, here we sell all kinds of accessories, shoes, clothes, housewares, furniture, decorations and more features</span>
    </div>
    <div className='product'>
        <div className='product-navs'>
            <a className='nav'>SNEAKERS</a>
            <a className='nav'>SHOES</a>
            <a className='nav'>APPAREL</a>
            <a className='nav'>SNEAKERS</a>
            <a className='nav'>SNEAKERS</a>
        </div>
        <div className='product-list'>
            <div className='product-tab'>
                <div>Home / Sneakers</div>
                <div className='product-btn'>Sort By: Featured <DownOutlined /></div>
            </div>
            <div className='product-shoes'>
                <div className='shoe'>
                    <div className='shoe-img'>
                        <img src="https://images.stockx.com/images/Air-Jordan-1-Retro-High-85-Black-White-2023-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=1&trim=color&updated_at=1675762190&q=57" alt="" />
                    </div>
                    <h1>Jordan 1 Retro High 85 Black White (2023)</h1>
                    <p className='shoe-require'>Lowest Ask</p>
                    <p className='shoe-price'>$268</p>
                </div>
                <div className='shoe'>
                    <div className='shoe-img'>
                        <img src="https://images.stockx.com/images/Air-Jordan-1-Retro-High-85-Black-White-2023-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=1&trim=color&updated_at=1675762190&q=57" alt="" />
                    </div>
                    <h1>Jordan 1 Retro High 85 Black White (2023)</h1>
                    <p className='shoe-require'>Lowest Ask</p>
                    <p className='shoe-price'>$268</p>
                </div>
                <div className='shoe'>
                    <div className='shoe-img'>
                        <img src="https://images.stockx.com/images/Air-Jordan-1-Retro-High-85-Black-White-2023-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=1&trim=color&updated_at=1675762190&q=57" alt="" />
                    </div>
                    <h1>Jordan 1 Retro High 85 Black White (2023)</h1>
                    <p className='shoe-require'>Lowest Ask</p>
                    <p className='shoe-price'>$268</p>
                </div>
                <div className='shoe'>
                    <div className='shoe-img'>
                        <img src="https://images.stockx.com/images/Air-Jordan-1-Retro-High-85-Black-White-2023-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=1&trim=color&updated_at=1675762190&q=57" alt="" />
                    </div>
                    <h1>Jordan 1 Retro High 85 Black White (2023)</h1>
                    <p className='shoe-require'>Lowest Ask</p>
                    <p className='shoe-price'>$268</p>
                </div>
                <div className='shoe'>
                    <div className='shoe-img'>
                        <img src="https://images.stockx.com/images/Air-Jordan-1-Retro-High-85-Black-White-2023-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=1&trim=color&updated_at=1675762190&q=57" alt="" />
                    </div>
                    <h1>Jordan 1 Retro High 85 Black White (2023)</h1>
                    <p className='shoe-require'>Lowest Ask</p>
                    <p className='shoe-price'>$268</p>
                </div>
            </div>
        </div>
    </div>
  </div>;
}
