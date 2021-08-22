import logo from './logo.svg';
import './App.css';
import ReviewItems from './Review';
import PropTypes from 'prop-types'


function App() {
  return (
    <div className="App">
      <FotoProduct />
      <ProductInfo isDiscount={true} category="RUNNING" price="2.000.000" name="Grey Swagg"/>
      <ReviewItems/>      
    </div>
  );
}

function FotoProduct() {
  return (
    <div className="App-foto">
      <img src="sneaker.jpg" alt="gambar sepatu"></img>
    </div>
  );
}

function CheckDiscount(props) {
  const {isDiscount, discount} = props;
  return (isDiscount ? <p>Diskon {discount}% OFF</p> : <p>Belum ada diskon</p>);
}

function ProductInfo(props) {
  const {category, price, name, isDiscount} = props;
  const benefits = ["Tidak mudah kusut", "Tahan lebih lama", "Anti selip"];
  const listBenefits = benefits.map((itemBenefit, key)=>
    <li key={key+1}>{itemBenefit}</li>
  );

  return (
    <div className="App-deskripsi">
      <p className="category">{category}</p>
      <h1 className="title">{name}</h1>
      <p className="price">IDR {price}</p>
      <CheckDiscount isDiscount={isDiscount} discount={50}/>
      <p className="info">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <ul>
        {listBenefits}
      </ul>
      <a onClick={(e) => AddtoCart(name)} href="#">Add to Cart</a>
    </div>
  );
}

function AddtoCart(props) {
  console.log("Tambah cart" + props);
}

export default App;
