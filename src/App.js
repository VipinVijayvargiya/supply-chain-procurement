import React, { useState } from 'react';

import Aside from './components/aside/aside';
import Main from './Main';
import { BrowserRouter as Router} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import './App.scss';
import Header from "./components/header/header";
function App() {
  const [rtl, setRtl] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [image, setImage] = useState(true);
  const [toggled, setToggled] = useState(false);

  const handleCollapsedChange = (checked) => {
    setCollapsed(checked);
  };

  const handleRtlChange = (checked) => {
    setRtl(checked);
  };

  const handleImageChange = (checked) => {
    setImage(checked);
  };

  const handleToggleSidebar = (value) => {
    setToggled(value);
  };

  return (
    <Provider store={store}>
      <div className={`supply-chain ${rtl ? 'rtl' : ''} ${toggled ? 'toggled' : ''}`}>
        <Header />
        <Router>
          <Aside
            image={image}
            collapsed={collapsed}
            rtl={rtl}
            toggled={toggled}
            handleToggleSidebar={handleToggleSidebar}
          />
          <Main
            image={image}
            toggled={toggled}
            collapsed={collapsed}
            rtl={rtl}
            handleToggleSidebar={handleToggleSidebar}
            handleCollapsedChange={handleCollapsedChange}
            handleRtlChange={handleRtlChange}
            handleImageChange={handleImageChange}
          />
        </Router>
      </div>
    </Provider>
  );
}

export default App;