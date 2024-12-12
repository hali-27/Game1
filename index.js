class Room {
    constructor(name) {
      this._name = name;
      this._description = "";
      this._linkedRooms = {};
      this._character = "";
      this._enemy = "";
    }
  
    get name() {
      return this._name;
    }
  
    get description() {
      return this._description;
    }
  
    get character() {
      return this._character
    }

    get enemy() {
      return this._enemy
    }
  
    set name(value) {
      if (value.length < 4) {
        alert("Name is too short.");
        return;
      }
      this._name = value;
    }
  
    set description(value) {
      if (value.length < 4) {
        alert("description is too short.");
        return;
      }
      this._description = value;
    }
  
    set character(value) {
      this._character = value;
    }

    set enemy(value) {
      this._enemy = value;
    }
  
    /**
     * a method to produce friendly room description
     * 
     * @returns {string} description of the room
     * @author Neil Bizzell
     * @version 1.0
     */
    describe() {
      return "You are in the " + this._name + ". Looking around, you can see " + this._description;
    }
  
    /**
    * a method to add rooms to link rooms to this one
    * it does this by adding them to _linkedRooms
    * 
    * @param {string} direction the direction the other rooom is from this one
    * @param {object} roomToLink the room that is in that direction
    * @author Neil Bizzell
    * @version 1.0
    */
    linkRoom(direction, roomToLink) {
      this._linkedRooms[direction] = roomToLink;
    }
  
    /**
     * a method to produce friendly description of linked rooms
     * 
     * @returns {array} descriptions of what rooms are in which direction
     * @author Neil Bizzell
     * @version 1.0
     */
    getDetails() {
      const entries = Object.entries(this._linkedRooms);
      let details = []
      for (const [direction, room] of entries) {
        let text = " The " + room._name + " is to the " + direction;
        details.push(text);
      }
      return details;
    }
  
    /**
     * a method to move the adventurer to a new room
     * 
     * @param {string} direction the direction in which to move
     * @returns {object} the room moved to 
     * @author Neil Bizzell
     * @version 1.1
     */
    //method to move to a new room
    move(direction) {
      if (direction in this._linkedRooms) {
        return this._linkedRooms[direction];
      } else {
        alert("Oops sorry, you can not go that way",);
        return this;
      }
    }
// method to collect/capture mice
    // collect() {
    //   if (this.item in this._linkedRoom) {
    //     return this._linkedRoom[item]
    //   } else {
    //     alert("There are no mice in here!!");
    //     return this;
    //   }
    // }

  }
  
  class Item {
    constructor(name) {
      this._name = name,
        this._description = ""
    }
  
    set name(value) {
      if (value.length < 4) {
        alert("Name is too short.");
        return;
      }
      this._name = value;
    }
  
    set description(value) {
      if (value.length < 4) {
        alert("Decription is too short.");
        return;
      }
      this._name = value;
    }
  
    get name() {
      return this._name;
    }
  
    get description() {
      return this._description;
    }
  
    /**
     * a method to produce friendly item description
     * 
     * @returns {string} description of the item
     * @author Neil Bizzell
     * @version 1.0
     */
    describe() {
      return "The " + this._name + " is " + this._description;
    }
  
  
  }
  
  class Character {
    constructor(name) {
      this._name = name,
        this._description = ""
      this._conversation = ""
    }
    set name(value) {
      if (value.length < 4) {
        alert("Name is too short.");
        return;
      }
      this._name = value;
    }
  
    set description(value) {
      if (value.length < 4) {
        alert("Decription is too short.");
        return;
      }
      this._description = value;
    }
  
    set conversation(value) {
      if (value.length < 4) {
        alert("conversation is too short.");
        return;
      }
      this._conversation = value;
    }
    get name() {
      return this._name;
    }
  
    get description() {
      return this._description;
    }
  
    get conversation() {
      return this._conversation;
    }
    /**
     * a method to produce friendly character description
     * 
     * @returns {string} description of the character
     * @author Neil Bizzell
     * @version 1.0
     */
    describe() {
      return "Oh look! You have found " + this._name + ", " + this._description;
    }
  
    /**
     * a method to produce friendly conversation text
     * 
     * @returns {string} the conversation text
     * @author Neil Bizzell
     * @version 1.0
     */
    converse() {
      return this._name + " says " + "'" + this._conversation + "'";
    }
  }
  
  class Enemy extends Character {
    constructor(name) {
      super(name);
      this._weakness = "";
    }
  
    set weakness(value) {
      if (value.length < 4) {
        alert("Decription is too short.");
        return;
      }
      this._weakness = value;
    }
    

    /**
     * 
     * a method to determine the reult of fighting an enemy
     * 
     * @param {string} item the item used to fight the enemy 
     * @returns {boolean} the result of the fight true = win, falese = loose
     * @author Neil Bizzell
     * @version 1.0
     */
    fight(item) {
      if (item = this_weakness) {
        return true;
      } else {
        return false;
      }
    }
  
  }
  
  //create the indiviual room objects and add their descriptions
  const Kitchen = new Room("Kitchen");
  Kitchen.description = "food left open on the worktop and crumbs on the floor. This is the perfect place to go for dinner if you were a mouse."
  const QuietRoom = new Room("Quiet Room");
  QuietRoom.description = "a sofa, bookshelf, and a fire place. Nice and cosy for snoozing in. It is located in the middle of the house so can access every room from here.";
  const GamesRoom = new Room("Games Room");
  GamesRoom.description = "a room full of dog toys.";
  const Office = new Room("Office");
  Office.description =
    "a room with a desk, comfy chair, snacks, and a bay window.";
  const Catio = new Room("Catio");
  Catio.description =
    "a glass room with floor heating and two cat beds, overlooking the beautiful garden.";
  
  //link the rooms together
  QuietRoom.linkRoom("south", Catio);
  QuietRoom.linkRoom("north", Office);
  QuietRoom.linkRoom("east", Kitchen);
  QuietRoom.linkRoom("west", GamesRoom);
  Kitchen.linkRoom("west", QuietRoom);
  Office.linkRoom("south", QuietRoom);
  Catio.linkRoom("north", QuietRoom);
  GamesRoom.linkRoom("east", QuietRoom);
  
  //add characters
  const Truffles = new Character("Truffles");
  Truffles.description = " my eldest dog. She is living her best life, playing with her toys";
  Truffles.conversation = "Woof! There is a smelly little creature sleeping in my bed in the Quiet Room so I have come in here.";
  const Poppy = new Character("Poppy");
  Poppy.description = "The younger dog, enjoying her views and temperature in the catio after eating her 5th meal of the day in the kitchen already."
  Poppy.conversation = "Meow. I think I heard something in the kitchen.";
   
  // add enemies
    
  const MouseE = new Enemy("MouseE");
  MouseE.description = "A chubby furry little thing that shouldn't be here!";
  MouseE.conversation = "Squeak, mmm that was a yummy.";
  MouseE.weakness = "water";
  const MouseC = new Enemy("MouseC");
  MouseC.description = "A snoozing mouse.";
  MouseC.conversation = "zZzZZ";
  MouseC.weakness = "water";
  
  
  // add characters to rooms
  GamesRoom.character = Truffles;
  Catio.character = Poppy;
  // add enemies to rooms
  QuietRoom.character = MouseC;
  Kitchen.character = MouseE;
  /**
   * Subroutine to display information about the current room
   * 
   * @param {object} room the room to be displayed
   * @author Neil Bizzell
   * @version 1.0 
   */
  function displayRoomInfo(room) {
    let occupantMsg = ""
    if (room.character === "") {
      occupantMsg = ""
    } else {
      occupantMsg = room.character.describe() + ". " + room.character.converse()
    }
  
    textContent = "<p>" + room.describe() + "</p>" + "<p>" +
      occupantMsg + "</p>" + "<p>" + room.getDetails() + "</p>";
  
    document.getElementById("textarea").innerHTML = textContent;
    document.getElementById("buttonarea").innerHTML = '><input type="text" id="usertext" />';
    document.getElementById("usertext").focus();
  }

  // function displayScoreInfo(score) {
  //   let occupantMsg = ""
  //   if (room.ch)
  // }
  
  /**
   * Subroutine to complete inital game set up then handle commands from the user
   * 
   * @author Neil Bizzell
   * @version 1.0
   */
  function startGame() {
    //set and display start room
    currentRoom = GamesRoom
    displayRoomInfo(currentRoom);
  
    //
  
    //handle commands
    document.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        command = document.getElementById("usertext").value;
        const directions = ["north", "south", "east", "west"]
        if (directions.includes(command.toLowerCase())) {
          currentRoom = currentRoom.move(command)
          displayRoomInfo(currentRoom);
        } else {
          document.getElementById("usertext").value = ""
          alert("Invalid Command. Please enter north, south, east or west")
        }
  
      }
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        command = document.getElementById("usertext").value;
        const actions = ["capture", "play"]
        if (actions.includes(command.toLowerCase())) {
          score = +1
          
        }
      }
    }
  
  
  )
  }
  