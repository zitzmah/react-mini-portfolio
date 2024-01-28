import screenshot1 from '../images/project1Screenshot.png'
import screenshot2 from '../images/project2Screenshot.png'
import "../styles.css"

const Projects = (props) =>{

return (  <div className="card-container">
<div className='card'>
  <div class="profile-sidebar">
    <img src={screenshot1} className="project-screenshot"></img>
    <ul className='social-list'>
      <li className='social-list'><a href="https://github.com/zitzmah/Project-1?tab=readme-ov-file" target="_blank">Link to Github</a></li>
      <li className='social-list'><a href="https://zitzmah.github.io/Project-1/" target="_blank">Link to deployed site</a></li>
    </ul>
  </div>

  <div className="profile-main">
    <h2 className="profile-name">Project 1</h2>
    <p className="profile-body">Website that looks up New York Times book reviews.</p>
  </div>
</div>

<div className='card'>
  <div class="profile-sidebar">
    <img src={screenshot2} className="project-screenshot"></img>
    <ul className='social-list'>
      <li className='social-list'><a href="https://github.com/zitzmah/project2" target="_blank">Link to Github</a></li>
      <li className='social-list'><a href="https://hzproject2.onrender.com" target="_blank">Link to deployed site</a></li>
    </ul>
  </div>

  <div className="profile-main">
    <h2 className="profile-name">Project 2</h2>
    <p className="profile-body">Full stack build with Mongo and Express. Allows users to create patients and add microbiology tests.</p>
  </div>
</div>
</div>)

}

export default Projects