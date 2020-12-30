import i18n from "./i18n/index.js";
import pkg from "../package.json";

export default async function register(app) {
    await app.registerPlugin({
      label: "Cloudinary",
      name: "cloudinary",
      version: pkg.version,
      i18n,
    });
  }
