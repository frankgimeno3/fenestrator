import { PortalName } from "@/app/GlassInformerSpecificData";
import type { Metadata } from "next";
import AddEventContent from "./AddEventContent";

export const metadata: Metadata = {
  title: `Add your event | Events | ${PortalName}`,
  description:
    `List an industry event on ${PortalName} — an account is required.`,
};

export default function AddEventPage() {
  return <AddEventContent />;
}
