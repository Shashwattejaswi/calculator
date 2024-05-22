import './box.css'
const StdBox=()=>
    {
        const sym=[1,3,4,6,4,7,8,9,0];
        return(
            <div className='StdBox'>
                {
                    sym.map((item)=>{
                        return <button className='StdBoxItem'>{item}</button>
                    })
                }
            </div>
        );
    }
    export default StdBox;