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
import './styles.scss';
const Menu = () => {
  return (
    <Navbar className="navbarWrap" style={{ background: '#ecf1f5' }}>
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
            placeholder="Find tags"
            rightElement={
              <Tag minimal={true} round={true}>
                {Math.floor(10000 / Math.max(1, Math.pow(2, 2)))}
              </Tag>
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
          <Button text="Take Action" disabled={true} />
        </div>
      </NavbarGroup>
    </Navbar>
  );
};

export default Menu;
