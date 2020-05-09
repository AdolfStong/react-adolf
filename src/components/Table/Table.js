/*
 * @Descripttion: 
 * @version: 
 * @Author: shentong
 * @Date: 2020-02-28 18:12:34
 * @LastEditors: shentong
 * @LastEditTime: 2020-03-05 19:13:35
 */
import React from 'react'

const Theader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
        <th>Remove</th>
      </tr>
    </thead>
  )
}

const Tbody = props => {
  const rows = props.characterData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.job}</td>
        <td>
          <button onClick={() => props.removeCharacter(index)}>delete</button>
        </td>
      </tr>
    )
  })
  return <tbody>{rows}</tbody>
}

// class Table extends React.Component {
//   render () {
//     const { characterData } = this.props
//     return (
//       <table>
//           <Theader/>
//           <Tbody characterData = {characterData}/>
//       </table>
//     )
//   }
// }

const Table = (props) => {
  const { characterData, removeCharacter } = props
  return (
    <table>
      <Theader/>
      <Tbody characterData = {characterData} removeCharacter={removeCharacter}/>
    </table>
  )
}

export default Table