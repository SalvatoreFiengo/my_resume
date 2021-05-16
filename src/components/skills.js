import SkillList from './skillList'
const Skills = (props)=>{
    const cardTitles = ['Front-end', 'Back-end', 'Game'];
    const frontEnd = [{name:'Javascript', value:'85'}, {name:'React',value:'60'}, {name:'CSS3',value:'90'}, {name:'HTML5',value:'100'}, {name:'Bootstrap',value:'80'}];
    const backEnd = [{name:'Python',value:'85'}, {name:'Django',value:'60'}, {name:'REST api',value:'50'}];
    const game = [{name:'PyGame',value:'50'}]

    return(
        <div className="container-fluid">
            <div className='card'>
            <div className='card-body'>
                <h3 className='card-title text-center'>Programming Skills</h3>
                <div className='row flex-column flex-md-row'>
                    <div className='col'>
                        <SkillList cardTitle={cardTitles[0]} skills={frontEnd}></SkillList>
                    </div>

                    <div className='col'>
                        <SkillList cardTitle={cardTitles[1]} skills={backEnd}></SkillList>
                    </div>

                    <div className='col'>
                        <SkillList cardTitle={cardTitles[2]} skills={game}></SkillList>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
};
export default Skills;