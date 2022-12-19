import {
  Button,
  ButtonGroup,
  Icon,
  InputGroup,
  Collapse,
  Pre,
  Tag,
  Navbar,
  NavbarGroup,
  NavbarHeading,
  Alignment,
} from '@blueprintjs/core';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { SideMenuModel } from '../../models/sideMenuModel';
import {
  activeOption,
  openOrCloseProperties,
} from '../../store/features/sideMenuSlice';

import './styles.scss';

const Menu = () => {
  const sideMenuInformation: SideMenuModel[] = useAppSelector(
    (state) => state.sideMenuState
  );

  const dispatch = useAppDispatch();

  const [sideMenuOption, setSideMenuOption] =
    useState<SideMenuModel[]>(sideMenuInformation);
  const [filterProperties, setFilterProperties] = useState<string>('');

  const handleButton = (index: number): void => {
    dispatch(openOrCloseProperties(index));
  };

  const handleFilterProperties = (name: string): void => {
    if (name) {
      const result = sideMenuInformation.filter((item) =>
        item.name.toLowerCase().match(name.toLowerCase())
      );

      setSideMenuOption(result);
      setFilterProperties(name);
    } else {
      setSideMenuOption(sideMenuInformation);
      setFilterProperties('');
    }
  };

  useEffect(() => {
    handleFilterProperties(filterProperties);
  }, [sideMenuInformation]);

  return (
    <nav className="navWrap">
      <Navbar className="navbarLeft" style={{ background: '#30404d' }}>
        <NavbarGroup align={Alignment.LEFT} style={{ width: '100%' }}>
          <NavbarHeading className="navHeading">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABTCAYAAAAiNXGsAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAT8SURBVHgB7ZyPldM4EMYn28Clg/NVsOngch1sB/gqYDtYUwF0YDqADhwq2KUChwpYKviQkEgUs9GM/tiRAr/35uXlORrJnyfSSJa9ooUAsFYfG2u3yhpra2s/eba2t/ZZ2dNqtdrRtaDFUHavbFD2FekMylplDdWIavjWnsScDMruqAYWEmTKqKylErmQIFNGlPIXg+lD3qIs3lIGVhQJzNUZyIwspbFX9p8ayfYUyQ1FoER5pT4eqUxRNI2yRyR0zsERoyp7UB8dxaHzkx95iWPP7pWFyXcaazrn2Sr7l+LplP83NCdaFMSxg8k/1pH1rm35j4jjgeYiUpQemUcK7U/Ze4STXxzl9A5h7DDz0GkFCo2gV5QL2wBpOq9/d08LAjPlCGlfQzmASZwkjLhQgmUvXkg7o/o6t0Jp8vaIC2edVpxHYXvjk0BbkVSUtCuQCZjRSyrOlmKALDT1bxoqCMj/VgOFApMzcOTryDID+YCxDfErjZZFR59QYEYrDnnUQJazfKQKgGwpZJvTWUMVANkAwkeN0FFPFQHZ9GHNOZF0ug1VhPBi33NOBsZBFX3LFMF5DZwDjpYqBPw/QQ/t63OFtwJhishwQ4HJiLm8ZuuWcZc2N4z/T2ol7JkqxLb7ifnZyfmHCLOjuvnMHL91v7jC/O0vxypeOlz7/3G/3Jw78AJ7qhtOmJPAcIX5y1+uemG4/vFkYDncPtHdsq+U6sCib86VQsg5Rt1w+x34I8wZXGG8/0HUulnHIkhOT87fFeabvxxVmfU6NMzxs8KM/nJsAlg6DXP8i/vl5tyBF6hdGK79J4HhCsMlQLdUN9yOiZMpQ4gwm5pn12S2k/h4OltYMDVvqUIgWJmcljlEjHBqnm+3wLLcMcc/eY9Cdi+moYqAbM235ZysBU6u8S5BI3E0ZHFUAJBFy07qTLL2G35D/AKodn4QnIt8ZydkUXMN965HCgGyqLmG3Q4thQJZ1IyliQP5/piwaHEqkESNptYdVQ3Fogq/E1ZS2x68d5SCvQKjsLLxUuIgcNcm5QB/9vl6K2cnYRM+AIvsDB8QhjxnCWhIh3D63AIh/lmCjuYiUhyNjiAddalPnwyIo6NAYp5X6tRHypMcOzLTfL3Esdfm7qKAibDpM9obil+Mf6P8d5QCTJg2gt/pnZ05nqOeE92+ljkPHYn6b9lxJ/xgnfZgBELYELk0IzzthxHkAceL691R9dKJ9uAFkiaBS6Hbs/a099zw3p0r4Ovpe/ivQAnRs4NnMzPMFGf0lP81aiBb0Blhwq/xVN5ieYEkggxCX31ItEwZwXdqd7bBc8IJEpMAajaugxhG8AJp3y3yiPTV+tF9hK8PSX17wI/VyRXM3Cblsf89mVzhPfdDmCv8Mz9prOmdXNP3x3yj4/tjDs9o+3aNWrFeK7un+Jxnr+z/w7tqwHdMEkbEPjWWCMImki/hn/wiT+c5YKHlB6RfUC1IB+lUBXkE6jGTQMjzWhZvvsM1oCiBYDpzyS0RH7ss7bGN0eE2Io0+tkE4pvApeIf3aBC/DuIywpygKITx65wmts78C1Q0n0AtU0+L9JGmo6WZSyCkd6xhI81cWIFSM9sRx/flpdCjtLujyJMkxjJPx5oTLDvDLl+QKTMLNKLS/YAHMgtURseaC6QnidclyBTEDfE9Kn/AQ4xQoPo61lycEej3FWQKjkliS4XwHQ5+WzAkYtSAAAAAAElFTkSuQmCC" />
            Radar
          </NavbarHeading>
          <div className="iconsWrap">
            <Icon icon="user" />
            <Icon icon="notifications" />
            <Icon icon="help" />
          </div>
        </NavbarGroup>
      </Navbar>
      <Navbar className="headerOpenFlags">
        <NavbarGroup align={Alignment.LEFT} style={{ width: '100%' }}>
          <Button
            icon={<Icon icon="chevron-left" />}
            minimal={true}
            text="Sets"
          />
          <p>Open Flags</p>
        </NavbarGroup>
      </Navbar>

      <InputGroup
        leftIcon={<Icon icon="filter" />}
        large={true}
        placeholder="Filter Properties..."
        className="filter"
        onChange={(event) => handleFilterProperties(event.target.value)}
      />

      {sideMenuOption?.map((item) => (
        <ButtonGroup vertical key={item.id}>
          <Button
            large={true}
            rightIcon={
              <Icon icon="chevron-right" style={{ color: '#a4afb3' }} />
            }
            style={{ background: '#394b59', color: '#a4afb3' }}
            text={item.name}
            alignText="left"
            onClick={() => handleButton(item.id)}
          />
          <Collapse isOpen={item.isOpen} className="collapseSideBar">
            <Pre>
              {item.options.map((option) => (
                <Tag
                  key={option.id}
                  className={!option.selected ? 'tagSideMenu' : ''}
                  icon="small-cross"
                  onClick={() =>
                    dispatch(
                      activeOption({
                        indexPropertie: item.id,
                        indexOption: option.id,
                      })
                    )
                  }
                  intent={option.selected ? 'success' : 'none'}
                >
                  {option.name}
                </Tag>
              ))}
            </Pre>
          </Collapse>
        </ButtonGroup>
      ))}
    </nav>
  );
};

export default Menu;
