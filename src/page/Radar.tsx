import Menu from '../components/Menu';
import SideMenu from '../components/SideMenu/index';

import './styles.scss';

export const Radar = () => {
  return (
    <div className="container">
      <SideMenu />
      <div className="contentWrap">
        <Menu />
      </div>
    </div>
  );
};
