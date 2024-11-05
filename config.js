export const BASE_RPC = "https://rpc.zerion.io/v1/base";
export const ARB_RPC = "https://rpc.zerion.io/v1/arbitrum";
export const CHAIN_BASE_ID = 8453;
export const CHAIN_ARB_ID = 42161;
export const DEPOSIT_CONTRACT = "0xC5bf05cD32a14BFfb705Fb37a9d218895187376c";

// Contract ABI
export const contractAbi = [
  {
    constant: false,
    inputs: [],
    name: "depositETH",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];



export const SyncEthereumTx =(chainId)=> {return {
  query:
    "mutation SyncEthereumTx($chainId: Int!, $txHash: String!) {\n  syncEthereumTx(chainId: $chainId, txHash: $txHash)\n}",
  variables: {
    chainId: chainId,
    txHash: "",
  },
  operationName: "SyncEthereumTx",
};} 

export const HANA_URL =
  "https://hanafuda-backend-app-520478841386.us-central1.run.app/graphql";

export const gardenForCurrentUser = JSON.stringify({
  query: `query GetGardenForCurrentUser {
        getGardenForCurrentUser {
          id
          inviteCode
          gardenDepositCount
          gardenStatus {
            id
            activeEpoch
            growActionCount
            gardenRewardActionCount
          }
          gardenMilestoneRewardInfo {
            id
            gardenDepositCountWhenLastCalculated
            lastAcquiredAt
            createdAt
          }
          gardenMembers {
            id
            sub
            name
            iconPath
            depositCount
          }
        }
      }`,
  variables: {},
});

export const issueGrowAction = JSON.stringify({
  query: "mutation issueGrowAction {\n  issueGrowAction\n}",
  operationName: "issueGrowAction",
});

export const commitGrowAction = JSON.stringify({
  query: `mutation commitGrowAction {
        commitGrowAction
      }`,
  variables: {},
});
export const executeGardenRewardAction = JSON.stringify({
  query: `mutation executeGardenRewardAction($limit: Int!) {
  executeGardenRewardAction(limit: $limit) {
    data {
      cardId
      group
    }
    isNew
  }
}`,
  variables: {"limit":10}
});