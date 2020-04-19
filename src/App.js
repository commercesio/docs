import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { RedocStandalone } from 'redoc';

class App extends Component {
  render() {
    return (
      <div className="App">
      {/* https://github.com/Redocly/redoc#redoc-options-object */}
        <RedocStandalone options={{ 
          nativeScrollbars: true,
          hideDownloadButtonl:true,
          disableSearch: true,
          theme: { colors: { primary: { main: '#1890ff' } } },
        }} specUrl="/swagger.json" />
      </div>
    );
  }
}

export default App;