export default function loadBalancer(childDownload, USDownload) {
  return Promise.race([childDownload, USDownload])
    .then((result) => result)
    .catch((error) => error);
}
