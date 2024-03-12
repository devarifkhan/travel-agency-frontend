import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="bg-base-100 rounded  ml-5 mr-5 mt-5">
      <div className="navbar bg-base-200 rounded-lg">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl text-dark bg-fuchsia-200">
            Gure Ashi
          </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-20 top-0 z-50">
            <li>
              {/* <a>Home</a> */}
              <Link to="/">Home</Link>
            </li>
            <li>
              {/* <a>Package</a> */}
              {/* <Link to="/package">Package</Link> */}
              <details>
                <summary>Package</summary>
                <ul className="p-2 bg-base-300 rounded-sm ">
                  <li>
                    {/* <a>Corporate Tour</a> */}
                    <Link to="/corporate">Corporate Tour</Link>
                  </li>
                  <li>
                    {/* <a>Study Tour</a> */}
                    <Link to="/study">Study Tour</Link>
                  </li>
                  <li>
                    {/* <a>Single Tour</a> */}
                    <Link to="/single">Single Tour</Link>
                  </li>
                  <li>
                    {/* <a>Group Tour</a> */}
                    <Link to="/group">Group Tour</Link>
                  </li>
                  <li>
                    {/* <a>Couple Tour</a> */}
                    <Link to="/couple">Couple Tour</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link to="/popular">Popular Place</Link>
              {/* <a>Popular Place</a> */}
            </li>
            <li>
              {/* <a>Hotel and Resort</a> */}
              <Link to="/hotelresort">Hotel and Resort</Link>
            </li>
            <li>
              {/* <a>Weather</a> */}
              <Link to="/weather">Weather</Link>
            </li>
            <li>
              {/* <a className="/blog">Blog</a> */}
              <Link to="/blog">Blog</Link>
            </li>

            <li>
              {/* <a>Review</a> */}
              <Link to="/review">Review</Link>
            </li>
            <li>
              {/* <a>Contact Us</a> */}
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
