const express = require('express');
const app = express();

/**
 * HTTP Status Code API
 * This API helps users understand different HTTP status codes and their meanings.
 */

// Endpoint: /status-info
app.get('/status-info', (req, res) => {
    const statusCode = parseInt(req.query.code); // Get the "code" query parameter

    // Dictionary of status codes and their descriptions
    const statusMessages = {
        200: "OK: The request has succeeded.",
        201: "Created: A resource has been successfully created.",
        204: "No Content: Request processed successfully, no content returned.",
        400: "Bad Request: The server cannot process the request due to client-side errors (e.g., malformed syntax).",
        401: "Unauthorized: Authentication is required to access the resource.",
        403: "Forbidden: Server refuses to authorize the request.",
        404: "Not Found: The server has not found anything matching the request URI. This is often caused by a missing page or resource.",
        405: "Method Not Allowed: HTTP method not supported for this resource.",
        429: "Too Many Requests: User has exceeded rate limits.",
        500: "Internal Server Error: The server encountered an unexpected condition that prevented it from fulfilling the request.",
        502: "Bad Gateway: The server received an invalid response from the upstream server.",
        503: "Service Unavailable: Server temporarily overloaded or under maintenance.",
        504: "Gateway Timeout: The server did not receive a timely response from the upstream server."
    };

    // Check if the status code exists in our dictionary
    if (statusMessages[statusCode]) {
        res.json({
            status: statusCode,
            message: statusMessages[statusCode]
        });
    } else {
        // If the status code is not found, return a default response
        res.status(400).json({
            status: 400,
            message: "Invalid status code. Please provide a valid HTTP status code from the list: 200, 201, 204, 400, 401, 403, 404, 405, 429, 500, 502, 503, 504."
        });
    }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Status Code API is running on http://localhost:${PORT}`);
});
