function onCreated() {
  if (browser.runtime.lastError) {
    console.log(`Error: ${browser.runtime.lastError}`);
  } else {
    console.log("Item created successfully");
  }
}

browser.menus.create(
  {
    id: "link-to-clipboard",
    title: "Copy link in Reader View",
    contexts: ["link"],
  },
  onCreated
);

browser.menus.onClicked.addListener((info, tab) => {
  switch (info.menuItemId) {
    case "link-to-clipboard":
      const readerLink = `about:reader?url=${info.linkUrl}`;
      console.log(info);
      navigator.clipboard.writeText(readerLink);
  }
});
