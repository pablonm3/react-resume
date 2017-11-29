import React from 'react';

const Profile = props => {
    const profileObj = props.profileData;
    return  <div>
                  <div className="profileImg"><img role="presentation" className="img-circle center-block" src={profileObj.picture} width="200" /></div>
                  <h1 className="text-center">{profileObj.name}</h1>
                  <h2 className="text-center">{profileObj.label}</h2>
                  <div className="divider"></div>
                  <ul className="list-unstyled contact-links text-center">
                    <li><i className="fa fa-lg fa-location-arrow"></i>{profileObj.location.city}, {profileObj.location.region}, {profileObj.location.countryCode}</li>
                    <li><i className="fa fa-lg fa-envelope"></i><a href={`mailto:${profileObj.email}`}>{profileObj.email}</a></li>
                    <li><i className="fa fa-lg fa-birthday-cake"></i>{profileObj.birthDate}</li>
                  
                  </ul>
                  <div className="divider"></div>
                  <ul className="profileLinks list-inline text-center">
                    <li><a className="fa fa-linkedin fa-2x" href={profileObj.profiles[0].url}></a></li>
                    <li><a className="fa fa-github fa-2x" href={profileObj.profiles[1].url}></a></li>
                    <li><a className="fa fa-stack-overflow fa-2x" href={profileObj.profiles[2].url}></a></li>
                  </ul>
                  <div className="divider"></div>
            </div>
};

export default Profile;
