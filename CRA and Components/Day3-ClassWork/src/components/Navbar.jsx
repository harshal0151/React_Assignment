function Navbar(){
    return(
      <>
        <nav>
          <div className="logo">
              <img src="https://flowbite.com/docs/images/logo.svg" alt="" />
              <h1>GeekFoods</h1>
          </div>
  
          <div className="items">
              <p>Home</p>
              <p>Quote</p>
              <p>Resturants</p>
              <p>Foods</p>
              <p>Contact</p>
          </div>
          
          <button>Get started</button>
        </nav>
      </>
    )
  }
  export default Navbar;