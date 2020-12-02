import React, { useState } from 'react';
import styles from './Paginator.module.css';

let Paginator = ({totalItemsCount,pageSize,currentPage,onPageChanged,portisionSize=10, ...props}) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    let portionCount = Math.ceil(pagesCount/portisionSize);
    let {portionNumber, setPortionNumber} = useState(1);
    let leftPortionPageNumber = (portionNumber-1)*portisionSize + 1 ;
    let rightPortionPageNumber = portionNumber*portisionSize;

    return <div className={styles.paginator}>
        {portionNumber > 1 &&
        <button onClick={()=> {setPortionNumber(portionNumber-1)}}>PREV</button>
        }
        {pages
        .filter(p=> p=>leftPortionPageNumber&&p<=rightPortionPageNumber)
        .map((p)=>{
            
        })

        }
    </div>
}
export default Paginator;