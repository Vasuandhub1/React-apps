import React, { useState } from "react";

function Todo() {
  const [text, setTodo] = useState("");
  const [text2, settext2] = useState("");
  const [list, setlist] = useState([]);
  const [edit, setEdits] = useState([]);
  const handeltext = (event) => {
    setTodo(event.target.value);
  };

  const handelbutton = () => {
    if (text.length === 0) {
    } else {
      setlist([...list, text]);
      setEdits([...edit, false]);
      setTodo("");
    }
  };

  const handeldelete = (index) => {
    var temp = [...list];
    var tempedit = [...edit];
    temp.splice(index, 1);
    setlist(temp);
    tempedit.splice(index, 1);
    setEdits(tempedit);
    console.log(handeldelete);
  };
  const handelEdit = (index) => {
    if (edit[index] === false) {
      var temp = [...edit];
      temp.splice(index, 1, true);
      setEdits(temp);
      //   console.log(edit)
    }
  };
  const handelcancel = (index) => {
    if (edit[index] === true) {
      var temp = [...edit];
      temp.splice(index, 1, false);
      setEdits(temp);
    }
  };
  const handeltext2 = (event) => {
    settext2(event.target.value);
  };
  const handelconfirm = (index) => {
    var temp = [...list];
    temp.splice(index, 1, text2);
    setlist(temp);
    var temp2 = [...edit];
    temp2.splice(index, 1, false);
    setEdits(temp2);
  };
  console.log(text2);

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>
          <h1 style={{ color: "green" }}>TODO List</h1>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="enter the todo"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
              onChange={handeltext}
              value={text}
            />
            <button
              className="btn btn-outline-secondary"
              type="button"
              id="button-addon2"
              onClick={handelbutton}
            >
              ADD Task
            </button>
          </div>
          <hr style={{ width: "1000px" }} />
          <div style={{ display: "flex", flexDirection: "column-reverse" }}>
            <ul
              style={{
                display: "flex",
                flexDirection: "column-reverse",
                listStyle: "none",
              }}
            >
              {/* endering the list of the  */}
              {list.map((elements, index) => {
                return (
                  <li
                    key={index}
                    style={{
                      backgroundColor: "lightblue",
                      margin: "20px",
                      padding: "20px",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    {/* logic for the editing in todo list  */}
                    {edit[index] ? (
                      <div
                        class="input-group input-group-sm mb-3"
                        style={{
                          padding: "1px",
                          margin: "1px",
                          width: "500px",
                        }}
                      >
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Sizing example input"
                          aria-describedby="inputGroup-sizing-sm"
                          onChange={handeltext2}
                        />
                        <button
                          class="btn btn-outline-secondary"
                          type="button"
                          id="button-addon2"
                          onClick={() => handelconfirm(index)}
                        >
                          Confirm
                        </button>
                        <button
                          type="button"
                          className="btn btn-danger"
                          style={{ marginLeft: "20px" }}
                          onClick={() => {
                            handelcancel(index);
                          }}
                        >
                          Cancel
                        </button>
                      </div>
                    ) : (
                      <p>{elements}</p>
                    )}
                    {/* <div style={{fontSize:"30px"}}>{elements}</div> */}
                    <div>
                      <button
                        type="button"
                        className="btn btn-warning"
                        onClick={() => handelEdit(index)}
                        style={{ marginRight: "20px" }}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => handeldelete(index)}
                      >
                        delete
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
export default Todo;
