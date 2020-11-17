import { Uintable } from 'pollenium-buttercup';
import { Uish } from 'pollenium-uvaursi';
import { ContractWriter, ContractWriterChildStruct, StateChange } from 'pollenium-clover';
export declare class EricaWriter extends ContractWriter {
    constructor(struct: ContractWriterChildStruct);
    setOwner(address: Uish): Promise<StateChange>;
    setName(name: Uish): Promise<StateChange>;
    setSymbol(symbol: Uish): Promise<StateChange>;
    mint(struct: {
        to: Uish;
        amount: Uintable;
        reason: Uish;
    }): Promise<StateChange>;
    burn(struct: {
        from: Uish;
        amount: Uintable;
        reason: Uish;
    }): Promise<StateChange>;
    transfer(struct: {
        to: Uish;
        amount: Uintable;
    }): Promise<StateChange>;
    setAllowance(struct: {
        spender: Uish;
        amount: Uintable;
    }): Promise<StateChange>;
    setIsMemberAccount(address: Uish, isMemberAccount: boolean): Promise<StateChange>;
    setIsPaused(isPaused: boolean, reason: Uish): Promise<StateChange>;
}
