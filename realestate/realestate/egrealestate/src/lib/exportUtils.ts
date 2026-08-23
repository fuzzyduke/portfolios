import { FloorPlan } from "./layoutTypes";

export const copyToClipboard = async (data: FloorPlan) => {
  try {
    await navigator.clipboard.writeText(JSON.stringify(data, null, 2));
    return true;
  } catch (error) {
    console.error("Failed to copy to clipboard", error);
    return false;
  }
};

export const downloadJson = (data: FloorPlan) => {
  try {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(data, null, 2));
    const downloadAnchorNode = document.createElement("a");
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", `${data.name.replace(/\s+/g, "_").toLowerCase()}_layout.json`);
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  } catch (error) {
    console.error("Failed to download JSON", error);
  }
};
