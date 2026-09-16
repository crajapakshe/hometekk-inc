const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface ContactRequest {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const jsonResponse = (body: Record<string, string>, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });

const isValidEmail = (email: string): boolean =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return jsonResponse({ error: "Method not allowed" }, 405);
  }

  try {
    const body = await req.json() as Partial<ContactRequest>;
    const name = body.name?.trim() ?? "";
    const email = body.email?.trim() ?? "";
    const phone = body.phone?.trim() ?? "";
    const service = body.service?.trim() ?? "";
    const message = body.message?.trim() ?? "";

    if (!name || !email || !service || !message || !isValidEmail(email)) {
      return jsonResponse({ error: "Please complete all required fields with a valid email address." }, 400);
    }

    if (name.length > 120 || email.length > 254 || phone.length > 40 || service.length > 120 || message.length > 4000) {
      return jsonResponse({ error: "One or more fields are too long." }, 400);
    }

    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    if (!resendApiKey) {
      return jsonResponse({ error: "Email delivery is not configured yet." }, 503);
    }

    const recipient = Deno.env.get("CONTACT_RECIPIENT") ?? "hello@hometekk.ca";
    const emailBody = [
      `New HomeTekk consultation request`,
      ``,
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone || "Not provided"}`,
      `Service: ${service}`,
      ``,
      `Project details:`,
      message,
    ].join("\n");

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "HomeTekk Website <onboarding@resend.dev>",
        to: [recipient],
        reply_to: email,
        subject: `New consultation request from ${name}`,
        text: emailBody,
      }),
    });

    if (!resendResponse.ok) {
      return jsonResponse({ error: "We could not send your request right now. Please try again." }, 502);
    }

    return jsonResponse({ message: "Your request was sent successfully." });
  } catch {
    return jsonResponse({ error: "We could not send your request right now. Please try again." }, 500);
  }
});
