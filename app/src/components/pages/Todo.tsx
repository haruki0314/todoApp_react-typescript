import { render } from "@testing-library/react";
import React from "react";
import TextBox from "../atoms/textbox/TextBox";
import "./style/TodoStyle.css";
// React から useState フックをインポート
import { useState } from "react";

// const Todo = (props) => {
//   console.log("aa");
//   var checkBoxVar1 = document.getElementById("checkBox");
//   checkBoxVar1.addEventListener("change", (event) => {
//     console.log("動いています");
//   });
// render(){
//   return (
//     <div class="wrapper">
//       <h2>PostDetail</h2>
//       <main class="l-main">
//         <div class="">
//           <input type="checkbox" id="checkBox"></input>
//           <div class="l-main__textbox">
//             <TextBox />
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }

// };
//https://zenn.dev/sprout2000/articles/60cc8f1aa08b4b#react-コンポーネントの作成
type TodoVal = {
  value: string;
  readonly id: number;
};

const Todo = () => {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState<TodoVal[]>([]);
  // const [todos, setTodos] = useState<Val[]>([]);

  // todos ステートを更新する関数
  const handleOnSubmit = () => {
    // 何も入力されていなかったらリターン
    if (!text) return;

    // 新しい Todo を作成
    const newTodo: TodoVal = {
      value: text,
      id: new Date().getTime(),
    };

    /**
     * スプレッド構文を用いて todos ステートのコピーへ newTodo を追加する
     * 以下と同義
     *
     * const oldTodos = todos.slice();
     * oldTodos.unshift(newTodo);
     * setTodos(oldTodos);
     *
     **/
    setTodos([newTodo, ...todos]);
    // フォームへの入力をクリアする
    setText("");
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <div className="wrapper">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleOnSubmit();
        }}
      >
        <h2>TodoApp</h2>
        <main className="l-main">
          <div className="">
            <div className="l-main__textbox">
              {/*
                入力中テキストの値を text ステートが
                持っているのでそれを value として表示

                onChange イベント（＝入力テキストの変化）を
                text ステートに反映する
              */}
              {/* <TextBox
                value={text}
                onChange={(e) => setText(e.target.value)}
                id="textBox"
              /> */}
              <input
                type="text"
                value={text}
                onChange={(e) => handleOnChange(e)}
              />
              <input type="submit" value="追加" onSubmit={handleOnSubmit} />
            </div>
          </div>
        </main>
      </form>
      <ul>
        {todos.map((todo) => {
          return <li key={todo.id}>{todo.value}</li>;
        })}
      </ul>
    </div>
  );
};

export default Todo;
