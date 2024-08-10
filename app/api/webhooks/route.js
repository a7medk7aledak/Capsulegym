import { Webhook } from "svix";
import { headers } from "next/headers";

export async function POST(req) {
  // You can find this in the Clerk Dashboard -> Webhooks -> choose the endpoint
  const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    throw new Error(
      "Please add WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local"
    );
  }

  // Get the headers
  const headerPayload = headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response("Error occurred -- missing svix headers", {
      status: 400,
      headers: { "Content-Type": "text/plain" },
    });
  }

  // Get the body
  const payload = await req.json();
  const body = JSON.stringify(payload);

  // Create a new Svix instance with your secret
  const wh = new Webhook(WEBHOOK_SECRET);

  let evt;

  // Verify the payload with the headers
  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    });
  } catch (err) {
    console.error("Error verifying webhook:", err);
    return new Response("Error occurred during webhook verification", {
      status: 400,
      headers: { "Content-Type": "text/plain" },
    });
  }

  // Extract necessary fields from the event
  const { id } = evt.data;
  const eventType = evt.type;
  console.log(`Webhook received with ID: ${id} and type: ${eventType}`);
  console.log("Webhook body:", body);

  try {
    if (eventType === "user.created" || eventType === "user.updated") {
      const { first_name, last_name, image_url, email_addresses, username } =
        evt?.data;
      await createOrUpdateUser(
        id,
        first_name,
        last_name,
        image_url,
        email_addresses,
        username
      );
      return new Response("User is created or updated", {
        status: 200,
        headers: { "Content-Type": "text/plain" },
      });
    } else if (eventType === "user.deleted") {
      await deleteUser(id);
      return new Response("User is deleted", {
        status: 200,
        headers: { "Content-Type": "text/plain" },
      });
    } else {
      return new Response("Event type not handled", {
        status: 400,
        headers: { "Content-Type": "text/plain" },
      });
    }
  } catch (error) {
    console.log("Error handling event:", error);
    return new Response("Error occurred during event handling", {
      status: 500,
      headers: { "Content-Type": "text/plain" },
    });
  }
}
