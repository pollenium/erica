import { Address, Uint256, Uint8 } from 'pollenium-buttercup';
import { Uu, Uish } from 'pollenium-uvaursi';
import { ContractReader, ContractReaderChildStruct, ContractReaderLog, ContractReaderFilterBlockRange } from 'pollenium-clover';
interface MintWithReasonLogValues {
    to: Address;
    value: Uint256;
    reason: Uu;
}
interface MintWithReasonLog extends ContractReaderLog<MintWithReasonLogValues> {
}
interface BurnWithReasonLogValues {
    from: Address;
    value: Uint256;
    reason: Uu;
}
interface BurnWithReasonLog extends ContractReaderLog<BurnWithReasonLogValues> {
}
interface TransferLogValues {
    from: Address;
    to: Address;
    value: Uint256;
}
interface TransferLog extends ContractReaderLog<TransferLogValues> {
}
interface SetIsPausedWithReasonLogValues {
    isPaused: boolean;
    reason: Uu;
}
interface SetIsPausedWithReasonLog extends ContractReaderLog<SetIsPausedWithReasonLogValues> {
}
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
    fetchMintWithReasonLogs(range: ContractReaderFilterBlockRange): Promise<MintWithReasonLog[]>;
    fetchBurnWithReasonLogs(range: ContractReaderFilterBlockRange): Promise<BurnWithReasonLog[]>;
    fetchTransferLogs(range: ContractReaderFilterBlockRange): Promise<TransferLog[]>;
    fetchSetIsPausedWithReasonLogs(range: ContractReaderFilterBlockRange): Promise<SetIsPausedWithReasonLog[]>;
}
export {};
