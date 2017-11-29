import React from 'react';
import moment from 'moment';

const Education = props => {
    const getEducation = props.educationData.map(function(item, index) {
  		const startdate = moment(item.startDate).format('YYYY');
  		const enddate = moment(item.endDate).format('YYYY');
  		return (
          <div key={index}>
            <h3>{item.studyType} {item.area}</h3>
  				  <h4>{item.institution}</h4>
  				  <p>{startdate} - {enddate}</p>
						<p>{item.description}</p>
  				</div>
        )
  	});

  	return (
  	  <section className="education">
        <h2 className="text-uppercase"><i className="fa fa-lg fa-mortar-board"></i> {props.educationData[0].name}</h2>
        {getEducation}
      </section>
  	)
};

export default Education;
