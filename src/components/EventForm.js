import React, { useState, useContext } from "react";

import { CREATE_EVENT, DELETE_ALL_EVENTS } from "../actions";
import AppContext from "../contexts/AppContext";

const EventForm = () => {
  const { state, dispatch } = useContext(AppContext);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const addEvent = (e) => {
    e.preventDefault();
    dispatch({
      type: CREATE_EVENT,
      title,
      body,
    });
    setTitle("");
    setBody("");
  };

  const deleteAllEvents = (e) => {
    e.preventDefault();
    const result = window.confirm("全てのイベントを本当に削除してよろしいですか？");
    if (result) {
      dispatch({ type: DELETE_ALL_EVENTS });
    }
  };

  const unCreatable = title === "" || body === "";

  return (
    <>
      <h4>イベント作成フォーム</h4>
      <form>
        <div className="form-group">
          <label htmlFor="fromEventTitle">タイトル</label>
          <input id="fromEventTitle" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="fromEventBody">ボディ</label>
          <textarea id="fromEventBody" className="form-control" value={body} onChange={(e) => setBody(e.target.value)} />
        </div>
        <button className="btn btn-primary" onClick={addEvent} disabled={unCreatable}>
          イベントを作成する
        </button>
        <button className="btn btn-danger" onClick={deleteAllEvents} disabled={state.length === 0}>
          全てのイベントを削除する
        </button>
      </form>
    </>
  );
};

export default EventForm;
