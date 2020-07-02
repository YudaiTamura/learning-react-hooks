import React, { useContext } from "react";

import AppContext from "../contexts/AppContext";

const OperationLogs = () => {
  const { state } = useContext(AppContext);

  return (
    <>
      <h4>操作ログ一覧</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>内容</th>
            <th>日時</th>
          </tr>
        </thead>
        <tbody>
          {state.operationLogs.map((operationLog, index) => (
            <tr key={index}>
              <td>{operationLog.description}</td>
              <td>{operationLog.operatedAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default OperationLogs;
