import React, { Component } from 'react'

export class NewsIteam extends Component {
 
  render() {
    let {title,description,imageurl,newUrl,author,date,source}=this.props;

    return (
      
      <div className="my-3">
            <div className="card" >
            <div style={{display:'flex',justifyContent:'flex-end',
                        position:'absolute',right:'0'}}>

                <span className="badge rounded-pill bg-danger" >
                        {source}<span className="visually-hidden">unread messages</span>
                </span>

            </div>

               
               
                <img src={!imageurl?"https://th.bing.com/th/id/OIP.Phx0kvyKlWtkhQDhdZWZGQHaEo?rs=1&pid=ImgDetMain":imageurl} className="card-img-top" style={{height:'70%',width:'100%'}} alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title} </h5>

                    <p className="card-text">{description}</p>
                    <p className='card-text'><small className='text-muted'>By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
                    <a href={newUrl} rel="_blank" className="btn btn-sm btn-dark">Read More</a>
                </div>
            </div>
        
      </div>
    )
  }
}

export default NewsIteam
