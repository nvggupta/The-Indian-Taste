import { Link } from "react-router-dom";

function Landing() {
  return (
    <>
      <div className="Landing">
        <div className="overlay"></div>
        <div className="content">
          <h1 className="text-6xl">Experience the Authentic Flavors of India</h1>
          <p className="text-2xl">Discover a World of Exquisite Indian Dishes, Crafted with Love</p>
          <div className="grid grid-cols-3 gap-10">
            <button className="btn">Reserve Your Table Today</button>
            <Link to="/menu">
              <button className="btn">Explore Our Menu</button>
            </Link>
            <button className="btn">Order Online for Home Delivery</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
