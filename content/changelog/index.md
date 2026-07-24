+++
title = "Changelog"
type  = "changelog"
+++

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
