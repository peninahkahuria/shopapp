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
        <h1><u>JORDANS</u></h1>
 <div className="product-card">
 <div className="product-image">
   <img className="photo" src={this.state.shoe8Img} alt="" />
 </div>
 <div className="product-info">
   <img src='./images/nike.jpg'width="200" height="200" alt=""/>
   <h5>Blue jordans</h5>
   <p> ksh 2500</p>
   <p> Quantity {this.state.blueQuantity} </p>
   <button className="btn" onClick="saveItem()">
     Add To cart
   </button>
 </div>
   </div>

 <div className="product-card">
 <div className="product-image">
   <img className="photo" src={this.state.shoe9mg} alt="" />
 </div>
 <div className="product-info">
   <img src='./images/pink.jpg'width="200" height="200" alt=""/>
   <h5>Girly jordans</h5>
   <p> ksh 50</p>
   <p> Quantity {this.state.girlyQuantity} </p>
   <button className="btn" onClick="saveItem()">
     Add To cart
   </button>
 </div>
   </div>

 <div className="product-card">
 <div className="product-image">
   <img className="photo" src={this.state.shoe10Img} alt="" />
 </div>
 <div className="product-info">
   <img src='./images/redish.jpg'width="200" height="200" alt=""/>
   <h5>Red jordans</h5>
   <p> ksh 2570</p>
   <p> Quantity {this.state.redQuantity} </p>
   <button className="btn" onClick="saveItem()">
     Add To cart
   </button>
 </div>
   </div>

 <div className="product-card">
 <div className="product-image">
   <img className="photo" src={this.state.shoe11Img} alt="" />
 </div>
 <div className="product-info">
   <img src='./images/white.jpg'width="200" height="200" alt=""/>
   <h5>B/white jordans</h5>
   <p> ksh 1450</p>
   <p> Quantity {this.state.whiteQuantity} </p>
   <button className="btn" onClick="saveItem()">
     Add To cart
   </button>
 </div>
   </div>
<div className="product-card">
 <div className="product-image">
   <img className="photo" src={this.state.shoe12Img} alt="" />
 </div>
 <div className="product-info">
   <img src='./images/grey.jpg'width="200" height="200" alt=""/>
   <h5>Stylish jordans</h5>
   <p> ksh 3250</p>
   <p> Quantity {this.state.stylishQuantity} </p>
   <button className="btn" onClick="saveItem()">
     Add To cart
   </button>
 </div>
   </div>

   <div className="product-card">
 <div className="product-image">
   <img className="photo" src={this.state.shoe13Img} alt="" />
 </div>
 <div className="product-info">
   <img src='./images/greeny.jpg'width="200" height="200" alt=""/>
   <h5>Green jordans</h5>
   <p> ksh 50</p>
   <p> Quantity {this.state.greenQuantity} </p>
   <button className="btn" onClick="saveItem()">
     Add To cart
   </button>
 </div>
   </div>

   <div className="product-card">
 <div className="product-image">
   <img className="photo" src={this.state.shoe14Img} alt="" />
 </div>
 <div className="product-info">
   <img src='./images/gray.jpg'width="200" height="200" alt=""/>
   <h5>Grey jordans</h5>
   <p> ksh 50</p>
   <p> Quantity {this.state.greyQuantity} </p>
   <button className="btn" onClick="saveItem()">
     Add To cart
   </button>
 </div>
   </div>

   <div className="product-card">
 <div className="product-image">
   <img className="photo" src={this.state.shoe15Img} alt="" />
 </div>
 <div className="product-info">
   <img src='./images/classy.jpg'width="200" height="200" alt=""/>
   <h5>Classic jordans</h5>
   <p> ksh 50</p>
   <p> Quantity {this.state.classicQuantity} </p>
   <button className="btn" onClick="saveItem()">
     Add To cart
   </button>
 </div>
   </div>

   <div className="product-card">
   <div className="product-image">
     <img className="photo" src={this.state.shoe4Img} alt="" />
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