import React, {useRef} from 'react'
import './Pagination.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faAngleDoubleLeft, faAngleDoubleRight} from '@fortawesome/free-solid-svg-icons'

export default function Pagination( {totalPosts, postPerPage, setCurrentPage, currentPage}) {

    const buttonref = useRef(0)

    let pages = [];

    for(let i=0;i<Math.ceil((totalPosts/postPerPage));i++){
        pages.push(i+1)
    }
  

  return (
   <>
   <div className='btn-list'>
    <button className='prev' onClick={()=> { setCurrentPage(pages[0])}} ><FontAwesomeIcon icon={faAngleDoubleLeft}/></button>
    <button className='prev' onClick={()=> {setCurrentPage(currentPage===1?currentPage:currentPage-1)}}><FontAwesomeIcon icon={faArrowLeft}/></button>
   {pages.map((page,index) => (
        <button ref={buttonref} key={index} onClick={ () => setCurrentPage(page)} className={page == currentPage ? "active" : ""}  > {page}</button>
   ))}
    <button className='frwd' onClick={()=> {setCurrentPage(currentPage===pages.length?currentPage:currentPage+1)}} ><FontAwesomeIcon icon={faArrowRight}/></button>
    <button className='frwd' onClick={()=> { setCurrentPage(pages.length)}} ><FontAwesomeIcon icon={faAngleDoubleRight }/></button>

    
   
   

   </div>
   </>
  )
}
