import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

const App = (props) => {
  return (
    <>
      <div className="container">
        <h4>イベント作成フォーム</h4>
        <form>
          <div calssName="form-group">
            <label htmlFor="fromEventTitle">タイトル</label>
            <input id="fromEventTitle" className="form-control" />
          </div>
          <div calssName="form-group">
            <label htmlFor="fromEventBody">ボディ</label>
            <textarea id="fromEventBody" className="form-control" />
          </div>
          <button className="btn btn-primary">イベントを作成する</button>
          <button className="btn btn-danger">全てのイベントを削除する</button>
        </form>
        <hr className="" />
        <h4>イベント一覧</h4>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>タイトル</th>
              <th>ボディ</th>
              <th></th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </>
  );
};

export default App;
