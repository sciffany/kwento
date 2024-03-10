const projectId = "sciffany";

// Imports the Google Cloud client library
const { Translate } = require("@google-cloud/translate").v2;

export const cloudTranslate = new Translate({
  projectId: projectId,
  credentials: {
    client_email: process.env.GCLOUD_EMAIL,
    private_key: process.env.GCLOUD_KEY?.replace(/\\n/g, "\n"),
  },
});

export async function getTranslation(text: string) {
  const target = "en";

  try {
    const [translation] = await cloudTranslate.translate(text, {
      from: "fil",
      to: "en",
    });
    console.log(`Text: ${translation}`);
    return translation;
  } catch (error) {
    console.error("Error while translating:", error);
  }
}
