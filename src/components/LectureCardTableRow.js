import React from 'react'

const LectureCardTableRow = ({rowCount, rowEn, rowTr}) => {
  return (
  
        <tr>
            <th scope="row">{rowCount}</th>
            <td>{rowEn} </td>
            <td>{rowTr}</td>
        </tr>
        
 
  )
};

export default LectureCardTableRow;