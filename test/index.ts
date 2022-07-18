import { expect } from "chai";
import { ethers } from "hardhat";

// describe("Greeter", function () {
//   it("Should return the new greeting once it's changed", async function () {
//     const Greeter = await ethers.getContractFactory("Greeter");
//     const greeter = await Greeter.deploy("Hello, world!");
//     await greeter.deployed();

//     expect(await greeter.greet()).to.equal("Hello, world!");

//     const setGreetingTx = await greeter.setGreeting("Hola, mundo!");

//     // wait until the transaction is mined
//     await setGreetingTx.wait();

//     expect(await greeter.greet()).to.equal("Hola, mundo!");
//   });
// });


describe("OOP-Example", function () {
  it("#Test1 - User Contract", async function () {
    
    try
    {
      const [owner,add1,add2]=await ethers.getSigners();

      // Contract Deployment
      const CalleeContract= await ethers.getContractFactory("Callee");
      const calleeContract= await CalleeContract.deploy();
      await calleeContract.deployed();

      const CallerContract= await ethers.getContractFactory("Caller");
      const callerContract= await CallerContract.deploy(calleeContract.address); // Pass the Callee Contract Address.
      await callerContract.deployed();

      // Assert
      await callerContract.connect(owner).SendEtherWithMessage("Hello",{value: ethers.utils.parseEther("1")});

      // Test
      expect(true).to.equal(true);
    }
    catch(ex)
    {
      console.log((<Error>ex).message);
      expect(false).to.equal(true);
    }
  });
});