import { products } from "./products.js";
import { initialiseQuestionnaire } from "./questionnaire.js";
import { initialiseNavigation } from "./ui.js";

document.documentElement.classList.add("js");

initialiseNavigation();
initialiseQuestionnaire();

// Product data, recommendation and result-rendering logic remain deferred to Stage 3.
void products;
