import React, { useState } from 'react';

import SearchBar from '../SearchBar';
import Avatar from '../Common/Avatar';
import ToggleSwitch from '../ToggleSwitch';
import Button from '../Common/Button';
import { HeaderContainer, HeaderSection } from './Header.styled';
import { useVideoContext } from '../../providers/Video';

const Header = () => {
  const { dispatch } = useVideoContext();

  const [keyword, setKeyword] = useState('');
  const [isCheck, setCheck] = useState(false);

  const handleToggle = (e) => {
    setCheck(e.target.checked);
  };

  const handleOnChange = (e) => setKeyword(e.target.value);

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') dispatch({ type: 'VIDEO/SET_KEYWORD', payload: keyword });
  };

  return (
    <HeaderContainer>
      <HeaderSection>
        <Button>
          <span className="sr-only">Open aside menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </Button>
        <SearchBar value={keyword} onChange={handleOnChange} onKeyDown={handleKeyPress} />
      </HeaderSection>
      <HeaderSection>
        <div style={{ marginRight: '1rem' }}>
          <ToggleSwitch
            toggleName="theme-toggle-switch"
            checked={isCheck}
            onChange={handleToggle}
          />
        </div>
        <Avatar alt="avatar" />
      </HeaderSection>
    </HeaderContainer>
  );
};

export default Header;
