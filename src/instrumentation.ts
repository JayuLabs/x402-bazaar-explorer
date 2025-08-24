import "reflect-metadata";
import {container} from "tsyringe";

import { BazaarService } from "@/services/BazaarService";

/** Runs once per NextJS application startup. */
export function register() {
    initializeContainer();
}

/** Sets up DI container. */
function initializeContainer() {
    container.registerSingleton(BazaarService);
}