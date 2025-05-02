/**
 * TaskList 組件 - 用於展示任務列表
 * @description 將傳入的任務陣列渲染成列表形式
 * @param {string[]} tasks - 包含所有任務的字串陣列
 */
export default function TaskList({ tasks }) {
  return (
    <ul className="space-y-2">  {/* space-y-2 設置列表項之間的間距 */}
      {/* 使用 map 方法遍歷所有任務並渲染 */}
      {tasks.map((task, index) => (
        <li
          key={index}  /* 使用索引作為 key 值，用於 React 的虛擬 DOM 優化 */
          className="border p-2 rounded"  /* 設置任務項的邊框、內邊距和圓角 */
        >
          {task}  {/* 顯示任務內容 */}
        </li>
      ))}
    </ul>
  );
}

