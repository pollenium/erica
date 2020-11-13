import { Address, Uint256, Uint8 } from 'pollenium-buttercup';
import { Uu, Uish } from 'pollenium-uvaursi';
import { ContractReader, ContractReaderChildStruct } from 'pollenium-clover';
export declare class EricaReader extends ContractReader {
    constructor(struct: ContractReaderChildStruct);
    fetchOwner(): Promise<Address>;
    fetchName(): Promise<Uu>;
    fetchSymbol(): Promise<Uu>;
    fetchDecimals(): Promise<Uint8>;
    fetchTotalSupply(): Promise<Uint256>;
    fetchBalance(holderUish: Uish): Promise<Uint256>;
    fetchAllowance(struct: {
        holder: Uish;
        spender: Uish;
    }): Promise<Uint256>;
    fetchIsPaused(): Promise<boolean>;
    fetchIsMemberAccount(address: Uish): Promise<boolean>;
}
