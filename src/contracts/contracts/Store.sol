pragma solidity ^0.4.16;

contract Store {
  uint[] public itemId;
  mapping(uint => StoreItem) public storeItems;
  address private owner;

  struct StoreItem {
    string name;
    string description;
    uint stock;
    string imagePath;
  }

  // ------------------------ MODIFIERS ------------------------------
  // Only allow owner of store to access certain files
  modifier onlyOwner() {
    require(msg.sender == owner);
    _;
  }
  // ------------------------ EVENTS ---------------------------------
  // Event whenever a new item is added to the the store
  event ItemAdded(uint id, string name, string desc, uint stock, string imagePath);

  //Event when name of item is changed
  event NameChanged(uint id, string newName);

  //Event when name of item is changed
  event DescriptionChanged(uint id, string description);
  
  //Event when name of item is changed
  event StockChanged(uint id, uint stock);
  
  //Event when name of item is changed
  event ImagePathChanged(uint id, string imagePath);
  
  // Constructor
  function Store() public {
    owner = msg.sender;
  }
  // ------------------------ FUNCTIONS -----------------------------
  // Add new item to the store - OnlyOwner can access
  function addItem(uint _id, string _name, string _desc, uint _stock, string _imagePath) 
    public onlyOwner returns (bool success)
  {
    for (uint i = 0 ; i < itemId.length; ++i ) {
      if (itemId[i] == _id) {
        revert();
      }
    }
    
    // Set the store item to data provided
    storeItems[_id].name = _name;
    storeItems[_id].description = _desc;
    storeItems[_id].stock = _stock;
    storeItems[_id].imagePath = _imagePath;
    ItemAdded(_id, _name, _desc, _stock, _imagePath);
    itemId.push(_id);
    return true;
  }

  // Change name given item id
  function changeName (uint _id, string _name) public onlyOwner returns (bool success) {
    for (uint i = 0 ; i < itemId.length; ++i ) {
      if (itemId[i] == _id) {
        storeItems[_id].name = _name;
        NameChanged(_id, _name);
        return true;
      }
    }
    return false;
  }
  // Change description given item id
  function changeDesc (uint _id, string _desc) public onlyOwner returns (bool success) {
    for (uint i = 0 ; i < itemId.length; ++i ) {
      if (itemId[i] == _id) {
        storeItems[_id].description = _desc;
        DescriptionChanged(_id, _desc);
        return true;
      }
    }
    return false;
  }
    // Change stock given item id
  function changeName (uint _id, uint _stock) public onlyOwner returns (bool success) {
    for (uint i = 0 ; i < itemId.length; ++i ) {
      if (itemId[i] == _id) {
        storeItems[_id].stock = _stock;
        StockChanged(_id, _stock);
        return true;
      }
    }
    return false;
  }
  // Change image path given item id
  function changeImagePath (uint _id, string _imagePath) public onlyOwner returns (bool success) {
    for (uint i = 0 ; i < itemId.length; ++i ) {
      if (itemId[i] == _id) {
        storeItems[_id].imagePath = _imagePath;
        ImagePathChanged(_id, _imagePath);
        return true;
      }
    }
    return false;
  }

  // Get Item
  function getItem (uint _id) public view
  returns (string name, string description, uint stock, string imagePath) 
  {
    var item = storeItems[_id];
    return (item.name, item.description, item.stock, item.imagePath);
  }
}