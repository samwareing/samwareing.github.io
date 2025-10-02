/**
 * Detects the user's operating system/device
 * @returns {string} 'macos', 'ios', 'windows', 'linux', or 'android'
 */
export const detectOS = () => {
  const userAgent = window.navigator.userAgent;

  // Check for iOS (iPhone, iPad, iPod)
  // iPad detection includes checking for maxTouchPoints for iPadOS 13+
  if (/iPhone|iPod/.test(userAgent) ||
      (/iPad/.test(userAgent) || (navigator.maxTouchPoints && navigator.maxTouchPoints > 1 && /Mac/.test(userAgent)))) {
    return 'ios';
  }

  // Check for macOS (must come after iOS check)
  if (/Mac/.test(userAgent) && !(/iPhone|iPod|iPad/.test(userAgent))) {
    return 'macos';
  }

  // Check for Android
  if (/Android/.test(userAgent)) {
    return 'android';
  }

  // Check for Windows
  if (/Win/.test(userAgent)) {
    return 'windows';
  }

  // Check for Linux
  if (/Linux/.test(userAgent)) {
    return 'linux';
  }

  // Default to windows
  return 'windows';
};

/**
 * Gets the appropriate menu bar type based on detected OS
 * @returns {string} 'macos' or 'windows'
 */
export const getMenuBarTypeFromOS = () => {
  const os = detectOS();

  if (os === 'macos' || os === 'ios') {
    return 'macos';
  }

  return 'windows';
};

