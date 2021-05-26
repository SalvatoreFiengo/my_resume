import WorkHistoryList from './workHistoryList'
const WorkHistory = ({setWorkHistoryPos})=>{

    return(
        <div className='mt-5'>
            <h3 className='text-center'>
                Work History
            </h3>
            <WorkHistoryList setWorkHistoryPos={setWorkHistoryPos}/>
        </div>
        
    )
}
export default WorkHistory