import { PortalName } from "@/app/GlassInformerSpecificData";
import type { Metadata } from "next";
import AddProductContent from "./AddProductContent";

export const metadata: Metadata = {
  title: `Request product creation | Directory | ${PortalName}`,
  description:
    `Request product creation in the ${PortalName} directory — employee relation and portal approval required.`,
};

export default function AddProductPage() {
  return <AddProductContent />;
}
