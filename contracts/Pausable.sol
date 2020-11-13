pragma solidity ^0.5.0;

import './openzeppelin/ownership/Ownable.sol';

contract Pausable is Ownable {
  bool public isPaused;

  function setIsPaused(bool _isPaused) public onlyOwner() {
    isPaused = _isPaused;
  }

  modifier whenNotPaused() {
    require(isPaused == false, 'pollenium/erica/Pausable.sol/paused');
    _;
  }
}
