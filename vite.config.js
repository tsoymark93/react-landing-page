export default {
  root: "src",
  publicDir: "public",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    assetsDir: "assets",
    copyPublicDir: true,
  },
  server: {
    port: 3000,
    open: true,
  },
};
