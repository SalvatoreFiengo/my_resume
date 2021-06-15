import { FC } from 'react';

type SkillListProps = {
    cardTitle: string,
    skills: Array<{ name:string, value?:string|undefined }>
}
const SkillList:FC<SkillListProps> = ( props )=>{
    const skillPercent = ( value: string|undefined )=>({ width: value+'%' });
    const valueNumber = ( value: string|undefined ): number=>value !== undefined? parseInt(value) : 0;
    return(
        <div className='mb-3'>
            <h5 className='text-center'>{props.cardTitle}</h5>
            {props.skills.map( skill=>(
                <div className='row justify-content-md-center' key={ skill.name }>
                    <div className='col col-md-3'><p className='m-0'>{ skill.name }</p></div>
                    <div className='col col-md-5 ps-0'>
                        <div className="progress">
                            <div 
                                className='progress-bar bg-success' 
                                style={ skillPercent( skill.value ) } 
                                role='progressbar' 
                                aria-valuenow={ valueNumber( skill.value ) } 
                                aria-valuemin={ 0 } 
                                aria-valuemax={ 100 }
                                aria-label={ skill.name }>
                            </div>
                        </div> 
                    </div>                           
                </div>
            ))}
        </div>
    )
};
export default SkillList;
