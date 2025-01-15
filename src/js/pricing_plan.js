const INDIVIDUAL_MONTH_COST = 9.99;
const TEAM_MONTH_COST = 19.99;

const INDIVIDUAL_YEAR_COST = INDIVIDUAL_MONTH_COST * 12 * 0.75;
const TEAM_YEAR_COST = TEAM_MONTH_COST * 12 * 0.75;


/**
 * Initializes and handles the pricing plan toggle functionality.
 *
 * This function sets up event listeners on a toggle switch input to switch between
 * monthly and yearly pricing plans. It updates the text color of the plan elements
 * based on the toggle switch state to visually indicate the currently selected plan.
 */
export function setupPricingPlan() {
    const toggleInput = document.querySelector(".toggle-switch input");
    const monthlyPlan = document.querySelector(".monthly-plan");
    const yearlyPlan = document.querySelector(".yearly-plan");

    toggleInput.addEventListener("change", () => {
        monthlyPlan.style.color = toggleInput.checked ? "#BABABA" : "#EFECE6";
        yearlyPlan.style.color = toggleInput.checked ? "#EFECE6" : "#BABABA";
    });

    // Setup price/cost values.
    const cardPriceElements = document.querySelectorAll(".pricing-plan-card > .card-price");
    if (cardPriceElements.length < 2) return;
    const individualCardPrice = cardPriceElements[0];
    const teamCardPrice = cardPriceElements[1];
    toggleInput.addEventListener("change", () => {
        cardPriceElements.forEach(cardPriceElement => {
            let planCost = cardPriceElement.querySelector(".cost");
            if (planCost.innerHTML && planCost.innerHTML === "Custom") return
            const planPeriod = cardPriceElement.querySelector(".period");
            planPeriod.innerHTML = toggleInput.checked ? "/ year" : "/ month"
        });

        const individualCost = individualCardPrice.querySelector(".cost");
        const teamCost = teamCardPrice.querySelector(".cost");

        if (toggleInput.checked) {
            individualCost.innerHTML = `\$${INDIVIDUAL_YEAR_COST.toFixed(2)}`;
            teamCost.innerHTML = `\$${TEAM_YEAR_COST.toFixed(2)}`;
        } else {
            individualCost.innerHTML = `\$${INDIVIDUAL_MONTH_COST}`;
            teamCost.innerHTML = `\$${TEAM_MONTH_COST}`;
        }
    })
}
