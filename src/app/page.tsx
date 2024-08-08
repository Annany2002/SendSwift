"use client";

import { useOrganization, useUser } from "@clerk/nextjs";
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import UploadFileButton from "./upload-button";
import FileCard from "./file-card";

export default function Home() {
  const organization = useOrganization();
  const user = useUser();

  const orgId =
    organization.isLoaded && user.isLoaded
      ? organization.organization?.id ?? user.user?.id
      : undefined;

  const files = useQuery(api.files.getFiles, orgId ? { orgId } : "skip");

  return (
    <main className="container mx-auto pt-12 space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold">Your Files</h1>
        <UploadFileButton />
      </div>
      <div className="grid grid-cols-4 gap-6">
        {files?.map((file) => {
          return <FileCard key={file._id} file={file} />;
        })}
      </div>
    </main>
  );
}
