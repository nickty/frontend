import './App.css';

import Content from './componenets/Content'
import Header from './componenets/Header'
import Sidebar from './componenets/Sidebar'
import Footer from './componenets/Footer'

const App = () => {
  return (
    <div className="App">
      
      <Header name="Mizan" age="50" />

      <Sidebar />

      <Content />

      <Footer />
      
    </div>
  );
}

export default App;
