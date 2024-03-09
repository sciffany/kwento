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

export async function GET(
  request: Request,
  { params }: { params: { filename: string } }
) {
  const ext = params.filename.split(".").pop();

  const bucket = cloudStorage.bucket(bucketName);

  const newFile = bucket.file(createId() + "." + ext);
  const options = {
    expires: Date.now() + 1 * 60 * 1000, //  1 minute,
    fields: { "x-goog-meta-test": "data" },
  };

  const [response] = await newFile.generateSignedPostPolicyV4(options);

  return Response.json(response as any);
}
