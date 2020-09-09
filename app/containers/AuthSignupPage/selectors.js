import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the authSignupPage state domain
 */

const selectAuthSignupPageDomain = state =>
  state.authSignupPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by AuthSignupPage
 */

const makeSelectAuthSignupPage = () =>
  createSelector(
    selectAuthSignupPageDomain,
    substate => substate,
  );

export default makeSelectAuthSignupPage;
export { selectAuthSignupPageDomain };
