import React from 'react'
import axios from 'axios'

class Posts extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      update: false,
      updatedbody:''
    }
    this.handleupdate=this.handleupdate.bind(this)
  }
  deletepost(id) {
    axios.delete('/api/life/' + id, this.props.data)
      .then(response => {
        console.log(response.data)
        this.setState({ [this.props.data]: response.data })
      })
      .catch(err => {
        console.log(err)
      })
  }
  handleupdate(id){
    console.log(id)
    axios.patch('/api/life/'+id,{body:this.state.updatedbody})
    .then(response=>{
      console.log(response.data)
      this.setState({[this.props.data]:response.body})

    })
  }


  render() {
    return (
      <div className="post">
        <ul>
          {this.props.data.map(e => {
            return <li className="post-list-item" key={e.id} >
              <div className="post-list-item-title" onClick={() => this.deletepost(e.id)} >{e.title}</div>
              <div className="post-list-item-byline"><span className="post-list-item-byline-name">{e.name}</span></div>
              <img src={e.image} className="post-list-item-image" />
              <span className="post-list-item-lede" onClick={()=>{this.setState({update: !this.state.update})}}> {e.body}</span>
              {this.state.update && <div><textarea onChange={(e)=>this.setState({updatedbody:e.target.value})} ></textarea> <button onClick={()=> this.handleupdate(e.id)}>update</button></div>}
            </li>
          })}
        </ul>
      </div>
    )
  }

}
export default Posts