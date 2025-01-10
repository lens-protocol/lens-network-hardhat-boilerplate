// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "forge-std/Test.sol";
import "../contracts/Token.sol";

contract TokenTest is Test {
    Token token;
    address owner;
    address recipient;

    event Transfer(address indexed from, address indexed to, uint256 value);

    function setUp() public {
        owner = vm.addr(1);
        recipient = vm.addr(2);

        vm.prank(owner);
        token = new Token();
    }

    function testOwnerIsSetCorrectly() public {
        assertEq(token.owner(), owner, "Owner should be set correctly");
    }

    function testTotalSupplyAssignedToOwner() public {
        uint256 ownerBalance = token.balanceOf(owner);
        assertEq(token.totalSupply(), ownerBalance, "Total supply should be assigned to owner");
    }

    function testTransferTokens() public {
        uint256 initialBalance = token.balanceOf(owner);

        vm.prank(owner);
        token.transfer(recipient, 50);

        assertEq(token.balanceOf(owner), initialBalance - 50, "Owner balance should decrease");
        assertEq(token.balanceOf(recipient), 50, "Recipient balance should increase");
    }

    function testTransferEmitsEvent() public {
        vm.prank(owner);
        vm.expectEmit(true, true, false, true, address(token));
        emit Transfer(owner, recipient, 50);
        token.transfer(recipient, 50);
    }

    function testFailTransferWithoutEnoughTokens() public {
        vm.prank(recipient);
        token.transfer(owner, 1);
    }

    function testRevertTransferWithoutEnoughTokens() public {
        vm.prank(recipient);
        vm.expectRevert("Not enough tokens");
        token.transfer(owner, 1);
    }
}
