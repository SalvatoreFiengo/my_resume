import { FC } from 'react';

type SkillListProps = {
    cardTitle: string,
    skills:Array<{ name:string, value?:string|undefined }>
}
const SkillList:FC<SkillListProps> = ( props )=>{
    const skillPercent = ( value: string|undefined )=>({ width: value+'%' });
    const valueNumber = ( value: string|undefined ): number=>value!==undefined? parseInt(value) : 0;
    return(
        <div className='mb-3'>
            <h5 className='text-center'>{props.cardTitle}</h5>

            {props.skills.map( skill=>(
                <div className='d-flex flex-sm-column flex-lg-row w-75 mx-auto' key={ skill.name }>
                    <div className='pe-2 text-center'><p className='skill'>{ skill.name }</p></div>
                    <div className="progress flex-fill  ms-2 mt-1">
                        <div 
                            className='progress-bar bg-success' 
                            style={ skillPercent( skill.value ) } 
                            role="progressbar" 
                            aria-valuenow={ valueNumber( skill.value ) } 
                            aria-valuemin={ 0 } 
                            aria-valuemax={ 100 }
                            aria-label={ skill.name }>
                        </div>
                    </div>                            
                </div>
            ))}
        </div>
    )
};
export default SkillList;
