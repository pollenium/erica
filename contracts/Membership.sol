pragma solidity ^0.5.0;

import './openzeppelin/ownership/Ownable.sol';

contract Membership is Ownable {
  mapping(address => bool) public isMemberAccount;

  function setIsMemberAccount(
    address _memberAccount,
    bool _isMemberAccount
  ) public onlyOwner() {
    isMemberAccount[_memberAccount] = _isMemberAccount;
  }

  modifier onlyMember(address _memberAccount) {
    require(isMemberAccount[_memberAccount] == true, 'pollenium/erica/Erica.sol/not-member-account');
    _;
  }
}
