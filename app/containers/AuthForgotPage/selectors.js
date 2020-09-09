import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the authForgotPage state domain
 */

const selectAuthForgotPageDomain = state =>
  state.authForgotPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by AuthForgotPage
 */

const makeSelectAuthForgotPage = () =>
  createSelector(
    selectAuthForgotPageDomain,
    substate => substate,
  );

export default makeSelectAuthForgotPage;
export { selectAuthForgotPageDomain };
