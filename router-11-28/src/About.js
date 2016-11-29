import React from 'react';
import nalidou from './1.jpg';

class About extends React.Component{
  render(){
    return(
      <div className="jumbotron">
        <p>About</p>
        <div className="row">
          <div className="col-sm-6 col-md-4 col-xs-12">
            <div className="thumbnail">
              <img src={nalidou} alt="..." />
              <div className="caption">
                <h3>Thumbnail label</h3>
                <p>...</p>
                <p>
                  <a href="#" className="btn btn-primary" role="button">Button</a>
                  <a href="#" className="btn btn-default" role="button">Button</a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-xs-12">
            <div className="thumbnail">
              <img src={nalidou} alt="..." />
              <div className="caption">
                <h3>Thumbnail label</h3>
                <p>...</p>
                <p>
                  <a href="#" className="btn btn-primary" role="button">Button</a>
                  <a href="#" className="btn btn-default" role="button">Button</a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-xs-12">
            <div className="thumbnail">
              <img src={nalidou} alt="..." />
              <div className="caption">
                <h3>Thumbnail label</h3>
                <p>...</p>
                <p>
                  <a href="#" className="btn btn-primary" role="button">Button</a>
                  <a href="#" className="btn btn-default" role="button">Button</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default About;
