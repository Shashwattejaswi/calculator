import './box.css'
const StdBox=({takePutNum,operator})=>
    {
        const sym=['C',"-/+",'%','+',9,8,7,'-',6,5,4,'*',3,2,1,'/',0,'.',1,'='];
        return(
            <div className='StdBox'>
                {
                    sym.map((item,index)=>{
                            
                        if((index+1)%4===0)
                            {
                                return <button value={item} index={index} className={'operator'+' '+'StdBoxItem'} onClick={(e)=>{operator(e)}}>{item}</button>
                            }
                        if((index===19 && index===16))
                            {
                                return <button value={item} index={index} onClick={(e)=>{takePutNum(e)}} className={'operator'+' '+'roundBtn'}>{item}</button>
                            }
                       if((item>=0 && item<=9) ||item==='.' || item==='C')
                        return <button value={item} index={index} className='StdBoxItem' onClick={(e)=>{takePutNum(e)}}>{item}</button>

                       return <button value={item} index={index} className='StdBoxItem' onClick={(e)=>{takePutNum(e)}}>{item}</button>
                    })
                }
            </div>
        );
    }
    export default StdBox;