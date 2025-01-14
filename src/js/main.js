import {setupSignupButtons} from "./signup_buttons.js";
import {setupPricingPlan} from "./pricing_plan.js";
import {setupVideo} from "./video.js";

document.addEventListener("DOMContentLoaded", function () {
    // Listeners for signup buttons.
    setupSignupButtons();
    // Pricing plan toggling.
    setupPricingPlan();
    // Listeners for `video` tag.
    setupVideo();
});
