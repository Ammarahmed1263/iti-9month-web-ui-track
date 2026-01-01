function showAddr(address) {
  return (
    address.buildingNum +
    " " +
    address.street +
    address.city +
    " city registered in " +
    new Date().toLocaleDateString("en-GB")
  );
}

document.writeln(
  showAddr({
    street: "abc st.",
    buildingNum: 15,
    city: "xyz",
  })
);
