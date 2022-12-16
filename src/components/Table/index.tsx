import { Button, MenuItem, Tag } from '@blueprintjs/core';
import { Select2 } from '@blueprintjs/select';
import { ItemRenderer } from '@blueprintjs/select/lib/esm/common';
import { useState } from 'react';

import './styles.scss';

const Table = () => {
  const [selectedFilm, setSelectedFilm] = useState<string>();

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
        <tr>
          <td>BUY of $34.9M USD of LOPR on 1/29/15</td>
          <td>
            <div className="square backgroundRed" />
          </td>
          <td>
            <Tag className="tagTable">open</Tag>
          </td>
          <td>Prasanta Shivakrishnan</td>
          <td>Guerra Corporation</td>
          <td>PRHI-Z53</td>
          <td>Bank trading</td>
        </tr>
        <tr>
          <td>BUY of $34.9M USD of LOPR on 1/29/15</td>
          <td>
            <div className="square backgroundOrange" />
          </td>
          <td>
            <Tag className="tagTable">closed</Tag>
          </td>
          <td>Prasanta Shivakrishnan</td>
          <td>Guerra Corporation</td>
          <td>PRHI-Z53</td>
          <td>Bank trading</td>
        </tr>
        <tr>
          <td>BUY of $34.9M USD of LOPR on 1/29/15</td>
          <td>
            <div className="square backgroundGray" />
          </td>
          <td>
            <Tag className="tagTable">ESCALATED</Tag>
          </td>
          <td>Prasanta Shivakrishnan</td>
          <td>Guerra Corporation</td>
          <td>PRHI-Z53</td>
          <td>Bank trading</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
