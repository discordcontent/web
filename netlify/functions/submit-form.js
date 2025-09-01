export async function handler(event, context) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const data = event.body;

  // Here you can add your logic to store in a database, send email, or log submissions
  console.log("Form submission received:", data);

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Form submitted successfully!" }),
  };
}
