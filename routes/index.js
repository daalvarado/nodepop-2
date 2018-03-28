const express = require("express");
const router = express.Router();
const adsController = require("../controllers/adsController");
const userController = require("../controllers/userController");
const authController = require("../controllers/authController");


const { catchErrors } = require("../handlers/errorHandlers");

router.get("/", catchErrors(adsController.homePage));
router.get("/table", catchErrors(adsController.getAdsTable));
router.get("/ads", catchErrors(adsController.getAds));
router.get("/ads/page/:page", catchErrors(adsController.getAds));
router.get("/tags", catchErrors(adsController.getTags));
router.get("/tags", catchErrors(adsController.editAd));
router.get("/ads/en", catchErrors(adsController.english));
router.get("/ads/es", catchErrors(adsController.spanish));
module.exports = router;
