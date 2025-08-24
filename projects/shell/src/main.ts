import { initFederation } from '@angular-architects/native-federation';
 // 'federation.manifest.json'
initFederation()
  .catch(err => console.error(err))
  .then(_ => import('./bootstrap'))
  .catch(err => console.error(err));
