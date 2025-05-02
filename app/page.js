'use client';

// 引入需要的依賴套件
import Image from "next/image";
import { useState } from "react";  // 用於管理組件狀態
import TaskList from "@/components/TaskList";  // 引入任務列表組件

/**
 * Home 組件 - 任務板應用的主頁面
 * 功能：
 * 1. 管理任務列表狀態
 * 2. 提供新增任務的功能
 * 3. 展示所有任務
 */
export default function Home() {
  // 使用 useState 管理任務列表數據
  // tasks: 儲存所有任務的陣列
  // setTasks: 用於更新任務列表的函數
  const [tasks, setTasks] = useState([]);
  
  // 管理新任務輸入框的狀態
  // newTask: 儲存輸入框的當前值
  // setNewTask: 用於更新輸入框值的函數
  const [newTask, setNewTask] = useState('');

  /**
   * 新增任務的處理函數
   * 功能：
   * 1. 檢查輸入是否為空
   * 2. 將新任務添加到任務列表
   * 3. 清空輸入框
   */
  const addTask = () => {
    if (newTask.trim()) {  // 確保輸入不是空白的
      const updatedTasks = [...tasks, newTask];  // 使用展開運算符建立新的任務陣列
      setTasks(updatedTasks);  // 更新任務列表
      setNewTask('');  // 清空輸入框
    }
  };

  return (
    <main className="p-4">
      {/* 頁面標題 */}
      <h1 className="text-2x1 font-bold">Task Board</h1>

      {/* 任務輸入區域 */}
      <div className="flex gap-2 mb-4">
        <input
          className="border p-2 flex-1"  /* flex-1 使輸入框填滿剩餘空間 */
          placeholder="Enter a task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}  /* 當輸入內容改變時更新狀態 */
        />
        <button
          className="bg-blue-500 text-white px-4"
          onClick={addTask}  /* 點擊按鈕時新增任務 */
        >
          Add
        </button>
      </div>

      {/* 渲染任務列表組件 */}
      <TaskList tasks={tasks}/>  /* 將任務列表數據傳遞給子組件 */
    </main>
  );
}
