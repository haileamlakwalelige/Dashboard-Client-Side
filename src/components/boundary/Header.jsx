import React from 'react';
import { images } from '../../constant';


const Header = () => {
  return (
    <section>
      <header>
        <div>
          <img src={images.logo} alt="Logo" />
        </div>
        <div></div>
      </header>
    </section>
  );
};

export default Header;
