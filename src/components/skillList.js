
const SkillList = (props)=>{
    return(
        <div className='card'>
            <div className='card-body'>
                <h5 className='text-center'>{props.cardTitle}</h5>
                <div className='ui list text-center'>
                    {props.skills.map(skill=>(
                        <div className='item' key={skill}>
                            {skill}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default SkillList