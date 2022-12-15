import Menu from '../components/Menu';
import SideMenu from '../components/SideMenu/index';
import Table from '../components/Table';

import './styles.scss';

export const Radar = () => {
  return (
    <div className="container">
      <SideMenu />
      <div className="contentWrap">
        <Menu />
        <Table />
      </div>
    </div>
  );
};
