const INDIVIDUAL_MONTH_COST = 9.99;
const TEAM_MONTH_COST = 19.99;
const DISCOUNT = 0.25;


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
    const cardPriceElements = document.querySelectorAll(".pricing-plan-card > .card-price");
    if (cardPriceElements.length < 2) return;
    toggleInput.addEventListener("change", () => {
        switchPlanColor(monthlyPlan, yearlyPlan, toggleInput.checked);
        switchPlanPeriods(cardPriceElements, toggleInput.checked);
        switchPlanCosts(cardPriceElements, toggleInput.checked);
    })
}

/**
 * Switch the text color of the monthly and yearly plan elements based on the toggle state.
 *
 * @param {HTMLElement} monthlyPlan - The monthly plan element.
 * @param {HTMLElement} yearlyPlan - The yearly plan element.
 * @param {boolean} [isToggleInputChecked=false] - The current state of the toggle switch
 * indicating whether the yearly plan is selected.
 */
function switchPlanColor(monthlyPlan, yearlyPlan, isToggleInputChecked = false) {
    monthlyPlan.style.color = isToggleInputChecked ? "#BABABA" : "#EFECE6";
    yearlyPlan.style.color = isToggleInputChecked ? "#EFECE6" : "#BABABA";
}

/**
 * Switch the displayed period text for each pricing plan card based on the toggle state.
 *
 * This function iterates over an array of pricing plan card elements and updates the
 * period text (e.g., "/ month" or "/ year") according to the state of the toggle switch.
 * If the plan cost is labeled as "Custom", the function skips updating the period text
 * for that specific card.
 *
 * @param {NodeListOf<Element>} cardPriceElements - The collection of card price elements.
 * @param {boolean} [isToggleInputChecked=false] - The current state of the toggle switch
 * indicating whether the yearly plan is selected.
 */
function switchPlanPeriods(cardPriceElements, isToggleInputChecked = false) {
    cardPriceElements.forEach(cardPriceElement => {
        let planCost = cardPriceElement.querySelector(".cost");
        if (planCost.innerHTML && planCost.innerHTML === "Custom") return
        const planPeriod = cardPriceElement.querySelector(".period");
        planPeriod.innerHTML = isToggleInputChecked ? "/ year" : "/ month"
    });
}

/**
 * Switch the displayed cost text for the individual and team pricing plan cards
 * based on the toggle state.
 *
 * This function takes an array of pricing plan card elements and updates the cost
 * text (e.g., "$9.99" or "$119.88") according to the state of the toggle switch.
 * If the toggle switch is checked (i.e., the yearly plan is selected), the cost
 * text for the individual plan is set to the yearly cost, and the cost text for
 * the team plan is set to the yearly cost for the team plan. Otherwise, the cost
 * text for the individual plan is set to the monthly cost, and the cost text for
 * the team plan is set to the monthly cost for the team plan.
 *
 * @param {NodeListOf<Element>} cardPriceElements - The collection of card price elements.
 * @param {boolean} [isToggleInputChecked=false] - The current state of the toggle switch
 * indicating whether the yearly plan is selected.
 */
function switchPlanCosts(cardPriceElements, isToggleInputChecked = false) {
    const individualCost = cardPriceElements[0].querySelector(".cost");
    const teamCost = cardPriceElements[1].querySelector(".cost");
    const [individualCostValue, teamCostValue] = getPlanCosts(isToggleInputChecked)
    individualCost.innerHTML = `\$${individualCostValue}`;
    teamCost.innerHTML = `\$${teamCostValue}`;
}

/**
 * Returns the monthly or yearly costs for the individual and team plans based on the
 * state of the toggle switch.
 *
 * If the toggle switch is checked (i.e., the yearly plan is selected), the costs
 * returned are the yearly costs for the individual and team plans. Otherwise, the
 * costs returned are the monthly costs for the individual and team plans.
 *
 * @param {boolean} [isToggleInputChecked=false] - The current state of the toggle switch
 * indicating whether the yearly plan is selected.
 * @returns {string[]} The costs for the individual and team plans in the format
 * [individualCost, teamCost].
 */
function getPlanCosts(isToggleInputChecked = false) {
    let individualCostValue = INDIVIDUAL_MONTH_COST;
    let teamCostValue = TEAM_MONTH_COST;
    if (isToggleInputChecked) {
        individualCostValue *= 12 * (1 - DISCOUNT);
        teamCostValue *= 12 * (1 - DISCOUNT);
    }
    return [individualCostValue.toFixed(2), teamCostValue.toFixed(2)];
}
