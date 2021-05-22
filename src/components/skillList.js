
const SkillList = (props)=>{
    return(
        <div className='m-3'>
            <h5 className='text-center'>{props.cardTitle}</h5>

            {props.skills.map(skill=>(
                <div className='d-flex flex-sm-column flex-lg-row align-items-center align-center' key={skill.name}>
                    <div className='pe-2'><p className='skill'>{skill.name}</p></div>
                    <div className="progress flex-fill mt-1 align-items-center">
                        <div className='progress-bar bg-success' style={{width: skill.value+'%'}} role="progressbar" aria-valuenow={skill.value} aria-valuemin="0" aria-valuemax="100" aria-label={skill.name}></div>
                    </div>                            
                </div>
            ))}
        </div>
    )
}
export default SkillList