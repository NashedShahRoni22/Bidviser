import React from "react";
import { FacebookProvider, CustomChat } from "react-facebook";

export default function FacebookMsg() {
  return (
    <FacebookProvider appId="250259758008692" chatSupport>
      <CustomChat pageId="105996072568115 " minimized={"true"} />
    </FacebookProvider>
  );
}
