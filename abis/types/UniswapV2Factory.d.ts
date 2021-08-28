/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides
} from 'ethers'
import { BytesLike } from '@ethersproject/bytes'
import { Listener, Provider } from '@ethersproject/providers'
import { FunctionFragment, EventFragment, Result } from '@ethersproject/abi'
import { TypedEventFilter, TypedEvent, TypedListener } from './commons'

interface UniswapV2FactoryInterface extends ethers.utils.Interface {
  functions: {
    'allPairs(uint256)': FunctionFragment
    'allPairsLength()': FunctionFragment
    'createPair(address,address)': FunctionFragment
    'feeTo()': FunctionFragment
    'feeToSetter()': FunctionFragment
    'getBytecode(address)': FunctionFragment
    'getPair(address,address)': FunctionFragment
    'migrator()': FunctionFragment
    'pairCodeHash()': FunctionFragment
    'setFeeTo(address)': FunctionFragment
    'setFeeToSetter(address)': FunctionFragment
    'setMigrator(address)': FunctionFragment
  }

  encodeFunctionData(functionFragment: 'allPairs', values: [BigNumberish]): string
  encodeFunctionData(functionFragment: 'allPairsLength', values?: undefined): string
  encodeFunctionData(functionFragment: 'createPair', values: [string, string]): string
  encodeFunctionData(functionFragment: 'feeTo', values?: undefined): string
  encodeFunctionData(functionFragment: 'feeToSetter', values?: undefined): string
  encodeFunctionData(functionFragment: 'getBytecode', values: [string]): string
  encodeFunctionData(functionFragment: 'getPair', values: [string, string]): string
  encodeFunctionData(functionFragment: 'migrator', values?: undefined): string
  encodeFunctionData(functionFragment: 'pairCodeHash', values?: undefined): string
  encodeFunctionData(functionFragment: 'setFeeTo', values: [string]): string
  encodeFunctionData(functionFragment: 'setFeeToSetter', values: [string]): string
  encodeFunctionData(functionFragment: 'setMigrator', values: [string]): string

  decodeFunctionResult(functionFragment: 'allPairs', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'allPairsLength', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'createPair', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'feeTo', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'feeToSetter', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'getBytecode', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'getPair', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'migrator', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'pairCodeHash', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'setFeeTo', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'setFeeToSetter', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'setMigrator', data: BytesLike): Result

  events: {
    'PairCreated(address,address,address,uint256)': EventFragment
  }

  getEvent(nameOrSignatureOrTopic: 'PairCreated'): EventFragment
}

export class UniswapV2Factory extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this

  listeners(eventName?: string): Array<Listener>
  off(eventName: string, listener: Listener): this
  on(eventName: string, listener: Listener): this
  once(eventName: string, listener: Listener): this
  removeListener(eventName: string, listener: Listener): this
  removeAllListeners(eventName?: string): this

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>

  interface: UniswapV2FactoryInterface

  functions: {
    allPairs(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>

    allPairsLength(overrides?: CallOverrides): Promise<[BigNumber]>

    createPair(
      tokenA: string,
      tokenB: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    feeTo(overrides?: CallOverrides): Promise<[string]>

    feeToSetter(overrides?: CallOverrides): Promise<[string]>

    getBytecode(_owner: string, overrides?: CallOverrides): Promise<[string]>

    getPair(arg0: string, arg1: string, overrides?: CallOverrides): Promise<[string]>

    migrator(overrides?: CallOverrides): Promise<[string]>

    pairCodeHash(overrides?: CallOverrides): Promise<[string]>

    setFeeTo(_feeTo: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>

    setFeeToSetter(
      _feeToSetter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    setMigrator(
      _migrator: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>
  }

  allPairs(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>

  allPairsLength(overrides?: CallOverrides): Promise<BigNumber>

  createPair(
    tokenA: string,
    tokenB: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  feeTo(overrides?: CallOverrides): Promise<string>

  feeToSetter(overrides?: CallOverrides): Promise<string>

  getBytecode(_owner: string, overrides?: CallOverrides): Promise<string>

  getPair(arg0: string, arg1: string, overrides?: CallOverrides): Promise<string>

  migrator(overrides?: CallOverrides): Promise<string>

  pairCodeHash(overrides?: CallOverrides): Promise<string>

  setFeeTo(_feeTo: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>

  setFeeToSetter(
    _feeToSetter: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  setMigrator(
    _migrator: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  callStatic: {
    allPairs(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>

    allPairsLength(overrides?: CallOverrides): Promise<BigNumber>

    createPair(tokenA: string, tokenB: string, overrides?: CallOverrides): Promise<string>

    feeTo(overrides?: CallOverrides): Promise<string>

    feeToSetter(overrides?: CallOverrides): Promise<string>

    getBytecode(_owner: string, overrides?: CallOverrides): Promise<string>

    getPair(arg0: string, arg1: string, overrides?: CallOverrides): Promise<string>

    migrator(overrides?: CallOverrides): Promise<string>

    pairCodeHash(overrides?: CallOverrides): Promise<string>

    setFeeTo(_feeTo: string, overrides?: CallOverrides): Promise<void>

    setFeeToSetter(_feeToSetter: string, overrides?: CallOverrides): Promise<void>

    setMigrator(_migrator: string, overrides?: CallOverrides): Promise<void>
  }

  filters: {
    PairCreated(
      token0?: string | null,
      token1?: string | null,
      pair?: null,
      undefined?: null
    ): TypedEventFilter<
      [string, string, string, BigNumber],
      { token0: string; token1: string; pair: string; arg3: BigNumber }
    >
  }

  estimateGas: {
    allPairs(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>

    allPairsLength(overrides?: CallOverrides): Promise<BigNumber>

    createPair(
      tokenA: string,
      tokenB: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    feeTo(overrides?: CallOverrides): Promise<BigNumber>

    feeToSetter(overrides?: CallOverrides): Promise<BigNumber>

    getBytecode(_owner: string, overrides?: CallOverrides): Promise<BigNumber>

    getPair(arg0: string, arg1: string, overrides?: CallOverrides): Promise<BigNumber>

    migrator(overrides?: CallOverrides): Promise<BigNumber>

    pairCodeHash(overrides?: CallOverrides): Promise<BigNumber>

    setFeeTo(_feeTo: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>

    setFeeToSetter(
      _feeToSetter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    setMigrator(_migrator: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>
  }

  populateTransaction: {
    allPairs(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>

    allPairsLength(overrides?: CallOverrides): Promise<PopulatedTransaction>

    createPair(
      tokenA: string,
      tokenB: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    feeTo(overrides?: CallOverrides): Promise<PopulatedTransaction>

    feeToSetter(overrides?: CallOverrides): Promise<PopulatedTransaction>

    getBytecode(_owner: string, overrides?: CallOverrides): Promise<PopulatedTransaction>

    getPair(arg0: string, arg1: string, overrides?: CallOverrides): Promise<PopulatedTransaction>

    migrator(overrides?: CallOverrides): Promise<PopulatedTransaction>

    pairCodeHash(overrides?: CallOverrides): Promise<PopulatedTransaction>

    setFeeTo(_feeTo: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>

    setFeeToSetter(
      _feeToSetter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    setMigrator(
      _migrator: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>
  }
}
