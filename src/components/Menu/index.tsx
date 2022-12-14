import React from 'react';
import { Button, ButtonGroup, Icon, InputGroup } from '@blueprintjs/core';

import './styles.scss';

const Menu = () => {
  return (
    <nav className="navWrap">
      <header className="headerMenu">
        <div className="logoWrap">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEEAAABOCAYAAAB/oXuQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAASESURBVHgB7ZuNVdswEMcvLNBsUHeCZgRv0GxQj0AnSDYgnSBsQJnA6QTABIIJkk7wr4QU6ion6/yR2Bb83tODZ+vr/pYusnWa0ZkBMNd/Fi591Slzae7SkYNLzy496fQ4m812NEWM4Tpd61TqtEd3Sp0KnTIaO7qTuevwOSl1WtLYuJDxPkqngoZmION9FDpOkxm1ANbZrXS6FhYxDu9ep0eyTs/8PWind/DqzMg6S+NEc/rnSCVsdH0/6BIY1Z36MYxDXOuUUwd0+YVOG2GbCud2nrqB74h7+11Xw2vaX7r6Y+Kfx3HqileRxh/OZTzTlxzxkbGiPokIYJSX+oa++7W+iBARARQGXsAg7qO6CQE7B0PcwXr0wYFdod7V9PU7tcEpHHKCGxohsL8iHPtWI7ZmiI1SgCM1QqhGI1dnvglUdEcTAOGpcSOtIOtFyQGB9REqYEcuqSBUOKMJgbBPK2MFi4AAa5ogsN80mo2GwChQNGFgV7Ky0YDwmiCnCQO7xJbZBf67wI4SIGBb6WcK/SKM7zNWC2pGw7yaiXOIk/YFPuB/KV5f/K5cHm5tfU9p8ZO59u3tv8BQWVBCBKbE/nVKBG4mNRWOgJ8SuZkO3BN/ojThpvgiJMKO0uSRufbViPBZmDkFnplrX4wIX5gbB0oT7uF+NiJ8Ym48U5pwD3c+M+7Rv6p3clrtTE0Bzt4r+uBDBIMR4WSeYCKf0ZoSsOtgRPjD3EhSBOJ3uF9F4JbISb03VOAe7osR4YW5kVGacA9XGRHYpSSlSc5cewq+YlKCgP+QnB83KthXTEoI2IiXE8y9Kxc3xE2JnNKiYK79fvsP/CZFUlMiMBWKaoY5eHJKAIT3VDI/Y8lkKikBIN1TQZOdmglRY9cyVKBkMj/QhEHT/dUa1QaJTusKwkFnRaxgyRRqF/MzIKgJNpEUDo0GhTQiVTJpJaHgp6nHLMmDziJKyoKfBgLhoLPmu2qoj2McpRA1ArT3aQjHMBmmFNHaLc4C9UHUCuOPbV5TU7ini0tFkzcE9sVv37cARz+wYu7FhFC47HmHh0h/1kw5I1oWq/zWM6rw7i8RP/lS4kyxTpAdPNsz/a4eEiljDXCoqnqQn4Eyecx6o9OXa9evFWSHTJXX15BoeagxFWlg6zWwgRwF672vXcfMp665177x8Ebgpcu3RbPTtZtjna6esiZvyQlgOnALGSuvMYVh2cE9WVg7boTl+BEKa5REDIXKvINdTyhcFt/4FWQj561cbB6aIakEFapqhZAd2evKf0Yg/jPJlhMD+RPe4tR5FuhHkL2rxxg7r7RR9fh1mDwFdcEZtIYMMx8zpo7cGXHrDHrG6dPbu+s7l+/oROdMXSXiHE/o9re0R0t/0WP7i8GMD3RGCTqj+hADzX65trjkuwxa+osG9ffv8c8F5P5iKxFjUsZXQTN/cV1Tj3R0mTwFjREnRuzt7sQIDOnxz0WDJ1oiNeN9XMcVurHFxPY8ToDcX/iMx+n1hRPj17s03gdhf2GuJXH6TkxFjFenR+8VN0UG9/h/Aa5fiIg8bVdJAAAAAElFTkSuQmCC" />
          <p>Radar</p>
        </div>
        <div className="headerIcons">
          <Icon icon="user" />
          <Icon icon="notifications" />
          <Icon icon="help" />
        </div>
      </header>
      <div className="headerOpenFlags">
        <Button
          icon={<Icon icon="chevron-left" style={{ color: '#8a9aa7' }} />}
          minimal={true}
          color="#222b32"
          text="Sets"
        />
        <p>Open Flags</p>
      </div>

      <InputGroup
        leftIcon={<Icon icon="filter" style={{ color: '#8a9aa7' }} />}
        large={true}
        placeholder="Filter histogram..."
        className="filter"
      />

      <ButtonGroup vertical>
        <Button>status</Button>
        <div
          style={{ backgroundColor: 'gray', width: '100px', height: '100px' }}
        >
          <div style={{ display: 'flex' }}>
            <p>X</p>
            <p>Open</p>
          </div>
          <div style={{ display: 'flex' }}>
            <p>X</p>
            <p>Closed</p>
          </div>
          <div style={{ display: 'flex' }}>
            <p>X</p>
            <p>Escalated</p>
          </div>
        </div>
        <Button>Time</Button>
        <Button>Assignee</Button>
        <Button>Watcher</Button>
        <Button>Counterparty</Button>
        <Button>Saverity</Button>
        <Button>Source</Button>
        <Button>Trader</Button>
      </ButtonGroup>
    </nav>
  );
};

export default Menu;
