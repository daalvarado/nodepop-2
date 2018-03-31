const express = require("express");
const router = express.Router();
const adsController = require("../controllers/adsController");
const userController = require("../controllers/userController");
const authController = require("../controllers/authController");
const apiController = require("../controllers/apiController");

const { catchErrors } = require("../handlers/errorHandlers");

router.get("/", catchErrors(adsController.homePage));
router.get("/table", catchErrors(adsController.getAdsTable));
router.get("/ads", catchErrors(adsController.getAds));
router.get("/ads/page/:page", catchErrors(adsController.getAds));
router.get("/tags", catchErrors(adsController.getTags));
router.get("/ads/en", catchErrors(adsController.english));
router.get("/ads/es", catchErrors(adsController.spanish));
router.get("/api/ads", catchErrors(apiController.apiAds));
router.get("/api/users", catchErrors(apiController.apiUsers));
router.get("/add", adsController.addAd);
router.post(
  "/add",
  adsController.upload,
  catchErrors(adsController.resize),
  catchErrors(adsController.createAd)
);
module.exports = router;
