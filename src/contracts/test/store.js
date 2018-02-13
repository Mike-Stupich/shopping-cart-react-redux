const Store = artifacts.require("./Store.sol");
contract("Store", (accounts) => {
  let storeInstance;
  it("...should create an instance of store", () => {
    return Store.deployed().then((instance) => {
      storeInstance = instance;
      assert.notEqual(storeInstance, null, "Failed to create the Store instance");
    });
  });
  it("...should add an item to the store", () => {
    const id = 1;
    const name = "Test Item";
    const desc = "Super cool item";
    const stock = 20;
    const image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBYL1PrZy3Dcz1908YecMxcouZ-EFwKah_knKOc4MnbEsG6fpj";

    return storeInstance.addItem(id, name, desc, stock, image, {from: accounts[0]}).then(() => {
      return storeInstance.getItem(id).then((item) => {
        assert.equal(name, item[0], "Item was not correctly added");
      });
    });
  });
})