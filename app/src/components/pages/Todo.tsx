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
  checked: boolean;
  removed: boolean;
};

type Filter = "all" | "checked" | "unchecked" | "removed";

const Todo = () => {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState<TodoVal[]>([]);
  //filter機能
  const [filter, setFilter] = useState<Filter>("all");

  // todos ステートを更新する関数
  const handleOnSubmit = () => {
    // 何も入力されていなかったらリターン
    if (!text) return;

    const newTodo: TodoVal = {
      value: text,
      id: new Date().getTime(),
      //初期値false
      checked: false,
      removed: false,
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

  const handleOnEdit = (id: number, value: string) => {
    /**
     * 引数として渡された todo の id が一致する
     * todos ステート（のコピー）内の todo の
     * value プロパティを引数 value (= e.target.value) に書き換える
     */
    const deepCopy = todos.map((todo) => ({ ...todo }));

    // ディープコピーされた配列に Array.map() を適用
    const newTodos = deepCopy.map((todo) => {
      if (todo.id === id) {
        todo.value = value;
      }
      return todo;
    });

    // todos ステート配列をチェック
    console.log("=== Original todos ===");
    todos.map((todo) => console.log(`id: ${todo.id}, value: ${todo.value}`));

    // todos ステートを更新
    setTodos(newTodos);
  };

  const handleOnCheck = (id: number, checked: boolean) => {
    const deepCopy = todos.map((todo) => ({ ...todo }));

    const newTodos = deepCopy.map((todo) => {
      if (todo.id === id) {
        todo.checked = !checked;
      }
      return todo;
    });

    setTodos(newTodos);
  };

  const handleOnRemove = (id: number, removed: boolean) => {
    const deepCopy = todos.map((todo) => ({ ...todo }));

    const newTodos = deepCopy.map((todo) => {
      if (todo.id === id) {
        todo.removed = !removed;
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  const filteredTodos = todos.filter((todo) => {
    // filter ステートの値に応じて異なる内容の配列を返す
    switch (filter) {
      case "all":
        // 削除されていないもの全て
        return !todo.removed;
      case "checked":
        // 完了済 **かつ** 削除されていないもの
        return todo.checked && !todo.removed;
      case "unchecked":
        // 未完了 **かつ** 削除されていないもの
        return !todo.checked && !todo.removed;
      case "removed":
        // 削除済みのもの
        return todo.removed;
      default:
        return todo;
    }
  });

  return (
    <div className="wrapper">
      <select defaultValue="all" onChange={(e) => e.preventDefault()}>
        <option value="all">すべてのタスク</option>
        <option value="checked">完了したタスク</option>
        <option value="unchecked">現在のタスク</option>
        <option value="removed">ごみ箱</option>
      </select>
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
        {filteredTodos.map((todo) => {
          return (
            <li key={todo.id}>
              <input
                type="checkbox"
                checked={todo.checked}
                onChange={() => handleOnCheck(todo.id, todo.checked)}
              />
              <input
                type="text"
                disabled={todo.checked || todo.removed}
                value={todo.value}
                onChange={(e) => handleOnEdit(todo.id, e.target.value)}
              />
              <button onClick={() => handleOnRemove(todo.id, todo.removed)}>
                {todo.removed ? "復元" : "消去"}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Todo;
