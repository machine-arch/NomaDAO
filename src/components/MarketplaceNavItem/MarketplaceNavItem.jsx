import React from 'react';
import useDynamicImage from '../../hooks/useDynamicImage.js';
import useRemoveSpaces from '../../hooks/useRemoveSpaces.js';
import './MarketplaceNavItem.css';
export default function MarketplaceNavItem({ name, active, click }) {
  const removeSpaces = useRemoveSpaces;
  const image = useDynamicImage(
    removeSpaces(active === 'true' ? name + active : name),
    'svg',
  );
  return (
    <div className={`marketplaceNavItem-nav ${active === 'true' ? '' : 'marketplaceNavItem-nav-hover'}`}
      style={{
        color: active === 'true' ? 'white' : 'var(--gray-800, #3f3f3f)',
        backgroundColor: active === 'true' ? '#0699D2' : 'transparent'
      }}
      onClick={() => {
        click(name);
      }}
    >
      <img className='marketplaceNavItem-img' src={image} alt={name} />
      <p className='marketplaceNavItem-Text'
        style={{
          color: active === 'true' ? 'white' : 'var(--gray-800, #3f3f3f)'
        }}>{name}</p>
    </div>
  );
}
