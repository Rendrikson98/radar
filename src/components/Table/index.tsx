import { Button, MenuItem, Tag } from '@blueprintjs/core';
import { Select2 } from '@blueprintjs/select';
import { ItemRenderer } from '@blueprintjs/select/lib/esm/common';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { DataModel, SideMenuModel } from '../../models';
import { data } from '../../services/data';

import './styles.scss';

type VerifyFilterPropertirType = {
  isActivePropertie: boolean;
  properties: Array<string>;
};

const Table = () => {
  const sideMenuInformation: SideMenuModel[] = useAppSelector(
    (state) => state.sideMenuState
  );

  const [selectedFilm, setSelectedFilm] = useState<string>();
  const [dataTable, setDataTable] = useState<DataModel[]>(data);

  const verifyFilterPropertie = (): VerifyFilterPropertirType => {
    let properties: Array<string> = [];

    sideMenuInformation.forEach((item) =>
      item.options.forEach(
        (option) => option.selected && properties.push(option.name as string)
      )
    );

    return {
      isActivePropertie: properties.length > 0,
      properties,
    };
  };

  useEffect(() => {
    if (verifyFilterPropertie().isActivePropertie) {
      let newData: DataModel[] = [];
      data.map((item) => {
        verifyFilterPropertie().properties.map((status) => {
          if (item.status === status) {
            newData.push(item);
          }
        });
      });
      setDataTable(newData);
    } else {
      setDataTable(data);
    }
  }, [sideMenuInformation]);

  const renderFilm: ItemRenderer<string> = (
    film,
    { handleClick, handleFocus, modifiers, query }
  ) => {
    if (!modifiers.matchesPredicate) {
      return null;
    }
    return (
      <MenuItem
        active={modifiers.active}
        disabled={modifiers.disabled}
        key={film}
        onClick={handleClick}
        onFocus={handleFocus}
        roleStructure="listoption"
        text={film}
      />
    );
  };

  const backgroundColor = {
    red: 'backgroundRed',
    orange: 'backgroundOrange',
    gray: 'backgroundGray',
  };
  return (
    <table className="table">
      <thead>
        <tr>
          <th>TITLE</th>
          <th>
            <Select2
              items={['teste']}
              itemRenderer={renderFilm}
              noResults={
                <MenuItem
                  disabled={true}
                  text="No results."
                  roleStructure="listoption"
                />
              }
              onItemSelect={setSelectedFilm}
            >
              <Button
                minimal={true}
                icon="error"
                rightIcon="caret-down"
                placeholder="Select a film"
                className="selectTable"
              />
            </Select2>
          </th>
          <th>STATUS</th>
          <th>TRADER</th>
          <th>COUNTERPARTY</th>
          <th>BOOK</th>
          <th>SOURCE</th>
        </tr>
      </thead>
      <tbody>
        {dataTable.map((item, index) => (
          <tr key={index}>
            <td>{item.title}</td>
            <td>
              <div className={`square ${backgroundColor[item.square]}`} />
            </td>
            <td>
              <Tag className="tagTable">{item.status}</Tag>
            </td>
            <td>{item.trader}</td>
            <td>{item.counterparty}</td>
            <td>{item.book}</td>
            <td>{item.source}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
