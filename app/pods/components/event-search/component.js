import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { isBlank } from '@ember/utils';

import { timeout } from 'ember-concurrency';
import { restartableTask } from 'ember-concurrency-decorators';

const DEBOUNCE_MS = 250;

export default class extends Component {
  store = service('store');
  toaster = service('toaster');

  @restartableTask
  searchEvents = function * (searchTerm) {
    if (isBlank(searchTerm)) { return []; }

    yield timeout(DEBOUNCE_MS);

    const toaster = this.get('toaster');

    try {
      const events = yield this.get('store').query(
        'event', { q: { name_cont: searchTerm } }
      );

      toaster.success(`${events.content.length} results found!`);

      return events;
    } catch (e) {
      toaster.error(e);

      return [];
    }
  }
}
