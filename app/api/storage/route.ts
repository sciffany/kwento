import { createId } from "@paralleldrive/cuid2";
import { Storage } from "@google-cloud/storage";

const bucketName = "kwento.sciffany.com";

const cloudStorage = new Storage({
  projectId: "sciffany",
  credentials: {
    client_email: process.env.GCLOUD_EMAIL,
    private_key: process.env.GCLOUD_KEY?.replace(/\\n/g, "\n"),
  },
});

export async function POST(request: Request, { params: { blogId } }) {
  const data = await request.formData();
  const file = data.get("file") as File;

  if (!file || typeof file === "string") {
    throw new Error("File not found");
  }

  const ext = file.name.split(".").pop();
  const filename = createId();

  const bucket = cloudStorage.bucket(bucketName);

  const newFile = bucket.file(filename + "." + ext);
  const options = {
    expires: Date.now() + 1 * 60 * 1000, //  1 minute,
    fields: { "x-goog-meta-test": "data" },
  };

  const [response] = await newFile.generateSignedPostPolicyV4(options);

  return new Response(JSON.stringify(response));
}
