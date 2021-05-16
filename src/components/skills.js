import SkillList from './skillList'
const Skills = (props)=>{
    const cardTitles = ['Front-end', 'Back-end', 'General'];
    const frontEnd = ['Javascript', 'React', 'CSS3', 'HTML5', 'Bootstrap'];
    const backEnd = ['Python', 'Django', 'REST api'];
    const game = ['PyGame']

    return(
        <div className="container-fluid">
            <h2 className='text-center'>Programming Skills</h2>
            <div className='row'>
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
    )
};
export default Skills;