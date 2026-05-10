import "./style.css";
import { inject } from "@vercel/analytics";

// Initialize Vercel Analytics
inject();

export { sum } from "./sum";
