import React, { PropTypes, Component} from 'react';
import Profile from './Profile';
import About from './About';
import Work from './Work';
import Skills from './Skills';
import Education from './Education';
import Languages from './Languages';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import locale from 'browser-locale';
var jsonObj = require('../resume-es.json'); // load resume file

/* eslint-disable */
class App extends Component{

  constructor(props){
      super(props);
      this.handleChange = this.handleChange.bind(this);
      var lang = locale();
      console.log('lang: ', lang.substr(0, 2));
      if (lang.substr(0, 2) === 'es'){
          this.state = {lang:'es'};
          jsonObj = require('../resume-es.json'); 
      }
      else{
          this.state = {lang:'en'};  
          jsonObj = require('../resume-en.json'); 
      }
  }

  componentWillUpdate(nextProps, nextState){
    if (nextState.lang === 'es' )
      jsonObj = require('../resume-es.json'); // load resume file
    else
      jsonObj = require('../resume-en.json'); // load resume file
  }

  
  handleChange(event, index, value){
      this.setState({lang: value});
  } 

  render(){
      const profileData = jsonObj.basics;
      const aboutData = profileData.summary;
      const workData = jsonObj.work;
      const skillsData = jsonObj.skills;
      const educationData = jsonObj.education;
      const languagesData = jsonObj.languages
      // console.log(profileData)
      return (
              <div className="container">
                <div className="row">
                  <aside className="col-md-4">
                    <div className="inner">
                      <Profile profileData={profileData} />
                    </div>
                  </aside>
                  <main className="col-md-8">
                      
                    <div className="inner">
                       <SelectField
                        value={this.state.lang}
                        onChange={this.handleChange}
                      >
                        <MenuItem value="es" primaryText="Español" />
                        <MenuItem value="en" primaryText="English" />
                      </SelectField>
                      <About aboutData={aboutData} />
                      <Work workData={workData} />
                      <Skills skillsData={skillsData} />
                      <Education educationData={educationData} />
                      <Languages languagesData={languagesData} />
                    
                    </div>
                  </main>
                </div>
              </div>
        );
    }

}


export default App;
