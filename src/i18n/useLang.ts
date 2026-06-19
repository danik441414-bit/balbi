import { useEffect, useState } from "react";

const EVENT = "balbi.lang-changed";

export function getLang(): string {
  if (typeof window === "undefined") return "en";
  return localStorage.getItem("balbi.lang") ?? "en";
}

export function setLang(code: string) {
  try {
    localStorage.setItem("balbi.lang", code);
  } catch {
    /* ignore */
  }
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent(EVENT, { detail: code }));
  }
}

export function useLang(): [string, (code: string) => void] {
  const [lang, setLangState] = useState("en");

  useEffect(() => {
    setLangState(getLang());
    const onChange = (e: Event) => {
      const detail = (e as CustomEvent<string>).detail;
      if (detail) setLangState(detail);
      else setLangState(getLang());
    };
    const onStorage = (e: StorageEvent) => {
      if (e.key === "balbi.lang") setLangState(e.newValue ?? "en");
    };
    window.addEventListener(EVENT, onChange);
    window.addEventListener("storage", onStorage);
    return () => {
      window.removeEventListener(EVENT, onChange);
      window.removeEventListener("storage", onStorage);
    };
  }, []);

  return [lang, (code: string) => {
    setLang(code);
    setLangState(code);
  }];
}