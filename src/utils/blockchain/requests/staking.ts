import { getContract } from 'utils/blockchain/contract-helpers';
import { contractWriter } from 'utils/sovryn/contract-writer';
import { contractReader } from 'utils/sovryn/contract-reader';

export function staking_approve(weiAmount: string) {
  return contractWriter.send('SOV_token', 'approve', [
    getContract('staking').address,
    weiAmount,
  ]);
}

export function staking_allowance(account: string) {
  return contractReader.call('SOV_token', 'allowance', [
    account,
    getContract('staking').address,
  ]);
}

export function staking_getPriorUserStakeByDate(
  address: string,
  date: number,
  blockNumber: number,
) {
  return contractReader.call('staking', 'getPriorUserStakeByDate', [
    address,
    date,
    blockNumber,
  ]);
}

export function staking_withdrawFee(
  tokenAddress: string,
  processedCheckpoints: string,
  account: string,
) {
  return contractWriter.send('feeSharingProxy_old', 'withdraw', [
    tokenAddress,
    processedCheckpoints,
    account,
  ]);
}
export function staking_processedCheckpoints(
  account: string,
  tokenAddress: string,
) {
  return contractReader.call('feeSharingProxy_old', 'processedCheckpoints', [
    account,
    tokenAddress,
  ]);
}
export function staking_numTokenCheckpoints(tokenAddress: string) {
  return contractReader.call('feeSharingProxy_old', 'numTokenCheckpoints', [
    tokenAddress,
  ]);
}
