// SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;

import "./ERC721Tradable.sol";

/**
 * @title EventBadge
 * EventBadge - Contract for the events badges sold by True Interactive Services
 */

contract EventBadge is ERC721Tradable {
    constructor(address _proxyRegistryAddress, )
        ERC721Tradable("EventBadge", "badge", _proxyRegistryAddress)
    {}

    function baseTokenURI() public pure override returns (string memory) {
        return
            "https://ipfs.io/ipfs/needsupdating/json/";
    }

    function contractURI() public pure returns (string memory) {
        return
            "https://ipfs.io/ipfs/needsupdating/event-badge-metadata.json";
    }
}
