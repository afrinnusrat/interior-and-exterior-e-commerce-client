import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { ListItem, DropBtn, NavLink, SignOutBtn } from '../Sidebar.styles';

import { SideDrawer } from '../../../SideDrawer/SideDrawer.component';

import { Store } from '../../../../modules/rootReducer';
import { selectIsAuth } from '../../../../modules/user/user.selectors';
import { checkSession } from '../../../../modules/user/user.actions';

interface MainMenuSelection {
  isAuth: boolean;
}

interface IProps extends MainMenuSelection {
  showSidebar: boolean;
  handleCloseSidebar: () => void;
  openInterior: () => void;
  openExterior: () => void;
  checkSession: typeof checkSession;
}

const _MainMenu: React.FC<IProps> = ({
  openInterior,
  openExterior,
  showSidebar,
  handleCloseSidebar,
  isAuth,
  checkSession
}) => {
  const handleLogout = () => {
    localStorage.removeItem('jwtToken');
    checkSession();
  };

  return (
    <SideDrawer
      toggled={showSidebar}
      handleClose={handleCloseSidebar}
      zIndex={10}
      title="Interior & Exterior"
    >
      <ListItem>
        <NavLink onClick={handleCloseSidebar} to="/">
          Home
        </NavLink>
      </ListItem>
      <ListItem>
        <DropBtn onClick={openInterior}>
          Interior
          <i className="fas fa-angle-right"></i>
        </DropBtn>
      </ListItem>
      <ListItem>
        <DropBtn onClick={openExterior}>
          Exterior
          <i className="fas fa-angle-right"></i>
        </DropBtn>
      </ListItem>
      {!isAuth && (
        <ListItem>
          <NavLink onClick={handleCloseSidebar} to="/account">
            Account
          </NavLink>
        </ListItem>
      )}
      {isAuth && (
        <ListItem>
          <SignOutBtn onClick={handleLogout}>Logout</SignOutBtn>
        </ListItem>
      )}
      <ListItem>
        <NavLink onClick={handleCloseSidebar} to="/cart">
          Cart (2)
        </NavLink>
      </ListItem>
    </SideDrawer>
  );
};

const mapStateToProps = createStructuredSelector<Store, MainMenuSelection>({
  isAuth: selectIsAuth
});

export const MainMenu = connect(
  mapStateToProps,
  { checkSession }
)(_MainMenu);
