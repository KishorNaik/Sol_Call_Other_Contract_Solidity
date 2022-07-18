//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Callee{

    uint private amount;
    string private message;

    function SendEtherWithMessage(string memory _message) public payable returns(string memory,uint){
        message=_message;
        amount=msg.value;

        return (message,amount);
    } 
}

contract Caller{

    Callee private _callee;

    constructor(address _contractCalleeAddress){
        _callee=Callee(_contractCalleeAddress);
    }

    function SendEtherWithMessage(string memory _message) public payable{
        (string memory message,uint amount)=_callee.SendEtherWithMessage{value:msg.value}(_message);

        console.log("Sender Address =>",msg.sender);
        console.log("Message =>",message);
        console.log("Amount =>",amount);
    }
}