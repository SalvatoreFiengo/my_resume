import React from 'react'

const Header = (props)=>{
    return(
        <div className='text-center mt-5 pb-3'>
            <h2 className='text-center'><strong>Salvatore Fiengo</strong></h2>
            <h5 className='text-center'>Aspiring Developer</h5>
            <div><a href='https://github.com/SalvatoreFiengo/my_resume.git' target='_blank' rel="noreferrer"><i className="fa fa-2x fa-github" aria-hidden="true"></i> </a></div>
        </div>
    )
}
export default Header