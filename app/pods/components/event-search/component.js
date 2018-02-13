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
  search = function * (searchTerm) {
    if (isBlank(searchTerm)) { return []; }

    yield timeout(DEBOUNCE_MS);

    const toaster = this.get('toaster');

    try {
      const organizations = yield this.get('store').query(
        'organization', { q: { name_cont: searchTerm } }
      );

      toaster.success(`${organizations.content.length} results found!`);

      return organizations;
    } catch (e) {
      toaster.error(e);

      return [];
    }
  }
}
