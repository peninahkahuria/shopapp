import React from 'react'
import { render } from 'react-dom';
class Jordans extends React.Component{
  constructor(props){
  super(props);
  this.state={
    type1:"Converse",
  };
}
render(){

    return(
      <section className="products">
      <h1><u>CONVERSE</u></h1> 
       <div className="product-card">
        <div className="product-image">
          <img className="photo" src={this.state.shoeImg} alt="" />
        </div>
        <div className="product-info">
          <img src='./images/color.jpg'width="200"  height="200" alt=""/>
          <p> Colorful converse </p>
          <p> Ksh 580 {this.state.appleImgPrice}</p>
          <p> Quantity {this.state.spinachQuantity} </p>
          <button className="btn" onClick="saveItem()">
            Add To cart
          </button>
        </div>
      </div>
      <div className="product-card">
        <div className="product-image">
          <img className="photo" src={this.state.shoe1Img} alt="" />
        </div>
        <div className="product-info">
          <img src='./images/cream.jpg'width="200" height="200" alt=""/>
          <p> Cream converse</p>
          <p> ksh 850</p>
          <p> Quantity {this.state.creamQuantity} </p>
          <button className="btn" onClick="saveItem()">
            Add To cart
          </button>
        </div>
      </div>
      <div className="product-card">
        <div className="product-image">
          <img className="photo" src={this.state.shoe2Img} alt="" />
        </div>
        <div className="product-info">
          <img src='./images/star.jpg'width="200" height="200" alt=""/>
          <p> Black converse</p>
          <p> ksh 750 </p>
          <p> Quantity {this.state.blackQuantity} </p>
          <button className="btn" onClick="saveItem()">
            Add To cart
          </button>
        </div>
      </div>
      <div className="product-card">
        <div className="product-image">
          <img className="photo" src={this.state.bunchImg} alt="" />
        </div>
        <div className="product-info">
          <img src='./images/blue.jpg' width="200" height="200" alt=""/>
          <p> Navyblue converse</p>
          <p> Ksh 770 {this.state.shoeImgPrice}</p>
          <p> Quantity {this.state.navyblueImgQuantity} </p>
          <button className="btn" onClick="saveItem()">
            Add To cart
          </button>
        </div>
      </div>
<div className="product-card">
        <div className="product-image">
          <img className="photo" src={this.state.shoe4Img} alt="" />
        </div>
        <div className="product-info">
          <img src='./images/green.jpg'width="200" height="200" alt=""/>
          <h5>Green converse</h5>
          <p> ksh 950</p>
          <p> Quantity {this.state.greenQuantity} </p>
          <button className="btn" onClick="saveItem()">
            Add To cart
          </button>
        </div>
      </div>

      <div className="product-card">
        <div className="product-image">
          <img className="photo" src={this.state.shoe5Img} alt="" />
        </div>
        <div className="product-info">
          <img src='./images/stars.jpg'width="200" height="200" alt=""/>
          <p> Creamy converse</p>
          <p> ksh 1850</p>
          <p> Quantity {this.state.creamyQuantity} </p>
          <button className="btn" onClick="saveItem()">
            Add To cart
          </button>
        </div>
      </div>

      <div className="product-card">
        <div className="product-image">
          <img className="photo" src={this.state.shoe6Img} alt="" />
        </div>
        <div className="product-info">
          <img src='./images/styly.jpg'width="200" height="200" alt=""/>
          <p> Stylish converse</p>
          <p> ksh 2550</p>
          <p> Quantity {this.state.stylishQuantity} </p>
          <button className="btn" onClick="saveItem()">
            Add To cart
          </button>
        </div>
      </div>

      <div className="product-card">
        <div className="product-image">
          <img className="photo" src={this.state.shoe7Img} alt="" />
        </div>
        <div className="product-info">
          <img src='./images/sea.jpg'width="200" height="200" alt=""/>
          <p>Flowery converse</p>
          <p> ksh 4678</p>
          <p> Quantity {this.state.floweryQuantity} </p>
          <button className="btn" onClick="saveItem()">
            Add To cart
          </button>
        </div>

      </div>
      
             <footer>     
 <div className="footer">
<p className="class">
	
<p>CONTACTS</p>
<p>LinkedIn:https://www.linkedin.com/in/peninah-kahuria-bb4b071b4/</p>
<p>Email:peninahkahuria@gmail.com</p>
<p>Tel:+254725783654</p>
<p> © All rights reserved 2020</p>
</p>
</div>

      </footer>
      </section> 

    );
}
}
export default Jordans