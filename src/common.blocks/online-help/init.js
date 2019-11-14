import OnlineHelp from './OnlineHelp';

const initOnlineHelp = function createInstances() {
  $('.js-online-help').each((i, element) => new OnlineHelp(element));
};

$(document).ready(initOnlineHelp);
