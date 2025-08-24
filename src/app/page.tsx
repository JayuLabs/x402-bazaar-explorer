import { BazaarService } from "../services/BazaarService";
import { DiscoveredResource } from "x402/types";
import DiscoveredResourceCard from "./_components/DiscoveredResourceCard";
import { container } from "tsyringe";

const bazaarService = container.resolve(BazaarService);

/** Fetch the registered APIs from CDP x402 Bazaar. */
async function getApis(): Promise<DiscoveredResource[]> {
  try {
    return await bazaarService.listRegisteredApis();
  } catch (error) {
    console.error('Failed to fetch APIs:', error);
    return [];
  }
}

/** Page that displays all APIs registered to the CDP x402 Bazaar in a list view.*/
export default async function Home() {
  const apis = await getApis();

  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-white">x402 API Bazaar</h1>
        <p className="text-gray-300 mb-8">
          Discover and explore x402-enabled APIs. Each API supports micropayments and offers detailed schemas for easy integration.
        </p>
        
        {apis.length === 0 ? (
          <div className="text-center text-gray-400">No APIs found</div>
        ) : (
          <div className="grid gap-6">
            {apis.map((api, index) => (
              <DiscoveredResourceCard key={index} api={api} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
