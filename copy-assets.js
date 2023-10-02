import cpy from 'cpy';

(async () => {
  await cpy(['src/assets/'], 'dist/');
})();