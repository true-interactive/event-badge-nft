import React from 'react';
import PropTypes from 'prop-types';

/**
 * Countdown Timer for the NFT Event Badges
 */
export const EventTimer = ({ endDate, ...props }) => {
  return (
    <object data='../svgs/event-timer.svg' type="image/svg+xml">
      Failed to load timer
    </object>
  );
};

EventTimer.propTypes = {
  /**
   * Timer's End DateTime
   */
  endDate: PropTypes.string.isRequired,
};

EventTimer.defaultProps = {
  endDate: Date.now,
};
