pragma solidity ^0.5.0;

import './openzeppelin/ownership/Ownable.sol';

contract Pausable is Ownable {
  bool public isPaused;

  event SetIsPausedWithReason(bool isPaused, bytes reason);

  function setIsPaused(bool _isPaused, bytes memory _reason) public onlyOwner() {
    isPaused = _isPaused;
    emit SetIsPausedWithReason(_isPaused, _reason);
  }

  modifier whenNotPaused() {
    require(isPaused == false, 'pollenium/erica/Pausable.sol/paused');
    _;
  }
}
