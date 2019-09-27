function importAll(r) {
  r.keys().forEach(r);
}

importAll(require.context('./', true, /\.(styl)$/));
importAll(require.context('./common.blocks/', true, /\.(js)$/));
