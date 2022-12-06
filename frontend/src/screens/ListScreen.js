import React from 'react';
import { Table, Button, Row, Col } from 'react-bootstrap';

const ListScreen = () => {
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>FIRST</th>
            <th>LAST</th>
            <th>EMAIL</th>
            <th>DOB</th>
            <th>AGE</th>
            <th>SKILL</th>
            <th>DESCRIPTION</th>
            <th>SKILL LVL</th>
            <th>ACTIVE</th>
          </tr>
        </thead>
        <tbody></tbody>
      </Table>
    </>
  );
};

export default ListScreen;
