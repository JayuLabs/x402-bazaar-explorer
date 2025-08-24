import { injectable } from "tsyringe";
import { facilitator } from "@coinbase/x402";
import { useFacilitator } from "x402/verify";

@injectable()
export class BazaarService {
  async listRegisteredApis() {
    try {
      const response = await useFacilitator(facilitator).list();
      return response.items || [];
    } catch (error) {
      console.error("Failed to fetch x402 services:", error);
      throw new Error("Unable to retrieve x402 services from the bazaar");
    }
  }
}