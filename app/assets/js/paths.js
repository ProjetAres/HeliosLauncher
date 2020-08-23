module.exports = {
  AUTHPATH: "https://internal-api.lostkingdoms.fr/auth", // "https://authserver.mojang.com",
  STATUS_PATH: "https://internal-api.lostkingdoms.fr/status/check",
  RESOURCE_URL: "https://cdn.lostkingdoms.fr/game-data/assets/",
  VERSION_MANIFEST: "https://cdn.lostkingdoms.fr/game-data/version_manifest.json", // "https://launchermeta.mojang.com/mc/game/version_manifest.json",
  LAUNCHERDATA: "https://launchermeta.mojang.com/mc/launcher.json",
  DISTRO_URL: "https://cdn.lostkingdoms.fr/launcher/distribution.json",
  DARWIN_DMG: (info) =>
    `https://github.com/ProjetAres/HeliosLauncher/releases/download/v${info.version}/LostKingdoms-setup-${info.version}.dmg`,
  CRAFATAR_INSTANCE: "https://crafatar.lostkingdoms.fr",
  RELEASE_NOTES: "null",
};
