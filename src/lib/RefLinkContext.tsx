'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { MAIN_REF_LINK, PROMOTERS } from './config';

const RefLinkContext = createContext<string>(MAIN_REF_LINK);

export function RefLinkProvider({ children }: { children: ReactNode }) {
  const [refLink, setRefLink] = useState(MAIN_REF_LINK);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const user = params.get('u');
    if (user && PROMOTERS[user.toLowerCase()]) {
      setRefLink(PROMOTERS[user.toLowerCase()]);
    }
  }, []);

  return (
    <RefLinkContext.Provider value={refLink}>
      {children}
    </RefLinkContext.Provider>
  );
}

export function useRefLink() {
  return useContext(RefLinkContext);
}
