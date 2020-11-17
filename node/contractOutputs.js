"use strict";
exports.__esModule = true;
exports.erica = void 0;
var pollenium_uvaursi_1 = require("pollenium-uvaursi");
exports.erica = {
    abiJson: '[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"},{"indexed":false,"internalType":"bytes","name":"reason","type":"bytes"}],"name":"BurnWithReason","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"},{"indexed":false,"internalType":"bytes","name":"reason","type":"bytes"}],"name":"MintWithReason","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"isPaused","type":"bool"},{"indexed":false,"internalType":"bytes","name":"reason","type":"bytes"}],"name":"SetIsPausedWithReason","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"uint256","name":"_value","type":"uint256"},{"internalType":"bytes","name":"_reason","type":"bytes"}],"name":"burn","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"isMemberAccount","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"isOwner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"isPaused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_value","type":"uint256"},{"internalType":"bytes","name":"_reason","type":"bytes"}],"name":"mint","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_memberAccount","type":"address"},{"internalType":"bool","name":"_isMemberAccount","type":"bool"}],"name":"setIsMemberAccount","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bool","name":"_isPaused","type":"bool"},{"internalType":"bytes","name":"_reason","type":"bytes"}],"name":"setIsPaused","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"string","name":"_name","type":"string"}],"name":"setName","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"string","name":"_symbol","type":"string"}],"name":"setSymbol","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]',
    bytecode: pollenium_uvaursi_1.Uu.fromHexish('6080604052600060075561001a6001600160e01b0361006b16565b600380546001600160a01b0319166001600160a01b0392831617908190556040519116906000907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a361006f565b3390565b611afb8061007e6000396000f3fe608060405234801561001057600080fd5b506004361061014d5760003560e01c80638da5cb5b116100c3578063b187bd261161007c578063b187bd261461059c578063b641be03146105a4578063b84c8246146105ca578063c47f00271461066e578063dd62ed3e14610712578063f2fde38b146107405761014d565b80638da5cb5b146104575780638f32d59b1461047b57806394d008ef1461048357806395d89b411461053c578063a457c2d714610544578063a9059cbb146105705761014d565b8063313ce56711610115578063313ce5671461028f578063395093511461029757806344d17187146102c35780634ad554211461037c57806370a0823114610429578063715018a61461044f5761014d565b80630657b57b1461015257806306fdde0314610182578063095ea7b3146101ff57806318160ddd1461023f57806323b872dd14610259575b600080fd5b6101806004803603604081101561016857600080fd5b506001600160a01b0381351690602001351515610766565b005b61018a6107d8565b6040805160208082528351818301528351919283929083019185019080838360005b838110156101c45781810151838201526020016101ac565b50505050905090810190601f1680156101f15780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61022b6004803603604081101561021557600080fd5b506001600160a01b038135169060200135610866565b604080519115158252519081900360200190f35b610247610883565b60408051918252519081900360200190f35b61022b6004803603606081101561026f57600080fd5b506001600160a01b0381358116916020810135909116906040013561088a565b6102476109a7565b61022b600480360360408110156102ad57600080fd5b506001600160a01b0381351690602001356109ad565b610180600480360360608110156102d957600080fd5b6001600160a01b0382351691602081013591810190606081016040820135600160201b81111561030857600080fd5b82018360208201111561031a57600080fd5b803590602001918460018302840111600160201b8311171561033b57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610a06945050505050565b6101806004803603604081101561039257600080fd5b813515159190810190604081016020820135600160201b8111156103b557600080fd5b8201836020820111156103c757600080fd5b803590602001918460018302840111600160201b831117156103e857600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610b17945050505050565b6102476004803603602081101561043f57600080fd5b50356001600160a01b0316610c21565b610180610c3c565b61045f610ccd565b604080516001600160a01b039092168252519081900360200190f35b61022b610cdc565b6101806004803603606081101561049957600080fd5b6001600160a01b0382351691602081013591810190606081016040820135600160201b8111156104c857600080fd5b8201836020820111156104da57600080fd5b803590602001918460018302840111600160201b831117156104fb57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610d02945050505050565b61018a610e72565b61022b6004803603604081101561055a57600080fd5b506001600160a01b038135169060200135610ecd565b61022b6004803603604081101561058657600080fd5b506001600160a01b038135169060200135610f3b565b61022b61104b565b61022b600480360360208110156105ba57600080fd5b50356001600160a01b031661105b565b610180600480360360208110156105e057600080fd5b810190602081018135600160201b8111156105fa57600080fd5b82018360208201111561060c57600080fd5b803590602001918460018302840111600160201b8311171561062d57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550611070945050505050565b6101806004803603602081101561068457600080fd5b810190602081018135600160201b81111561069e57600080fd5b8201836020820111156106b057600080fd5b803590602001918460018302840111600160201b831117156106d157600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506110ce945050505050565b6102476004803603604081101561072857600080fd5b506001600160a01b0381358116916020013516611128565b6101806004803603602081101561075657600080fd5b50356001600160a01b0316611153565b61076e610cdc565b6107ad576040805162461bcd60e51b815260206004820181905260248201526000805160206119f5833981519152604482015290519081900360640190fd5b6001600160a01b03919091166000908152600460205260409020805460ff1916911515919091179055565b6005805460408051602060026001851615610100026000190190941693909304601f8101849004840282018401909252818152929183018282801561085e5780601f106108335761010080835404028352916020019161085e565b820191906000526020600020905b81548152906001019060200180831161084157829003601f168201915b505050505081565b600061087a6108736111a6565b84846111aa565b50600192915050565b6002545b90565b600354600090600160a01b900460ff16156108d65760405162461bcd60e51b8152600401808060200182810382526023815260200180611a7f6023913960400191505060405180910390fd5b6001600160a01b038416600090815260046020526040902054849060ff1615156001146109345760405162461bcd60e51b815260040180806020018281038252602c8152602001806119a1602c913960400191505060405180910390fd5b6001600160a01b038416600090815260046020526040902054849060ff1615156001146109925760405162461bcd60e51b815260040180806020018281038252602c8152602001806119a1602c913960400191505060405180910390fd5b61099d868686611296565b9695505050505050565b60075481565b600061087a6109ba6111a6565b84610a0185600160006109cb6111a6565b6001600160a01b03908116825260208083019390935260409182016000908120918c16815292529020549063ffffffff61131e16565b6111aa565b610a0e610cdc565b610a4d576040805162461bcd60e51b815260206004820181905260248201526000805160206119f5833981519152604482015290519081900360640190fd5b610a57838361137f565b7fdcc4a152f3d9a2cb9d615a22f67efa251821ee904d1bd41a93b47b17d86c068283838360405180846001600160a01b03166001600160a01b0316815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610ad6578181015183820152602001610abe565b50505050905090810190601f168015610b035780820380516001836020036101000a031916815260200191505b5094505050505060405180910390a1505050565b610b1f610cdc565b610b5e576040805162461bcd60e51b815260206004820181905260248201526000805160206119f5833981519152604482015290519081900360640190fd5b81600360146101000a81548160ff0219169083151502179055507fdcd22eb36869fa5319805117459cddcdfa6c102a843cd82b290164646e41fce38282604051808315151515815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610be2578181015183820152602001610bca565b50505050905090810190601f168015610c0f5780820380516001836020036101000a031916815260200191505b50935050505060405180910390a15050565b6001600160a01b031660009081526020819052604090205490565b610c44610cdc565b610c83576040805162461bcd60e51b815260206004820181905260248201526000805160206119f5833981519152604482015290519081900360640190fd5b6003546040516000916001600160a01b0316907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600380546001600160a01b0319169055565b6003546001600160a01b031690565b6003546000906001600160a01b0316610cf36111a6565b6001600160a01b031614905090565b610d0a610cdc565b610d49576040805162461bcd60e51b815260206004820181905260248201526000805160206119f5833981519152604482015290519081900360640190fd5b6001600160a01b038316600090815260046020526040902054839060ff161515600114610da75760405162461bcd60e51b815260040180806020018281038252602c8152602001806119a1602c913960400191505060405180910390fd5b610db1848461147b565b7f9400187daa1b6ff5f47025108711227eb151f2397242352597852a8dd727a34d84848460405180846001600160a01b03166001600160a01b0316815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610e30578181015183820152602001610e18565b50505050905090810190601f168015610e5d5780820380516001836020036101000a031916815260200191505b5094505050505060405180910390a150505050565b6006805460408051602060026001851615610100026000190190941693909304601f8101849004840282018401909252818152929183018282801561085e5780601f106108335761010080835404028352916020019161085e565b600061087a610eda6111a6565b84610a0185604051806060016040528060258152602001611aa26025913960016000610f046111a6565b6001600160a01b03908116825260208083019390935260409182016000908120918d1681529252902054919063ffffffff61156b16565b600354600090600160a01b900460ff1615610f875760405162461bcd60e51b8152600401808060200182810382526023815260200180611a7f6023913960400191505060405180910390fd5b3360008181526004602052604090205460ff161515600114610fda5760405162461bcd60e51b815260040180806020018281038252602c8152602001806119a1602c913960400191505060405180910390fd5b6001600160a01b038416600090815260046020526040902054849060ff1615156001146110385760405162461bcd60e51b815260040180806020018281038252602c8152602001806119a1602c913960400191505060405180910390fd5b6110428585611602565b95945050505050565b600354600160a01b900460ff1681565b60046020526000908152604090205460ff1681565b611078610cdc565b6110b7576040805162461bcd60e51b815260206004820181905260248201526000805160206119f5833981519152604482015290519081900360640190fd5b80516110ca906006906020840190611855565b5050565b6110d6610cdc565b611115576040805162461bcd60e51b815260206004820181905260248201526000805160206119f5833981519152604482015290519081900360640190fd5b80516110ca906005906020840190611855565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b61115b610cdc565b61119a576040805162461bcd60e51b815260206004820181905260248201526000805160206119f5833981519152604482015290519081900360640190fd5b6111a381611616565b50565b3390565b6001600160a01b0383166111ef5760405162461bcd60e51b8152600401808060200182810382526024815260200180611a5b6024913960400191505060405180910390fd5b6001600160a01b0382166112345760405162461bcd60e51b81526004018080602001828103825260228152602001806119596022913960400191505060405180910390fd5b6001600160a01b03808416600081815260016020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b60006112a38484846116b7565b611314846112af6111a6565b610a01856040518060600160405280602881526020016119cd602891396001600160a01b038a166000908152600160205260408120906112ed6111a6565b6001600160a01b03168152602081019190915260400160002054919063ffffffff61156b16565b5060019392505050565b600082820183811015611378576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b6001600160a01b0382166113c45760405162461bcd60e51b8152600401808060200182810382526021815260200180611a156021913960400191505060405180910390fd5b61140781604051806060016040528060228152602001611911602291396001600160a01b038516600090815260208190526040902054919063ffffffff61156b16565b6001600160a01b038316600090815260208190526040902055600254611433908263ffffffff61181316565b6002556040805182815290516000916001600160a01b038516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9181900360200190a35050565b6001600160a01b0382166114d6576040805162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b6002546114e9908263ffffffff61131e16565b6002556001600160a01b038216600090815260208190526040902054611515908263ffffffff61131e16565b6001600160a01b0383166000818152602081815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b600081848411156115fa5760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b838110156115bf5781810151838201526020016115a7565b50505050905090810190601f1680156115ec5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b600061087a61160f6111a6565b84846116b7565b6001600160a01b03811661165b5760405162461bcd60e51b81526004018080602001828103825260268152602001806119336026913960400191505060405180910390fd5b6003546040516001600160a01b038084169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3600380546001600160a01b0319166001600160a01b0392909216919091179055565b6001600160a01b0383166116fc5760405162461bcd60e51b8152600401808060200182810382526025815260200180611a366025913960400191505060405180910390fd5b6001600160a01b0382166117415760405162461bcd60e51b81526004018080602001828103825260238152602001806118ee6023913960400191505060405180910390fd5b6117848160405180606001604052806026815260200161197b602691396001600160a01b038616600090815260208190526040902054919063ffffffff61156b16565b6001600160a01b0380851660009081526020819052604080822093909355908416815220546117b9908263ffffffff61131e16565b6001600160a01b038084166000818152602081815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b600061137883836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f77000081525061156b565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061189657805160ff19168380011785556118c3565b828001600101855582156118c3579182015b828111156118c35782518255916020019190600101906118a8565b506118cf9291506118d3565b5090565b61088791905b808211156118cf57600081556001016118d956fe45524332303a207472616e7366657220746f20746865207a65726f206164647265737345524332303a206275726e20616d6f756e7420657863656564732062616c616e63654f776e61626c653a206e6577206f776e657220697320746865207a65726f206164647265737345524332303a20617070726f766520746f20746865207a65726f206164647265737345524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e6365706f6c6c656e69756d2f65726963612f45726963612e736f6c2f6e6f742d6d656d6265722d6163636f756e7445524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e63654f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657245524332303a206275726e2066726f6d20746865207a65726f206164647265737345524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f2061646472657373706f6c6c656e69756d2f65726963612f5061757361626c652e736f6c2f70617573656445524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa265627a7a7231582027fe6280a0a271abcd470ab5c01cfbb147f8ce9a6e6c654512ad77e86771fa9664736f6c63430005100032')
};
