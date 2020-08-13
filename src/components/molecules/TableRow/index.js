import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";

const TableRow = ({ i, setSelectedItems, tableValue }) => {
  const [checked, setChecked] = useState(0);
  const { name, type, castingDirector, postedDate } = tableValue;

  const onChange = () => {
    setChecked(!checked);
  };

  useEffect(() => {
    setSelectedItems(tableValue, checked);
  }, [checked]);

  return (
    <tr className={styles.row}>
      <td className={`${styles.checkBoxWrapper} ${styles.rowItem}`}>
        <input type="checkbox" rel={i} onChange={onChange} checked={checked} />
      </td>
      <td className={styles.rowItem}>{name.toUpperCase()}</td>
      <td className={styles.rowItem}>{type}</td>
      <td className={styles.rowItem}>{castingDirector}</td>
      <td className={styles.rowItem}>{postedDate}</td>
    </tr>
  );
};

export default TableRow;
