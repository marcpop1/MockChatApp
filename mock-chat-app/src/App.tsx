import type { Component } from 'solid-js';
import { Sidebar } from './sidebar/Sidebar';
import styles from './App.module.css';

const App: Component = () => {
  const title: string = 'Mock Chat App';

  return (
    <div>
      <h1 class={styles.title}>{title}</h1>
      <div class={styles.sidebar}>
        <Sidebar/>
      </div>
    </div>
  );
};

export default App;
