
const SkillList = (props)=>{
    return(
        <div className='card m-3'>
            <div className='card-body'>
                <h5 className='card-title text-center'>{props.cardTitle}</h5>
                <ul className='list-group'>
                    {props.skills.map(skill=>(
                        <li className='list-group-item w-75 align-self-center' key={skill.name}>
                            <div className='d-flex flex-sm-column flex-lg-row'>
                                <div className='pe-2'><p className='skill'>{skill.name}</p></div>
                                <div className="progress flex-fill mt-1">
                                    <div className='progress-bar' style={{width: skill.value+'%'}} role="progressbar" aria-valuenow={skill.value} aria-valuemin="0" aria-valuemax="100"></div>
                                </div>                            
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
export default SkillList