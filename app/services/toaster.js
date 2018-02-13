import Service from '@ember/service';
import { inject as service } from '@ember/service';

export default class extends Service {
  notifications = service('notification-messages');
  options = { autoClear: true, clearDuration: 3200, htmlContent: true };


  info(message, optionsOverride = {}) {
    const notifier = this.get('notifications');
    const options = { ...this.get('options'), ...optionsOverride };

    notifier.info(message, options);
  }

  warning(message, optionsOverride = {}) {
    const notifier = this.get('notifications');
    const options = { ...this.get('options'), ...optionsOverride };

    notifier.warning(message, options);
  }

  success(message, optionsOverride = {}) {
    const notifier = this.get('notifications');
    const options = { ...this.get('options'), ...optionsOverride };

    notifier.success(message, options);
  }

  alert(message, optionsOverride = {}) {
    this.error(message, optionsOverride);
  }

  error(e, optionsOverride = {}) {
    const notifier = this.get('notifications');
    const options = { ...this.get('options'), clearDuration: 10000, ...optionsOverride };
    const message = e.message;

    notifier.error(message, options);
  }
}
