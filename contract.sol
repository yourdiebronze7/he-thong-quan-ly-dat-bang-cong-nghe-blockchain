// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract LandRegistry {
    struct Land {
        uint id;
        string owner;
        string details;
        uint256 timestamp;
    }

    mapping(uint => Land) public lands;
    uint public landCount;
    uint constant MAX_LAND_COUNT = 1000; // Maximum allowable lands

    event LandRegistered(uint indexed id, string owner, string details);

    function registerLand(string memory _owner, string memory _details) public {
        require(landCount < MAX_LAND_COUNT, "Maximum land registration limit reached.");
        landCount++;
        lands[landCount] = Land(landCount, _owner, _details, block.timestamp);
        emit LandRegistered(landCount, _owner, _details);
    }

    function getLand(uint _id) public view returns (Land memory) {
        return lands[_id];
    }
}