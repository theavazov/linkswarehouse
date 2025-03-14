"use client";

import Script from "next/script";
import { useEffect } from "react";

export default function GoogleAd() {
  const NEXT_PUBLIC_ADSENSE_CLIENT = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;
  const NEXT_PUBLIC_ADSENSE_SLOT = process.env.NEXT_PUBLIC_ADSENSE_SLOT;

  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.log("Error", err);
    }
  }, []);

  return (
    <>
      <Script
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub${NEXT_PUBLIC_ADSENSE_CLIENT}`}
        crossOrigin="anonymous"
        async
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
