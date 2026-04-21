export function getBunnyEmbedUrl(videoGuid: string) {
  const cdnHostname = process.env.BUNNY_CDN_HOSTNAME;
  if (!cdnHostname) {
    return `https://iframe.mediadelivery.net/embed/<LIBRARY_ID>/${videoGuid}`;
  }

  return `https://${cdnHostname}/${videoGuid}`;
}
