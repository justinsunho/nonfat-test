import React, { useState } from "react";
import { TableHeaderRow, TableRow } from "../../molecules";
import styles from "./styles.module.scss";

const Table = ({ projects, setSelectedItems }) => {
  const [projectState, updateProjects] = useState(projects);
  const projectKeys = Object.keys(projectState[0]);

  const orderProjectsByDate = () => {
    const orderedProjects = [...projects].sort((a, b) => {
      if (new Date(a.postedDate) > new Date(b.postedDate)) {
        return 1;
      } else if (new Date(a.postedDate) === new Date(b.postedDate)) {
        if (a.name < b.name) {
          return 1;
        } else {
          return -1;
        }
      } else {
        return -1;
      }
    });

    updateProjects([...orderedProjects]);
  };

  return (
    <table className={styles.table}>
      <tbody>
        <TableHeaderRow
          tableKeys={projectKeys}
          orderProjectsByDate={orderProjectsByDate}
        />
        {projectState.map((project, index) => (
          <TableRow
            tableValue={project}
            i={index}
            key={project.name}
            setSelectedItems={setSelectedItems}
          />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
