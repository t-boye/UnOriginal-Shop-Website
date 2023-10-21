import React from 'react';
import { NavLink } from 'react-router-dom';
import Datalist from 'react-datalist';

const Navbar = () => {
  const [filteredProducts, setFilteredProducts] = React.useState([
    'product 1',
    'product 2',
    'product 3',
  ]);

  const handleSearchChange = (e) => {
    const searchValue = e.target.value;
  const filteredProducts = filteredProducts.filter(product => product.toLowerCase().includes(searchValue.toLowerCase()));
    setFilteredProducts(filteredProducts);
 };

  return (
    <div>
      <nav class="navbar bg-light fixed-top shadow">
        <div class="container-fluid container">
          <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <i class="fa fa-bars"></i>
          </button>
          <NavLink to="/">
            <img src="/FakeShop.png" alt="logo" style={{ height: "50px" }} />
          </NavLink>
          <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div class="offcanvas-header">
              <NavLink to="/">
                <img src="/FakeShop.png" alt="logo" style={{ height: "70px" }} />
              </NavLink>
              <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
              <input class="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search..." autofocus onKeyUp={handleSearchChange} />
              <Datalist id="datalistOptions">
                {filteredProducts.map(product => (
                  <option key={product} value={product}>{product}</option>
                ))}
              </Datalist>
              <a class="nav-link" href="/cart">
                <i class="fa fa-shopping-cart"></i> Cart
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
};

export default Navbar;
