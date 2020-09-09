/**
 *
 * AuthSignupPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectAuthSignupPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import {Link} from "react-router-dom";

export function AuthSignupPage() {
  useInjectReducer({ key: 'authSignupPage', reducer });
  useInjectSaga({ key: 'authSignupPage', saga });

  return (
    <div className="login-form ">
      {/*begin::Form*/}
      <form className="form" noValidate="novalidate" id="kt_login_signup_form">
        {/*begin::Title*/}
        <div className="pb-13 pt-lg-0 pt-5">
          <h3 className="font-weight-bolder text-dark font-size-h4 font-size-h1-lg">Sign Up</h3>
          <p className="text-muted font-weight-bold font-size-h4">Enter your details to create your account</p>
        </div>
        {/*end::Title*/}
        {/*begin::Form group*/}
        <div className="form-group">
          <input className="form-control form-control-solid h-auto py-7 px-6 rounded-lg font-size-h6"
                 type="text" placeholder="Fullname" name="fullname" autoComplete="off"/>
        </div>
        {/*end::Form group*/}
        {/*begin::Form group*/}
        <div className="form-group">
          <input className="form-control form-control-solid h-auto py-7 px-6 rounded-lg font-size-h6"
                 type="email" placeholder="Email" name="email" autoComplete="off"/>
        </div>
        {/*end::Form group*/}
        {/*begin::Form group*/}
        <div className="form-group">
          <input className="form-control form-control-solid h-auto py-7 px-6 rounded-lg font-size-h6"
                 type="password" placeholder="Password" name="password" autoComplete="off"/>
        </div>
        {/*end::Form group*/}
        {/*begin::Form group*/}
        <div className="form-group">
          <input className="form-control form-control-solid h-auto py-7 px-6 rounded-lg font-size-h6"
                 type="password" placeholder="Confirm password" name="cpassword" autoComplete="off"/>
        </div>
        {/*end::Form group*/}
        {/*begin::Form group*/}
        <div className="form-group">
          <label className="checkbox mb-0">
            <input type="checkbox" name="agree"/>I Agree the
            <a href="#">terms and conditions</a>.
            <span></span></label>
        </div>
        {/*end::Form group*/}
        {/*begin::Form group*/}
        <div className="form-group d-flex flex-wrap pb-lg-0 pb-3">
          <button type="button" id="kt_login_signup_submit"
                  className="btn btn-primary font-weight-bolder font-size-h6 px-8 py-4 my-3 mr-4">Submit
          </button>
          <Link to={"/auth/login"} type="button" id="kt_login_signup_cancel"
                  className="btn btn-light-primary font-weight-bolder font-size-h6 px-8 py-4 my-3">Cancel
          </Link>
        </div>
        {/*end::Form group*/}
      </form>
      {/*end::Form*/}
    </div>
  );
}

AuthSignupPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  authSignupPage: makeSelectAuthSignupPage(),
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

export default compose(withConnect)(AuthSignupPage);
