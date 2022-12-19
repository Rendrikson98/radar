import { Button, MenuItem, Tag } from '@blueprintjs/core';
import { Select2 } from '@blueprintjs/select';
import { ItemRenderer } from '@blueprintjs/select/lib/esm/common';
import { useEffect, useState } from 'react';
import { useAppSelector } from '../../hooks/hooks';
import { DataModel, menuModel, SideMenuModel } from '../../models';
import { data } from '../../services/data';

import './styles.scss';

type VerifyFilterPropertirType = {
  isActivePropertie: boolean;
  properties: Array<string>;
};

type OrderBy = 'asc' | 'desc';

type ColumnsTable =
  | 'title'
  | 'status'
  | 'trader'
  | 'counterparty'
  | 'book'
  | 'source';

const Table = () => {
  const sideMenuInformation: SideMenuModel[] = useAppSelector(
    (state) => state.sideMenuState
  );
  const menuInformation: menuModel = useAppSelector((state) => state.menuState);

  const [selectedFilm, setSelectedScare] = useState<string>();
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

  const [sortField, setSortField] = useState<string>('');
  const [order, setOrder] = useState<OrderBy>('asc');

  const handleSorting = (sortField: ColumnsTable, sortOrder: OrderBy): void => {
    const sorted = [...dataTable].sort((a: DataModel, b: DataModel) => {
      return (
        a[sortField].toString().localeCompare(b[sortField].toString(), 'en', {
          numeric: true,
        }) * (sortOrder === 'asc' ? 1 : -1)
      );
    });

    setDataTable(sorted);
  };

  const handleSortingChange = (column: ColumnsTable) => {
    const sortOrder = column === sortField && order === 'asc' ? 'desc' : 'asc';
    setSortField(column);
    setOrder(sortOrder);
    handleSorting(column, sortOrder);
  };

  useEffect(() => {
    if (
      verifyFilterPropertie().isActivePropertie &&
      !menuInformation.searchTitle
    ) {
      let newData: DataModel[] = [];
      data.map((item) => {
        verifyFilterPropertie().properties.map((status) => {
          if (item.status === status) {
            newData.push(item);
          }
        });
      });
      setDataTable(newData);
    } else if (
      !verifyFilterPropertie().isActivePropertie &&
      menuInformation.searchTitle
    ) {
      const result = data.filter((item) =>
        item.title.toLowerCase().match(menuInformation.searchTitle)
      );
      setDataTable(result);
    } else if (
      verifyFilterPropertie().isActivePropertie &&
      menuInformation.searchTitle
    ) {
      let newData: DataModel[] = [];
      data.map((item) => {
        verifyFilterPropertie().properties.map((status) => {
          if (item.status === status) {
            newData.push(item);
          }
        });
      });

      const result = newData.filter((item) =>
        item.title.toLowerCase().match(menuInformation.searchTitle)
      );
      setDataTable(result);
    } else {
      setDataTable(data);
    }
  }, [sideMenuInformation, menuInformation]);

  const renderSquare: ItemRenderer<string> = (
    square,
    { handleClick, handleFocus, modifiers, query }
  ) => {
    if (!modifiers.matchesPredicate) {
      return null;
    }
    return (
      <MenuItem
        active={modifiers.active}
        disabled={modifiers.disabled}
        key={square}
        onClick={handleClick}
        onFocus={handleFocus}
        roleStructure="listoption"
        text={square}
      />
    );
  };

  const backgroundColor = {
    red: 'backgroundRed',
    orange: 'backgroundOrange',
    gray: 'backgroundGray',
  };

  return (
    <div className="containerTable">
      <table className="table">
        <thead>
          <tr>
            <th onClick={() => handleSortingChange('title')}>TITLE</th>
            <th>
              <Select2
                items={['teste']}
                itemRenderer={renderSquare}
                noResults={
                  <MenuItem
                    disabled={true}
                    text="No results."
                    roleStructure="listoption"
                  />
                }
                onItemSelect={setSelectedScare}
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
            <th onClick={() => handleSortingChange('status')}>STATUS</th>
            <th onClick={() => handleSortingChange('trader')}>TRADER</th>
            <th onClick={() => handleSortingChange('counterparty')}>
              COUNTERPARTY
            </th>
            <th onClick={() => handleSortingChange('book')}>BOOK</th>
            <th onClick={() => handleSortingChange('source')}>SOURCE</th>
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
    </div>
  );
};

export default Table;
