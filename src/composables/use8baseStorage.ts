import gql from "graphql-tag";
import { useMutation, useQuery } from "@vue/apollo-composable";

const IMAGE_UPLOAD_QUERY = gql`
  query {
    fileUploadInfo {
      policy
      signature
      apiKey
      path
    }
  }
`;

const FILE_CREATE_MUTATION = gql`
  mutation CREATE_FILE($fileId: String!, $filename: String!) {
    fileCreate(data: { fileId: $fileId, filename: $filename }) {
      id
    }
  }
`;

export function useStorage() {
  const { result } = useQuery(IMAGE_UPLOAD_QUERY);
  const { mutate: createFileIn8base } = useMutation(FILE_CREATE_MUTATION);

  async function uploadAsset(file: File) {
    if (!result.value || !result.value.fileUploadInfo) {
      throw new Error("File Upload info not yet available");
    }
    const res = await fetch(
      `https://www.filestackapi.com/api/store/S3?key=${result.value.fileUploadInfo.apiKey}&policy=${result.value.fileUploadInfo.policy}&signature=${result.value.fileUploadInfo.signature}&path=${result.value.fileUploadInfo.path}`,
      {
        method: "POST",
        headers: {
          "Content-Type": file.type,
        },
        body: file,
      }
    );
    const data = await res.json();
    return createFileIn8base({
      fileId: data.url.split("/").at(-1),
      filename: data.filename,
    });
  }
  return {
    uploadAsset,
  };
}
export default useStorage;
