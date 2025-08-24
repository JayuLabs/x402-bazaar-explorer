# x402 Bazaar Explorer

A web interface for exploring and browsing APIs available through the Coinbase Developer Platform (CDP) x402 Bazaar.

## Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm
- CDP API credentials (if you don't yet have one, visit the [Coinbase Developer Platform](https://portal.cdp.coinbase.com/) website and sign up to get an API key)

## Setup

### 1. Clone the Repository

```bash
git clone <repository-url>
cd x402-bazaar-explorer
```

### 2. Install Dependencies

```bash
pnpm install
```

### 3. Configure Environment Variables

Create a `.env.local` file in the project root with your CDP API credentials:

```bash
CDP_API_KEY=your_cdp_api_key_here
CDP_API_SECRET=your_cdp_api_secret_here
```

## Running the Application

### Development Server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.
