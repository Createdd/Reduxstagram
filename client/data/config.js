import Raven from 'raven-js';

const sentry_key = 'b68bac174aad4d6599cd681e3a47e009';
const sentry_app = '135929';
export const sentry_url = `https://${sentry_key}@app.getsentry.com/${sentry_app}`;

export function logException(ex, context) {
  Raven.captureException(ex, {
    extra: context
  });
  /*eslint no-console:0*/
  window && window.console && console.error && console.error(ex);
}
