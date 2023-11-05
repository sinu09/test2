if ("userAgentData" in navigator) {
  navigator.userAgentData.getHighEntropyValues(["model"]).then((values) => {
    const deviceModel = values.model;
    console.log("Device Model: " + deviceModel);
  });
} else {
  console.log("NavigatorUAData not supported in this browser.");
}
