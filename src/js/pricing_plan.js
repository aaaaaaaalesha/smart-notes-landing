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
}
