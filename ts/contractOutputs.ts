import { Uu } from 'pollenium-uvaursi'
import { ContractOutput } from 'pollenium-clover'

export const erica: ContractOutput = {
  abiJson: '[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"},{"indexed":false,"internalType":"bytes","name":"reason","type":"bytes"}],"name":"BurnWithReason","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"},{"indexed":false,"internalType":"bytes","name":"reason","type":"bytes"}],"name":"MintWithReason","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"uint256","name":"_value","type":"uint256"},{"internalType":"bytes","name":"_reason","type":"bytes"}],"name":"burn","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"isMemberAccount","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"isOwner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"isPaused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_value","type":"uint256"},{"internalType":"bytes","name":"_reason","type":"bytes"}],"name":"mint","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_memberAccount","type":"address"},{"internalType":"bool","name":"_isMemberAccount","type":"bool"}],"name":"setIsMemberAccount","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bool","name":"_isPaused","type":"bool"}],"name":"setIsPaused","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"string","name":"_name","type":"string"}],"name":"setName","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"string","name":"_symbol","type":"string"}],"name":"setSymbol","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]',
  bytecode: Uu.fromHexish('6080604052600060075561001a6001600160e01b0361006b16565b600380546001600160a01b0319166001600160a01b0392831617908190556040519116906000907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a361006f565b3390565b6119c88061007e6000396000f3fe608060405234801561001057600080fd5b506004361061014d5760003560e01c80638da5cb5b116100c3578063b187bd261161007c578063b187bd261461050e578063b641be0314610516578063b84c82461461053c578063c47f0027146105e0578063dd62ed3e14610684578063f2fde38b146106b25761014d565b80638da5cb5b146103c95780638f32d59b146103ed57806394d008ef146103f557806395d89b41146104ae578063a457c2d7146104b6578063a9059cbb146104e25761014d565b8063240976bf11610115578063240976bf1461028f578063313ce567146102ae57806339509351146102b657806344d17187146102e257806370a082311461039b578063715018a6146103c15761014d565b80630657b57b1461015257806306fdde0314610182578063095ea7b3146101ff57806318160ddd1461023f57806323b872dd14610259575b600080fd5b6101806004803603604081101561016857600080fd5b506001600160a01b03813516906020013515156106d8565b005b61018a61074a565b6040805160208082528351818301528351919283929083019185019080838360005b838110156101c45781810151838201526020016101ac565b50505050905090810190601f1680156101f15780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61022b6004803603604081101561021557600080fd5b506001600160a01b0381351690602001356107d8565b604080519115158252519081900360200190f35b6102476107f5565b60408051918252519081900360200190f35b61022b6004803603606081101561026f57600080fd5b506001600160a01b038135811691602081013590911690604001356107fc565b610180600480360360208110156102a557600080fd5b50351515610919565b61024761097e565b61022b600480360360408110156102cc57600080fd5b506001600160a01b038135169060200135610984565b610180600480360360608110156102f857600080fd5b6001600160a01b0382351691602081013591810190606081016040820135600160201b81111561032757600080fd5b82018360208201111561033957600080fd5b803590602001918460018302840111600160201b8311171561035a57600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506109dd945050505050565b610247600480360360208110156103b157600080fd5b50356001600160a01b0316610aee565b610180610b09565b6103d1610b9a565b604080516001600160a01b039092168252519081900360200190f35b61022b610ba9565b6101806004803603606081101561040b57600080fd5b6001600160a01b0382351691602081013591810190606081016040820135600160201b81111561043a57600080fd5b82018360208201111561044c57600080fd5b803590602001918460018302840111600160201b8311171561046d57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610bcf945050505050565b61018a610d3f565b61022b600480360360408110156104cc57600080fd5b506001600160a01b038135169060200135610d9a565b61022b600480360360408110156104f857600080fd5b506001600160a01b038135169060200135610e08565b61022b610f18565b61022b6004803603602081101561052c57600080fd5b50356001600160a01b0316610f28565b6101806004803603602081101561055257600080fd5b810190602081018135600160201b81111561056c57600080fd5b82018360208201111561057e57600080fd5b803590602001918460018302840111600160201b8311171561059f57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610f3d945050505050565b610180600480360360208110156105f657600080fd5b810190602081018135600160201b81111561061057600080fd5b82018360208201111561062257600080fd5b803590602001918460018302840111600160201b8311171561064357600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610f9b945050505050565b6102476004803603604081101561069a57600080fd5b506001600160a01b0381358116916020013516610ff5565b610180600480360360208110156106c857600080fd5b50356001600160a01b0316611020565b6106e0610ba9565b61071f576040805162461bcd60e51b815260206004820181905260248201526000805160206118c2833981519152604482015290519081900360640190fd5b6001600160a01b03919091166000908152600460205260409020805460ff1916911515919091179055565b6005805460408051602060026001851615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156107d05780601f106107a5576101008083540402835291602001916107d0565b820191906000526020600020905b8154815290600101906020018083116107b357829003601f168201915b505050505081565b60006107ec6107e5611073565b8484611077565b50600192915050565b6002545b90565b600354600090600160a01b900460ff16156108485760405162461bcd60e51b815260040180806020018281038252602381526020018061194c6023913960400191505060405180910390fd5b6001600160a01b038416600090815260046020526040902054849060ff1615156001146108a65760405162461bcd60e51b815260040180806020018281038252602c81526020018061186e602c913960400191505060405180910390fd5b6001600160a01b038416600090815260046020526040902054849060ff1615156001146109045760405162461bcd60e51b815260040180806020018281038252602c81526020018061186e602c913960400191505060405180910390fd5b61090f868686611163565b9695505050505050565b610921610ba9565b610960576040805162461bcd60e51b815260206004820181905260248201526000805160206118c2833981519152604482015290519081900360640190fd5b60038054911515600160a01b0260ff60a01b19909216919091179055565b60075481565b60006107ec610991611073565b846109d885600160006109a2611073565b6001600160a01b03908116825260208083019390935260409182016000908120918c16815292529020549063ffffffff6111eb16565b611077565b6109e5610ba9565b610a24576040805162461bcd60e51b815260206004820181905260248201526000805160206118c2833981519152604482015290519081900360640190fd5b610a2e838361124c565b7fdcc4a152f3d9a2cb9d615a22f67efa251821ee904d1bd41a93b47b17d86c068283838360405180846001600160a01b03166001600160a01b0316815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610aad578181015183820152602001610a95565b50505050905090810190601f168015610ada5780820380516001836020036101000a031916815260200191505b5094505050505060405180910390a1505050565b6001600160a01b031660009081526020819052604090205490565b610b11610ba9565b610b50576040805162461bcd60e51b815260206004820181905260248201526000805160206118c2833981519152604482015290519081900360640190fd5b6003546040516000916001600160a01b0316907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600380546001600160a01b0319169055565b6003546001600160a01b031690565b6003546000906001600160a01b0316610bc0611073565b6001600160a01b031614905090565b610bd7610ba9565b610c16576040805162461bcd60e51b815260206004820181905260248201526000805160206118c2833981519152604482015290519081900360640190fd5b6001600160a01b038316600090815260046020526040902054839060ff161515600114610c745760405162461bcd60e51b815260040180806020018281038252602c81526020018061186e602c913960400191505060405180910390fd5b610c7e8484611348565b7f9400187daa1b6ff5f47025108711227eb151f2397242352597852a8dd727a34d84848460405180846001600160a01b03166001600160a01b0316815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610cfd578181015183820152602001610ce5565b50505050905090810190601f168015610d2a5780820380516001836020036101000a031916815260200191505b5094505050505060405180910390a150505050565b6006805460408051602060026001851615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156107d05780601f106107a5576101008083540402835291602001916107d0565b60006107ec610da7611073565b846109d88560405180606001604052806025815260200161196f6025913960016000610dd1611073565b6001600160a01b03908116825260208083019390935260409182016000908120918d1681529252902054919063ffffffff61143816565b600354600090600160a01b900460ff1615610e545760405162461bcd60e51b815260040180806020018281038252602381526020018061194c6023913960400191505060405180910390fd5b3360008181526004602052604090205460ff161515600114610ea75760405162461bcd60e51b815260040180806020018281038252602c81526020018061186e602c913960400191505060405180910390fd5b6001600160a01b038416600090815260046020526040902054849060ff161515600114610f055760405162461bcd60e51b815260040180806020018281038252602c81526020018061186e602c913960400191505060405180910390fd5b610f0f85856114cf565b95945050505050565b600354600160a01b900460ff1681565b60046020526000908152604090205460ff1681565b610f45610ba9565b610f84576040805162461bcd60e51b815260206004820181905260248201526000805160206118c2833981519152604482015290519081900360640190fd5b8051610f97906006906020840190611722565b5050565b610fa3610ba9565b610fe2576040805162461bcd60e51b815260206004820181905260248201526000805160206118c2833981519152604482015290519081900360640190fd5b8051610f97906005906020840190611722565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b611028610ba9565b611067576040805162461bcd60e51b815260206004820181905260248201526000805160206118c2833981519152604482015290519081900360640190fd5b611070816114e3565b50565b3390565b6001600160a01b0383166110bc5760405162461bcd60e51b81526004018080602001828103825260248152602001806119286024913960400191505060405180910390fd5b6001600160a01b0382166111015760405162461bcd60e51b81526004018080602001828103825260228152602001806118266022913960400191505060405180910390fd5b6001600160a01b03808416600081815260016020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b6000611170848484611584565b6111e18461117c611073565b6109d88560405180606001604052806028815260200161189a602891396001600160a01b038a166000908152600160205260408120906111ba611073565b6001600160a01b03168152602081019190915260400160002054919063ffffffff61143816565b5060019392505050565b600082820183811015611245576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b6001600160a01b0382166112915760405162461bcd60e51b81526004018080602001828103825260218152602001806118e26021913960400191505060405180910390fd5b6112d4816040518060600160405280602281526020016117de602291396001600160a01b038516600090815260208190526040902054919063ffffffff61143816565b6001600160a01b038316600090815260208190526040902055600254611300908263ffffffff6116e016565b6002556040805182815290516000916001600160a01b038516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9181900360200190a35050565b6001600160a01b0382166113a3576040805162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b6002546113b6908263ffffffff6111eb16565b6002556001600160a01b0382166000908152602081905260409020546113e2908263ffffffff6111eb16565b6001600160a01b0383166000818152602081815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b600081848411156114c75760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561148c578181015183820152602001611474565b50505050905090810190601f1680156114b95780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b60006107ec6114dc611073565b8484611584565b6001600160a01b0381166115285760405162461bcd60e51b81526004018080602001828103825260268152602001806118006026913960400191505060405180910390fd5b6003546040516001600160a01b038084169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3600380546001600160a01b0319166001600160a01b0392909216919091179055565b6001600160a01b0383166115c95760405162461bcd60e51b81526004018080602001828103825260258152602001806119036025913960400191505060405180910390fd5b6001600160a01b03821661160e5760405162461bcd60e51b81526004018080602001828103825260238152602001806117bb6023913960400191505060405180910390fd5b61165181604051806060016040528060268152602001611848602691396001600160a01b038616600090815260208190526040902054919063ffffffff61143816565b6001600160a01b038085166000908152602081905260408082209390935590841681522054611686908263ffffffff6111eb16565b6001600160a01b038084166000818152602081815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b600061124583836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250611438565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061176357805160ff1916838001178555611790565b82800160010185558215611790579182015b82811115611790578251825591602001919060010190611775565b5061179c9291506117a0565b5090565b6107f991905b8082111561179c57600081556001016117a656fe45524332303a207472616e7366657220746f20746865207a65726f206164647265737345524332303a206275726e20616d6f756e7420657863656564732062616c616e63654f776e61626c653a206e6577206f776e657220697320746865207a65726f206164647265737345524332303a20617070726f766520746f20746865207a65726f206164647265737345524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e6365706f6c6c656e69756d2f65726963612f45726963612e736f6c2f6e6f742d6d656d6265722d6163636f756e7445524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e63654f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657245524332303a206275726e2066726f6d20746865207a65726f206164647265737345524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f2061646472657373706f6c6c656e69756d2f65726963612f5061757361626c652e736f6c2f70617573656445524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa265627a7a7231582045675ac486531765134445f859d748860461dff2d385b760d107af53f240279a64736f6c63430005100032')
}