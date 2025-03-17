"use client";

import Script from "next/script";
import { useEffect, useRef } from "react";

declare global {
  interface Window {
    adsbygoogle?: { push: () => void }[];
  }
}

export default function GoogleAd() {
  const NEXT_PUBLIC_ADSENSE_CLIENT = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;
  const adRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined" && window.adsbygoogle && adRef.current) {
      try {
        window.adsbygoogle.push({
          push: function (): void {
            throw new Error("Function not implemented.");
          },
        });
      } catch (err) {
        console.error("Adsbygoogle error:", err);
      }
    }
  }, []);

  return (
    <>
      <Script
        id="adsbygoogle-init"
        async
        strategy="afterInteractive"
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-${NEXT_PUBLIC_ADSENSE_CLIENT}`}
        crossOrigin="anonymous"
      />
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={`ca-pub-${NEXT_PUBLIC_ADSENSE_CLIENT}`}
        data-ad-slot={`${NEXT_PUBLIC_ADSENSE_CLIENT}`}
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </>
  );
}
