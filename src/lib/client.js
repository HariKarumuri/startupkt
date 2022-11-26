import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId:"okbuvnoj",
  dataset:"production",
  apiVersion:"2022-10-14",
  useCdn:true,
})