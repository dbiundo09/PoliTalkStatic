export default async function getBills() {
    const apiUrl = import.meta.env.VITE_API_URL;

    try {
        const response = await fetch(`${apiUrl}/bills/refresh`);
        const result = await response.json();
        
        if (!result.data) {
            throw new Error('No data received from API');
        }

        // Transform the data into the expected format
        return result.data.map(bill => ({
            id: bill.id,
            name: bill.billName,
            summary: bill.billSummary,
            details: bill.billDetails
        }));

    } catch (error) {
        console.error('Error fetching bills:', error);
        // Return empty array or throw error based on your error handling preference
        return [];
    }
}