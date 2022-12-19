import {
  Alignment,
  Button,
  Divider,
  Icon,
  InputGroup,
  Navbar,
  NavbarGroup,
  Tag,
} from '@blueprintjs/core';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { menuModel } from '../../models';
import { handleSearchTitle } from '../../store/features/menuSlice';
import './styles.scss';
const Menu = () => {
  const menuInformation: menuModel = useAppSelector((state) => state.menuState);
  const dispatch = useAppDispatch();

  return (
    <Navbar className="navbarWrap">
      <NavbarGroup
        align={Alignment.LEFT}
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ display: 'flex' }}>
          <InputGroup
            type="search"
            leftElement={<Icon icon="search" />}
            placeholder="Search for Alerts..."
            rightElement={
              <Tag minimal={true} round={true}>
                {menuInformation.searchTitle.length}
              </Tag>
            }
            onChange={(event) =>
              dispatch(handleSearchTitle(event.target.value))
            }
          />
          <Button
            icon="list"
            text="List"
            minimal={true}
            style={{ marginLeft: '1rem', color: 'black' }}
            className="menuButtonSelected"
          />
          <Button
            icon="grid-view"
            text="Group by Trader"
            minimal={true}
            style={{ margin: '0 0.5rem' }}
          />
          <Divider />
          <Button icon="caret-down" minimal={true} />
        </div>
        <div>
          <Button
            text="Take Action"
            disabled={true}
            className={'buttonTakeAction'}
          />
        </div>
      </NavbarGroup>
    </Navbar>
  );
};

export default Menu;
