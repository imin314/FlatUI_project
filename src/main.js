//import './assets/favicons/favicons';

function importAll(r) {
  r.keys().forEach(r);
}

importAll(require.context('./', true, /\.(styl)$/));
importAll(require.context('./assets/favicons', false, /\.(svg|png|ico|xml|json)$/));
importAll(require.context('./common.blocks', true, /\.(js)$/));
importAll(require.context('./pages', true, /\.(js)$/));