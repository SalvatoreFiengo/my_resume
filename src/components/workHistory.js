import WorkHistoryList from './workHistoryList'
const WorkHistory = ()=>{

    return(
        <div className='card mt-5'>
            <div className='card-body'>
                <h3 className='card-title text-center'>
                    Work History
                </h3>
                <WorkHistoryList/>
            </div>
        </div>
        
    )
}
export default WorkHistory