pragma solidity ^0.5.0;

import './openzeppelin/token/ERC20/ERC20.sol';
import './openzeppelin/ownership/Ownable.sol';
import 'Pausable.sol';
import 'Membership.sol';

contract Erica is ERC20, Pausable, Membership {

  string public name;
  string public symbol;
  uint256 public decimals = 0;


  function setName(string memory _name) public onlyOwner() {
    name = _name;
  }

  function setSymbol(string memory _symbol) public onlyOwner() {
    symbol = _symbol;
  }

  function transfer(
    address _to,
    uint256 _value
  ) public whenNotPaused onlyMember(msg.sender) onlyMember(_to) returns (bool) {
    return super.transfer(_to, _value);
  }

  event MintWithReason ( address to, uint256 value, bytes reason );
  event BurnWithReason ( address from, uint256 value, bytes reason );

  function transferFrom(
    address _from,
    address _to,
    uint256 _value
  ) public whenNotPaused onlyMember(_from) onlyMember(_to) returns (bool) {
      return super.transferFrom(_from, _to, _value);
  }

  function mint(address _to, uint256 _value, bytes memory _reason) public onlyOwner() onlyMember(_to) {
    super._mint(_to, _value);
    emit MintWithReason(_to, _value, _reason);
  }

  function burn(address _from, uint256 _value, bytes memory _reason) public onlyOwner() {
    super._burn(_from, _value);
    emit BurnWithReason(_from, _value, _reason);
  }

}
