// SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;

error EventBadge__SendCorrectPaymentAmount();
error EventBadge__EventExpired();
error EventBadge__UpkeepNotNeeded();

contract EventBadge {
    enum EventState {
        Pending,
        Live,
        Expired
    }

    EventState public s_eventState;
    uint256 private immutable i_badgeFee;
    uint256 public dt_eventStartDate;
    uint256 public dt_eventEndDate;
    address payable[] public s_badgeHolders;

    event BadgePurchased(address indexed purchaser);
    event EventHasStarted();
    event EventHasExpired();

    constructor(
        uint256 badgeFee,
        uint256 eventStart,
        uint256 eventEnd
    ) {
        i_badgeFee = badgeFee;
        dt_eventStartDate = eventStart;
        dt_eventEndDate = eventEnd;
    }

    function buyBadge() external payable {
        // Send the right amount of money
        if (msg.value < i_badgeFee) {
            revert EventBadge__SendCorrectPaymentAmount();
        }
        // Only allow purchase if the event hasn't expired
        if (
            s_eventState != EventState.Pending ||
            s_eventState != EventState.Live
        ) {
            revert EventBadge__EventExpired();
        }
        if (block.timestamp >= dt_eventEndDate) {
            revert EventBadge__EventExpired();
        }

        s_badgeHolders.push(payable(msg.sender));
        emit BadgePurchased(msg.sender);
    }

    function isEventLive() public view returns (bool) {
        return
            block.timestamp > dt_eventStartDate &&
            block.timestamp < dt_eventEndDate;
    }

    function isBadgeAvailableForSale() public view returns (bool) {
        return block.timestamp < dt_eventEndDate;
    }

    function checkUpkeep(bytes calldata /* checkData */)
        public
        view
        returns (bool upkeepNeeded, bytes memory /* performData */)
    {
        bool needsUpdating = false;

        // Event has expired, no longer need to watch for this so exit early
        if (s_eventState == EventState.Expired) {
            return (needsUpdating, "0x0");
        }

        // If event is flagged pending but the event has started
        if (s_eventState == EventState.Pending) {
            if (block.timestamp > dt_eventStartDate) {
                needsUpdating = true;
            }
        }

        // If the event has expired
        if (s_eventState == EventState.Live) {
            if (block.timestamp < dt_eventEndDate) {
                needsUpdating = true;
            }
        }

        return (needsUpdating, "0x0");
    }

    function performUpkeep(bytes calldata performData) external {
        (bool upkeepNeeded, ) = checkUpkeep(performData);
        if (!upkeepNeeded) {
            revert EventBadge__UpkeepNotNeeded();
        }

        if (block.timestamp > dt_eventStartDate) {
            s_eventState = EventState.Live;
            emit EventHasStarted();
        }
        if (block.timestamp >= dt_eventEndDate) {
            s_eventState = EventState.Expired;
            emit EventHasExpired();
        }
    }
}
