import * as core from "@govbr-ds/core";

export const initBRInput = (element: HTMLElement) => {
  if (element) {
    try {
      return new core.BRInput("br-input", element);
    } catch (error) {
      console.error("BRInput initialization failed:", error);
      return null;
    }
  }
  return null;
};