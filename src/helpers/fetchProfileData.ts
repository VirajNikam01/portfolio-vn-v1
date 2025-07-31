export const fetchProfileData = async () => {
    try {
        const response = await fetch('/data/testData.json');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response;
    } catch (error) {
        console.error('Failed to fetch profile data:', error);
        throw error; // Re-throw the error for further handling
    }
}