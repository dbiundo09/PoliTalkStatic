// Utility functions
export const formatResponse = (data, success = true) => {
    return {
        success,
        data,
        timestamp: new Date().toISOString()
    };
}; 