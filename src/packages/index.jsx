import "./style.scss";
function Packages() {
  return (
    <section className="packages G-container">
      <div className="title">
        <h1 style={{ color: "red", fontSize: "55px" }}>Packages.</h1>
        <hr />
        <p>
          Some text our prices. Lorem ipsum consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure.
        </p>
        <br />
      </div>

      <div className="uL_Li">
        <div className="basic">
          <ul>
            <li style={{padding:'30px',fontSize:'24px',backgroundColor:'#616161'}}>Basic</li>
            <li>Floorplanning</li>
            <li>10 hours support</li>
            <li>Photography</li>
            <li>20% furniture discount</li>
            <li>Good deals</li>
            <li><p style={{fontSize:'30px',color:'black'}}>$ 199</p><br /><p>per room</p></li>
            <li><button className="btn1">Sign Up</button></li>
          </ul>
        </div>
        <div className="pro">
          <ul>
            <li style={{padding:'30px',fontSize:'24px',backgroundColor:'red'}}>Pro</li>
            <li>Floorplanning</li>
            <li>50 hours support</li>
            <li>Photography</li>
            <li>50% furniture discount</li>
            <li>GREAT deals</li>
            <li><p style={{fontSize:'30px',color:'black'}}>$ 249</p><br /><p>per room</p></li>
            <li><button className="btn2">Singn Up</button></li>
          </ul>
        </div>
      </div>
    </section>
  );
}
export default Packages;
