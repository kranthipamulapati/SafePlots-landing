/** @format */

import { createRoot } from "react-dom/client";

import AsblShowcase from "./index";

const root = document.getElementById("asbl-root");

if (root) {
    createRoot(root).render(<AsblShowcase />);
}
