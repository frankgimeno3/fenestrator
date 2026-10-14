"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { pickNBannersByPriority, type BannerItem } from "./pickBannerByPriority";
import { BannerImageFitWidth } from "./BannerImageFitWidth";
import StickyBannerRail from "./StickyBannerRail";

export default function RightBanner() {
  const [banners, setBanners] = useState<BannerItem[]>([]);
  const pathname = usePathname();

  useEffect(() => {
    fetch("/api/v1/banners")
      .then((response) => response.ok ? response.json() : [])
      .then((rows) => setBanners(Array.isArray(rows) ? rows : []))
      .catch(() => setBanners([]));
  }, []);

  const selected = useMemo(
    () => pickNBannersByPriority(banners, "right", 4, pathname),
    [banners, pathname]
  );

  if (!selected.length) return <StickyBannerRail className="min-h-[100px] w-full rounded-lg bg-gray-100" />;

  return <StickyBannerRail className="mb-6 flex w-full flex-col gap-4 pb-6 pr-2 pt-5">
    {selected.map((banner) => <Link key={banner.id_banner} href={banner.bannerRedirection || banner.bannerRoute || "/"} target="_blank" rel="noopener noreferrer" className="relative block overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-neutral-200 transition-opacity hover:opacity-90">
      <BannerImageFitWidth src={banner.bannerSrc} sizes="280px" />
      <span className="pointer-events-none absolute left-2 top-1.5 rounded bg-white/60 px-1.5 py-0.5 text-[0.64rem] font-semibold uppercase tracking-wider text-blue-950">Sponsored by</span>
    </Link>)}
  </StickyBannerRail>;
}
