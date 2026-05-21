"use server";

import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export async function createApplication(formData: FormData) {
  const { userId } = await auth();

  if (!userId) {
    throw new Error("Unauthorized");
  }

  const company = formData.get("company") as string;
  const role = formData.get("role") as string;
  const location = formData.get("location") as string;
  const status = formData.get("status") as string;
  const jobUrl = formData.get("jobUrl") as string;
  const notes = formData.get("notes") as string;

  await prisma.jobApplication.create({
    data: {
      userId,
      company,
      role,
      location,
      status,
      jobUrl,
      notes,
    },
  });

  redirect("/dashboard/applications");
}

export async function deleteApplication(formData: FormData) {
  const { userId } = await auth();

  if (!userId) {
    throw new Error("Unauthorized");
  }

  const applicationId = formData.get("applicationId") as string;

  await prisma.jobApplication.deleteMany({
    where: {
      id: applicationId,
      userId,
    },
  });

  redirect("/dashboard/applications");
}