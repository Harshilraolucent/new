import React from 'react';
import navigation from './navigation.json';

const HeaderCenter = () => {
  return (
    <div className='col-2 col'>
      <nav>
        <ul id="nav-menu-desktop-list">
          {navigation.map(item => {
            return (
              <li className="nav-primary-link nav-mega-menu new-arrivals dropdown has_sub_menu" >
                <a className="nav-category-header" href={item.url}>
                  {item.title}
                </a>
              </li>
            )
          })}

        </ul>
      </nav>
    </div>
  );
}

export default HeaderCenter;