import React from 'react';
import axios from 'axios'


class Share extends React.Component{
    constructor(props){
        super(props)
        this.state={
            title:'',
            name:'',
            image:'',
            body:''
        }
        this.sharepost=this.sharepost.bind(this)

    }
   
    sharepost(e){
        e.preventDefault()
        axios.post('/api/life',this.state)
        .then(response=>{
            console.log(response.data)
            this.setState({[this.state]:response.data})
        })
        .catch(err=>{
            console.log(err)
        })
    }
    render(){
        return(
            <div className="shares">
                {console.log(this.state)}
                <div>
            <form>
                <input className="create-input" type="text"  placeholder="Post Title" onChange={(e)=>this.setState({title:e.target.value})} ></input>
                <input className="create-input" type="text"  placeholder="Post Name" onChange={(e)=>this.setState({name:e.target.value})}></input>
                <input className="create-input" type="text"  placeholder="Image URL"onChange={(e)=>this.setState({image:e.target.value})}></input>
                <textarea  className="create-body-textarea"  placeholder="Post Body" onChange={(e)=>this.setState({body:e.target.value})}></textarea>
                <button className="create-submit-button" type="submit"  onClick={(e)=>this.sharepost(e)}>Share post</button>
            </form>
            
             </div>
                
            </div>
        )
    }

}
export default Share