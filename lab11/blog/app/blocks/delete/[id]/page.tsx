"use server";
import { db } from "@/db";
import { redirect } from "next/navigation";

async function deleteBlock(id: string) {
  try {
    await db.block.delete({
      where: {
        id: parseInt(id),
      },

  
    });

    console.log("Block  is deleted successfully:)");
    redirect("/");
  } catch (error) {
    console.error("Error deleting block:", error);
    throw error;
  }
}

export default deleteBlock;