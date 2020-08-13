import React from "react";
import startcase from "lodash.startcase";
import styles from "./styles.module.scss";

const TableHeaderRow = ({ orderProjectsByDate, tableKeys }) => {
  return (
    <tr className={styles.row}>
      <td></td>
      {tableKeys.map((tableKey) =>
        tableKey != "postedDate" ? (
          <th className={styles.rowItem} key={tableKey}>
            {startcase(tableKey)}
          </th>
        ) : (
          <th
            className={`${styles.rowItem} ${styles.rowItemButton}`}
            key={tableKey}
            onClick={orderProjectsByDate}
          >
            {startcase(tableKey)}
          </th>
        )
      )}
    </tr>
  );
};

export default TableHeaderRow;
