import './style.scss';

function Images(props){
    let item = props.item;
    return(
        <div className='img' style={{backgroundImage:`url('${item.img}')`}}>

        </div>
    )
}
export default Images;