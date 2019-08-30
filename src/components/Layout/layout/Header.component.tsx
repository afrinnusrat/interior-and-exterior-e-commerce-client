import React from 'react';

import {
  HeaderWrapper,
  HeaderLimiter,
  Logo,
  LogoTitle,
  Nav,
  Hamburger,
  SearchBtn
} from './Header.styles';
import { HeaderLinks } from './header/HeaderLinks.component';

interface IProps {
  handleOpen: () => void;
  toggleSearchForm: () => void;
}

export const Header: React.FC<IProps> = ({ handleOpen, toggleSearchForm }) => {
  return (
    <HeaderWrapper>
      <HeaderLimiter>
        <Logo to="/">
          <LogoTitle>Interior & Exterior</LogoTitle>
        </Logo>
        <Nav>
          <Hamburger aria-label="open menu" title="Menu" onClick={handleOpen}>
            <i className="fas fa-bars"></i>
          </Hamburger>
          <HeaderLinks />
          <SearchBtn onClick={toggleSearchForm}>
            <i className="fas fa-search"></i>
          </SearchBtn>
        </Nav>
      </HeaderLimiter>
    </HeaderWrapper>
  );
};
