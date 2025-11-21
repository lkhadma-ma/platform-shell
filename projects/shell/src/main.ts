import { initFederation } from '@angular-architects/native-federation';
import { loadRemoteStyles } from '@shared/util/load-remote-styles';
// -------------------------- STYLES --------------------------
async function init() {

  await Promise.all([
    loadRemoteStyles('auth'),
    loadRemoteStyles('shared'),
    loadRemoteStyles('feed'),
    loadRemoteStyles('user'),
    loadRemoteStyles('company'),
    loadRemoteStyles('search'),
  ]);

  initFederation('federation.manifest.json')
    .catch((err) => console.error(err))
    .then((_) => import('./bootstrap'))
    .catch((err) => console.error(err));
}

init();