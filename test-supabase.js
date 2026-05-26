const URL = "https://mqzmmbkvllqvjeebznyk.supabase.co/rest/v1/";
const ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1xem1tYmt2bGxxdmplZWJ6bnlrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk3NjUwNzgsImV4cCI6MjA5NTM0MTA3OH0.4f6tbTgOByek7nPHHx8WcPYqmh1hxRZSbBUdUBjo9kg";
const SERVICE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1xem1tYmt2bGxxdmplZWJ6bnlrIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3OTc2NTA3OCwiZXhwIjoyMDk1MzQxMDc4fQ.m7rtJuPEMlpLX0n97FFDgsQBS_syY4AFaIrvFBd0New";

async function testConnection() {
  console.log("Testing connection to Supabase with service_role key...");
  try {
    const res = await fetch(URL, {
      headers: {
        "apikey": SERVICE_KEY,
        "Authorization": `Bearer ${SERVICE_KEY}`
      }
    });
    console.log("Status:", res.status, res.statusText);
    if(res.status === 200) {
        console.log("Connection verified successfully!");
    } else {
        const data = await res.json();
        console.log("Data:", data);
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

testConnection();
