const fs = require("fs");

const SCRIPT_NAME = "mundo-civilizaciones";

const accountId = process.env.CF_ACCOUNT_ID;
const token = process.env.CF_API_TOKEN;

if (!accountId || !token) {
  console.error("Faltan las env vars CF_ACCOUNT_ID / CF_API_TOKEN.");
  process.exit(1);
}

const html = fs.readFileSync("index.html", "utf8");
const workerScript =
  "const HTML = " +
  JSON.stringify(html) +
  ";\naddEventListener('fetch', function(event){ event.respondWith(new Response(HTML, { headers: { 'content-type': 'text/html; charset=utf-8' } })); });";

async function main() {
  const res = await fetch(
    `https://api.cloudflare.com/client/v4/accounts/${accountId}/workers/scripts/${SCRIPT_NAME}`,
    {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/javascript",
      },
      body: workerScript,
    }
  );
  const data = await res.json();
  if (!data.success) {
    console.error("Deploy falló:", JSON.stringify(data.errors));
    process.exit(1);
  }
  console.log(`Deploy OK -> ${SCRIPT_NAME}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
