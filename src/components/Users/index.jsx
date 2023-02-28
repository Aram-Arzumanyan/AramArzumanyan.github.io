import "./style.scss";

export default function User(props) {
    let item= props.item
  return (
    <div className="general">
      <div className="user" style={{backgroundImage:`url('${item.img}')`}}></div>
      <h1>{item.h1}</h1>
      <h3>{item.h3}</h3>
      <p>{item.p}</p>
    </div>
  );
}
