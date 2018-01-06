import DS from 'ember-data';
import {attr} from 'ember-decorators/data'

export default class Event extends DS.Model {
  @attr name;
}
