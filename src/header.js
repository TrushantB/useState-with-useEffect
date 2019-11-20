import React from 'react';

 function Header(props) {
     console.log(props.myData);
     
  return (
    <table>
        <thead>
        <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Author</th>
        </tr>
        </thead>
        <tbody>
         {props.myData.map((item) => {
          return (
            <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.author}</td>
            </tr>
          )
       })}
      </tbody>
    </table>
  );
}
export default Header;