import React from 'react';
import moment from 'moment';
moment.locale('es-AR');

const WorkItem = props => {
    const getWorkDates = () => {
        const startdate = moment(props.workItemData.startDate).format('MMMM, YYYY');
        let enddate = null;
        if (props.workItemData.endDate !== '') {
          enddate = moment(props.workItemData.endDate).format('MMMM, YYYY');
        } else {
          enddate = 'Presente';
        }

        return <span className='startdate'>{startdate} - {enddate}</span>
    }

    const getHighlights = props.workItemData.highlights.map(function(item, index) {
        return (<li key={index}>{item}</li>)
    });

    return (
        <div className="workItem">
          <h3>{props.workItemData.position}, <span><a target="_blank" href={props.workItemData.website}>{props.workItemData.company}</a></span></h3>
          <p className="workDates">{getWorkDates()}</p>
          <p dangerouslySetInnerHTML={{__html: props.workItemData.summary}} />
    
          <ul>{getHighlights}</ul>
        </div>
    )
};

export default WorkItem;
