/**
 * Shared portal template configuration. Change only portal_id to select a portal.
 * IDs match portals_id in the central panel. The legacy filename is retained
 * so template imports continue to use one configuration entry point.
 */
export const portal_id = 2;

/** @type {Record<number, {name: string, sector: string, signupNewsletterListIds?: string[]}>} */
export const portalConfigurations = {
    0: { name: "Plynium", sector: "construction industry" },
    1: {
        name: "Glassinformer",
        sector: "glass industry",
        signupNewsletterListIds: ["d61f1dea-b0f4-4641-a5ef-07bb58d3e655"],
    },
    2: { name: "Fenestrator", sector: "window, door and enclosure industry" },
    3: { name: "Archinformer", sector: "architecture industry" },
    4: { name: "Mepinformer", sector: "mechanical, electrical and plumbing industry" },
    5: { name: "Infosmarthome", sector: "smart home industry" },
    6: { name: "Timbinformer", sector: "timber industry" },
    7: { name: "Outinformer", sector: "outdoor living industry" },
    8: { name: "Infoindoor", sector: "interior design industry" },
    25: { name: "Construinformer", sector: "construction industry" },
};

const configuration = portalConfigurations[portal_id];
if (!configuration) throw new Error('Unknown portal ID: ' + portal_id);

export const PortalName = configuration.name;
export const portalSector = configuration.sector;
export const companyDescription = 'Portal for the ' + portalSector;
export const signupAlwaysNewsletterListIds = configuration.signupNewsletterListIds || [];
export const publicationPortalDbValue = configuration.name;
export const articlePageRelatedMidVariant = "relatedcontent";

const coverBase = typeof process !== "undefined"
    ? String(process.env.NEXT_PUBLIC_PUBLICATION_COVER_BASE_URL || "").replace(/\/$/, "")
    : "";
export const publicationCoverUrlTemplate = coverBase ? coverBase + '/{id_magazine}.jpg' : "";
