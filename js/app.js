import { products } from "./products.js";
import { initialiseNavigation } from "./ui.js";

document.documentElement.classList.add("js");

initialiseNavigation();

// The empty data module is imported now so Stage 2 can build on a stable structure.
// Recommendation and rendering logic will be added only after Stage 1 is approved.
void products;
