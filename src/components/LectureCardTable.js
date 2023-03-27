import React from 'react';
import LectureCardTableRow from '../components/LectureCardTableRow';
const LectureCardTable = (props) => {
  return (
    <div>
      <div style={{ background: '#454d55',borderRadius:"8px 8px 0px 0px" }}>
        <p1 style={{ color: 'white' }}>{props.tableTitle}</p1>
      </div>
      <table class="table table-white table-bordered table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">English</th>
            <th scope="col">Türkçe</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((i, index) => {
            return (
              <LectureCardTableRow
                rowCount={index + 1}
                rowEn={i[0]}
                rowTr={i[1]}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default LectureCardTable;
