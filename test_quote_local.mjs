async function sendQuote() {
  const url = "http://localhost:3000/api/quote";
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        items: [
          {
            serviceName: "Test Signboard",
            width: 10,
            height: 10,
            unit: "ft",
            area: 100,
            estimatedPrice: 1500,
            details: { test: "This is a REAL test after env fix" }
          }
        ],
        totalEstimatedPrice: 1500,
        customerDetails: {
          fullName: "Antigravity Real Tester",
          whatsapp: "9999999999",
          city: "Nagpur",
          businessName: "Prayas Graphics Dev Team",
          urgency: "High"
        }
      })
    });
    
    console.log("HTTP Status:", res.status);
    const text = await res.text();
    try {
        console.log("Response JSON:", JSON.parse(text));
    } catch (e) {
        console.log("Response Text:", text);
    }
  } catch(e) {
    console.error("Fetch failed:", e.message);
  }
}

sendQuote();
