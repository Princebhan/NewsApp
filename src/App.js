import './App.css';

import Navbar from './component/Navbar';
import News from './component/News';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';
import React, { Component } from 'react'

export default class App extends Component {

  state={
    progress:0
  }

  setProgress=(progress)=>{
       this.setState({progress:progress})
      }

  render() {
    return (
      <div>

      <Router>
         <Navbar />

           <LoadingBar
           color='#f11946'
           height={3}
           progress={this.state.progress}
         />
         <Routes>
           <Route exact path="/" element={<News setProgress={this.setProgress}  key="general" country="in" category="general" />} />
           <Route exact path="/business" element={<News setProgress={this.setProgress}  key="business" country="in" category="business" />} />
           <Route exact path="/entertainment" element={<News setProgress={this.setProgress}  key="entertainment" country="in" category="entertainment" />} />
           <Route exact path="/general" element={<News setProgress={this.setProgress}  key="general" country="in" category="general" />} />
           <Route exact path="/health" element={<News setProgress={this.setProgress}  key="health" country="in" category="health" />} />
           <Route exact path="/science" element={<News setProgress={this.setProgress}  key="science" country="in" category="science" />} />
           <Route exact path="/sports" element={<News setProgress={this.setProgress}  key="sports" country="in" category="sports" />} />
          <Route exact path="/technology" element={<News setProgress={this.setProgress}  key="technology" country="in" category="technology" />} />
          
         </Routes>
      </Router>  
      </div>
    )
  }
}


// function App() {
//   setProgress(){
//     this.setState
//   }
//   return (
//     <div>
//       <Router>
//         <Navbar />
//           <LoadingBar
//           color='#f11946'
//           progress={progress}
//           onLoaderFinished={() => setProgress(0)}
//         />
//         <Routes>
//           <Route exact path="/" element={<News setProgress={this.setProgress}  key="general" country="in" category="general" />} />
//           <Route exact path="/business" element={<News setProgress={this.setProgress}  key="business" country="in" category="business" />} />
//           <Route exact path="/entertainment" element={<News setProgress={this.setProgress}  key="entertainment" country="in" category="entertainment" />} />
//           <Route exact path="/general" element={<News setProgress={this.setProgress}  key="general" country="in" category="general" />} />
//           <Route exact path="/health" element={<News setProgress={this.setProgress}  key="health" country="in" category="health" />} />
//           <Route exact path="/science" element={<News setProgress={this.setProgress}  key="science" country="in" category="science" />} />
//           <Route exact path="/sports" element={<News setProgress={this.setProgress}  key="sports" country="in" category="sports" />} />
//           <Route exact path="/technology" element={<News setProgress={this.setProgress}  key="technology" country="in" category="technology" />} />
          
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;
