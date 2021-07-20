import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import Image from '../src/todo-list-logo.png';

function App() {
  return (
    <>
    <div className="title">
      <h2>Báo cáo cuối kỳ môn học công nghệ phần mềm nâng cao</h2>
    </div>
    <div className="content">
      <div className="info">
        <div className="ds-nhom-07">
          <h3>Nhóm 07</h3>
          <table>
            <tr>
              <td>Trần Hoài Đức</td>
              <td>-</td>
              <td>44.01.104.076</td>
            </tr>
            <tr>
              <td>Nguyễn Thành Duy</td>
              <td>-</td>
              <td>44.01.104.070</td>
            </tr>
            <tr>
              <td>Nguyễn Thị Uyển Cương</td>
              <td>-</td>
              <td>44.01.104.058</td>
            </tr>
            <tr>
              <td>Nguyễn Dương Hồng Diệu</td>
              <td>-</td>
              <td>44.01.104.004</td>
            </tr>
          </table>
        </div>
        <div className="image-logo">
          <img src={Image} alt="todo-list-logo" width='250' height='250'/>
        </div>
      </div>
    
      <div className='todo-app'>
        <TodoList />
      </div>
    </div>
    </>
  );
}

export default App;
