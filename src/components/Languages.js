import React from 'react';
import moment from 'moment';

const Languages = props => {
    const getLanguages = props.languagesData.map(function(item, index) {
  		return (
          <div key={index}>
            <h3>{item.language}</h3>
			<p>{item.fluency}</p>
  		</div>
        )
  	});

  	return (
  	  <section className="education">
        <h2 className="text-uppercase"><i className="fa fa-lg fa-unlock"></i> {props.languagesData[0].name}</h2>
        {getLanguages}
      </section>
  	)
};

export default Languages;
