module.exports = {
  AUTHPATH: "https://ares.lul.tf/ares-api/auth", // "https://authserver.mojang.com",
  STATUS_PATH: "https://ares.lul.tf/ares-api/status/check",
  RESOURCE_URL: "https://ares.lul.tf/cdn/game-data/assets/",
  VERSION_MANIFEST: "https://ares.lul.tf/cdn/game-data/version_manifest.json", // "https://launchermeta.mojang.com/mc/game/version_manifest.json",
  LAUNCHERDATA: "https://launchermeta.mojang.com/mc/launcher.json",
  DISTRO_URL: "https://ares.lul.tf/cdn/launcher/distribution.json",
  DARWIN_DMG: (info) =>
    `https://github.com/dscalzi/HeliosLauncher/releases/download/v${info.version}/helioslauncher-setup-${info.version}.dmg`,
  CRAFATAR_INSTANCE: "https://crafatar.com",
  RELEASE_NOTES: "https://github.com/dscalzi/HeliosLauncher/releases.atom",
};
