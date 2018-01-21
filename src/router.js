import EmberRouter from "@ember/routing/router";
import config from "../config/environment";

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('data-route');
  this.route('some-route', function() {
    this.route('sub-route-a');
    this.route('sub-route-b');
  });
});

export default Router;
