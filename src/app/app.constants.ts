export const DEBUG_INFO_ENABLED: boolean = true;

export const APP_URL = `//${window.location.hostname}/`;
export const BACKEND_API_URL = `//${window.location.hostname}:${getBackendPort(window.location.port)}/api/`;
function getBackendPort(port = '') {
  const portLocal = 9395;
  const portMap = {
    80: 9395,
    8002: 9395,
    '': 9395
  };
  return portMap[port] ? portMap[port] : portLocal;
}

export const LOCAL_STORAGE_TOKEN = 'simpleAngularAdminAccessToken';
export const LOCAL_STORAGE_USER = 'simpleAngularAdminUser';
export const LOCAL_STORAGE_REDIRECT = 'simpleAngularAdminRedirectUrl';
