import React from 'react';
import {Button} from 'antd';
import {Link} from 'react-router-dom';
import CoverVideo from './CoverVideo';
import WelcomeText from './WelcomeText';
import '../styles/home.css';
import Header from './Header/component'
import JobCategories from './JobCategories';
import '../styles/less/homepage.less';

class Home extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <React.Fragment>
        <div className="mainBanner">
          <Header />
          <CoverVideo/>
          <div className="textContainer" id="jobCategories">
            <WelcomeText description=""/>
            <div className="apply-job-btn">
              <Button size="large" type="primary" htmlType="button">
                <Link to='/job-categories'>
                  Job Openings
                </Link>
              </Button>
            </div>
          </div>
        </div>
        {/*<JobCategories />*/}
      </React.Fragment>
    )
  }
};

export default Home;
