const bucketName = "kwento.sciffany.com";

export const uploadMediaToGCS = async (file: File) => {
  const name = encodeURIComponent(file.name);
  const res = await fetch(`/api/storage/${name}`);

  const { url, fields } = await res.json();
  const mediaUrl = `https://storage.googleapis.com/${bucketName}/${fields.key}`;
  if (file.type === "audio/mp3") {
  } else {
    const formData = new FormData();
    Object.entries({ ...fields, file }).forEach(
      ([key, value]: [key: string, value: any]) => {
        formData.append(key, value);
        console.log(key, value);
      }
    );
    try {
      await fetch(url, {
        method: "POST",
        body: formData,
      });
      return mediaUrl;
    } catch (e) {
      console.error("Upload failed.");
    }
    return "";
  }
};
