import { DiscoveredResource } from "x402/types";

interface DiscoveredResourceCardProps {
  api: DiscoveredResource;
}

/** Displays details of a DiscoveredResource in a card view. */
export default function DiscoveredResourceCard({ api }: DiscoveredResourceCardProps) {
  return (
    <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:bg-gray-750 transition-colors">
      <div className="flex justify-between items-start mb-4">
        <h2 className="text-xl font-semibold text-blue-400">{api.resource}</h2>
        <span className="text-sm bg-blue-600 text-blue-100 px-2 py-1 rounded">
          {api.type.toUpperCase()}
        </span>
      </div>
      
      <div className="mb-4">
        <h3 className="font-medium text-gray-200 mb-2">Payment Options:</h3>
        <div className="space-y-3">
          {api.accepts.map((payment, paymentIndex) => (
            <div key={paymentIndex} className="bg-gray-700 p-4 rounded">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium text-gray-300">Description:</p>
                  <p className="text-sm text-gray-100">{payment.description}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-300">Price:</p>
                  <p className="text-sm font-mono text-green-400">{payment.maxAmountRequired} {payment.asset}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-300">Network:</p>
                  <p className="text-sm capitalize text-gray-100">{payment.network.replace('-', ' ')}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-300">Response Type:</p>
                  <p className="text-sm text-gray-100">{payment.mimeType}</p>
                </div>
              </div>
              {payment.outputSchema && (
                <div className="mt-3">
                  <p className="text-sm font-medium text-gray-300">Output Schema:</p>
                  <pre className="text-xs bg-gray-800 text-gray-200 p-2 rounded mt-1 overflow-x-auto">
                    {JSON.stringify(payment.outputSchema, null, 2)}
                  </pre>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="text-sm text-gray-400">
        Last updated: {new Date(api.lastUpdated).toLocaleDateString()}
      </div>
    </div>
  );
}