import useLoader from "../useLoader";
import "./style.css"


export default function Loader(){
    const {loading}=useLoader();
    return(loading &&
        (
            <div className="div">
                <span class="loader"></span>
            </div>
        ))
}