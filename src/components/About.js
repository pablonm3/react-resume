import React from 'react';

const About = props => {
    return (
      <section className="about">
        <h2 className="text-uppercase"><i className="fa fa-lg fa-user"></i> {props.aboutData.name}</h2>
        <div>{props.aboutData.text}</div>
      </section>
    );
};

export default About;
