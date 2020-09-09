/**
 *
 * AuthPage
 *
 */

import React from 'react';
import { Switch, Route, Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectAuthPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

import backgroundImage from "../../assets/media/svg/illustrations/login-visual-1.svg";
import logoImage from "../../assets/media/logos/logo-letter-1.png";

import AuthLoginPage from 'containers/AuthLoginPage/Loadable';
import AuthSignupPage from 'containers/AuthSignupPage/Loadable';
import AuthForgotPage from 'containers/AuthForgotPage/Loadable';



export function AuthPage() {
  useInjectReducer({ key: 'authPage', reducer });
  useInjectSaga({ key: 'authPage', saga });



  return (

    <div className="d-flex flex-column flex-root" >

      <div className="login login-1 login-signin-on d-flex flex-column flex-lg-row flex-column-fluid bg-white" id="kt_login">
        {/*begin::Aside*/}
        {/*begin::Aside*/}
        <div className="login-aside d-flex flex-column flex-row-auto" style={{backgroundColor: '#F2C98A'}}>

          <div className="d-flex flex-column-auto flex-column pt-lg-40 pt-15">

            <Link to="#" className="text-center mb-10">
              <img src={logoImage} className="max-h-70px" alt=""/>
            </Link>

            <h3 className="font-weight-bolder text-center font-size-h4 font-size-h1-lg" style={{color: '#986923'}}>Discover
              Amazing Metronic<br/>with great build tools</h3>
          </div>

          <div className="aside-img d-flex flex-row-fluid bgi-no-repeat bgi-position-y-bottom bgi-position-x-center" style={{backgroundImage: `url(${backgroundImage})`}}></div>
          {/*end::Aside Bottom*/}
        </div>
        {/*begin::Aside*/}
        {/*begin::Content*/}
        <div
          className="login-content flex-row-fluid d-flex flex-column justify-content-center position-relative overflow-hidden p-7 mx-auto">
          {/*begin::Content body*/}
          <div className="d-flex flex-column-fluid flex-center">

            <Switch>
              <Route path="/auth/login" component={AuthLoginPage}/>
              <Route path="/auth/signup" component={AuthSignupPage}/>
              <Route path="/auth/forgot" component={AuthForgotPage}/>
              <Redirect from="/auth" exact={true} to="/auth/login"/>
              <Redirect to="/auth/login"/>
            </Switch>
            {/*end::Signin*/}
            {/*begin::Signup*/}

            {/*end::Signup*/}
            {/*begin::Forgot*/}

            {/*end::Forgot*/}
          </div>
          {/*end::Content body*/}
          {/*begin::Content footer*/}
          <div className="d-flex justify-content-lg-start justify-content-center align-items-end py-7 py-lg-0">
            <a href="#" className="text-primary font-weight-bolder font-size-h5">Terms</a>
            <a href="#" className="text-primary ml-10 font-weight-bolder font-size-h5">Plans</a>
            <a href="#" className="text-primary ml-10 font-weight-bolder font-size-h5">Contact Us</a>
          </div>
          {/*end::Content footer*/}
        </div>
        {/*end::Content*/}
      </div>
      {/*end::Login*/}


    </div>




  );
}

AuthPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  authPage: makeSelectAuthPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(AuthPage);
