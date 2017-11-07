import React, { Component } from 'react';
import styles from './App.css';
import TabBarExample from './TabBarExample.js';

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <TabBarExample />
      </div>
    );
  }
}

export default App;
