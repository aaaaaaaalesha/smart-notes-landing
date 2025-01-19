import {setupSignupButtons} from "./signup_buttons.js";
import {setupPricingPlan} from "./pricing_plan.js";
import {setupVideo} from "./video.js";
import {setupFAQsItems} from "./faq.js"

document.addEventListener("DOMContentLoaded", function () {
    // Listeners for signup buttons.
    setupSignupButtons();
    // Pricing plan toggling.
    setupPricingPlan();
    // Listeners for `video` tag.
    setupVideo();
    // FAQs listeners to collapse/expand its items.
    setupFAQsItems();
});
