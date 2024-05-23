import './Calculator.css';
const HeadBar=({expandbtn})=>
    {
        return(
            <div className="HeadBar">
                <div id="expand" onClick={expandbtn}></div>
            </div>
        )
    }
export default HeadBar