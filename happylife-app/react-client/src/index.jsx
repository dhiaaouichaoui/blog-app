import React from 'react';
import ReactDOM from 'react-dom';
import Share from './components/Share.jsx'
import Posts from './components/Posts.jsx'
import axios from 'axios'


class App extends React.Component {
  constructor(props) {
    super(props);
      this.state={
        view: 'shares',
        data:[]
      }
    this.changeView=this.changeView.bind(this)
  }
  changeView(view){
    this.setState({view: view})
  }
  componentDidMount(){
    axios.get('/api/life').then(response =>{
      console.log(response.data)
      this.setState({
        data:response.data
      })
    }).catch(error =>{
      console.log(error)
    })
    
  }
 
  handleview(){ 
    
      const {view,data} = this.state;
      if (view === 'shares') {
        return <Share   handleClick={() => this.changeView()}/>
      } else if(view === 'post'){
        console.log(view)
        return <div><Posts data={data}  /></div>
        }
       
  }
  render(){
    return (
      <div>
        
      <div className="nav">
        <div>
        <span className="logo"
          onClick={() => this.changeView('shares')}>
          HAPPY LIFE
        </span>
        </div>
        <span className={this.state.view === 'post'
          ? 'nav-selected'
          : 'navbar'}
          onClick={() => this.changeView('post')}>
          POSTS
        </span>
        <span className="navbar" onClick={() => this.changeView('shares')}>
          SHARE
        </span>
        
        
      </div>

      <div className="main">
        {this.handleview()}
      </div>
    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
