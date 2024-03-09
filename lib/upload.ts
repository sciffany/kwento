const bucketName = "kwento.sciffany.com";

export const uploadMediaToGCS = async (file: File) => {
  console.log(file);
  const name = encodeURIComponent(file.name);
  const res = await fetch(`/api/storage/${name}`, {
    method: "GET",
  });

  const { url, fields } = await res.json();
  const imageUrl = `https://storage.googleapis.com/${bucketName}/${fields.key}`;

  const formData = new FormData();
  Object.entries({ ...fields, file }).forEach(
    ([key, value]: [key: string, value: any]) => {
      formData.append(key, value);
    }
  );
  try {
    await fetch(url, {
      method: "POST",
      body: formData,
    });
    return imageUrl;
  } catch (e) {
    console.error("Upload failed.");
  }
  return "";
};
