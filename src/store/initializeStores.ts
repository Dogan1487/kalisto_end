import { useExchangeRateStore } from './exchangeRateStore';

console.log('Initializing stores...'); // Debug log

// Initialize the exchange rate store
export async function initializeStores() {
  console.log('Fetching initial exchange rate...'); // Debug log
  await useExchangeRateStore.getState().fetchRate();
  console.log('Initial exchange rate fetch complete.'); // Debug log
}

// Call initialization immediately
initializeStores().catch(error => {
  console.error('Failed to initialize stores:', error);
});
