+++
title = "Changelog"
type  = "changelog"
+++

## 1.1.1 &centerdot; Upcoming
### Changed
- Increased the hitbox size of buttons and links so they are much easier to press while driving.
- The main app scale is now automatically detected and optimized to fit your specific device screen perfectly out of the box.
- The total distance and trip odometer now always display exactly two decimal places for better precision.
- Rewrote the settings engine to generate components dynamically from a clean configuration structure, paving the way for faster future updates.
### Fixed
- Fixed the GPS data initialization delay.
- Fixed the compass needle occasionally getting stuck or lag during sharp turns.
- Removed a broken layout translation string inside the log description.
- Optimized the settings opening animation so it moves smoothly, even on older devices.
- Overhauled the custom slider logic to eliminate drag lag and track layout stuttering completely.

---

## 1.1.0 &centerdot; Upcoming
### Changed
- Localization is now powered by [Tolgee](https://tolgee.io), laying the groundwork for smoother translations in upcoming updates.
- Modernized app architecture: Upgraded underlying frameworks (including [Capacitor](https://capacitorjs.com) 8) to ensure the app stays compatible with the latest Android features and security standards.
- Swapped and updated the icon rendering system.
- Transitioned the internal data systems to a faster, more modern data architecture ([Pinia](https://pinia.vuejs.org)).
- Cleaned out unused background code and obsolete dependencies to keep the app lightweight.
### Fixed
- Fixed a critical bug where the startup sequence could freeze for up to 10 seconds due to conflicting audio preload.
- Improved GPS reliability: The app now gives sensors more time to find your location on startup and will automatically restart itself if it gets disconnected.
- Fixed many performance issues.

---

## 1.0.2 &centerdot; 2 Jun 2026
### Changed
- Changed the color of most text and icons on the main page from a light gray (`#d8d8d8` and `#ccc`) to a pure white (`#fff`) color to maximize the contrast as much as possible.
### Fixed
- Improved altitude accuracy a lot by switching from raw WGS84 ellipsoidal height to true EGM96 Mean Sea Level (MSL).
- Time now properly displays above the main page content (displays).

---

## 1.0.1 &centerdot; 6 May 2026
### Added
- Added a 'Set Total Distance' button to set the total distance to a custom value.
### Changed
- Rearranged total distance buttons in settings into their own category.

---

## 1.0.0 (0.3.13) &centerdot; 21 April 2026
- Initial Release
