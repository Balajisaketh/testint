import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  friends: [],
  dividedAmount: 0,
  amount:0,
  orders:[]
};

const friendSlice = createSlice({
  name: 'friend',
  initialState,
  reducers: {
    setAmount: (state, action) => {
        console.log("i am entered in amoint",action.payload)
        state.amount = action.payload;
      },
    addFriend: (state, action) => {
        console.log("i am from add frnd",action.payload);
        
      state.friends = [...state.friends, action.payload];
    },
    addOrderinfo: (state, action) => {
        console.log("i am add orders redux",action.payload)
        const fridns=action.payload.nooffrnds;
        const amnt=action.payload.amountvalue;
        const billdata=action.payload.billname
        console.log("i am maount",amnt,fridns);
        const amountPerFriend = (amnt/ fridns.length).toFixed(2)
        console.log("i am divided",amountPerFriend,billdata)
        const newOrder = {
            id: new Date().getTime(),
            // friends: fridns.map((friend, index) => ({
            //   ...friend,
            //   amount: amountPerFriend,
            // })),
            friends:fridns,
            amount:amountPerFriend,
            totalAmount: amnt,
            Billdetails:billdata
          };
          console.log(newOrder,"i am here new order")
          state.orders.push(newOrder)
        
          console.log(state.orders.length,"hurey")
          state.friends=[];
         
    },
    clearFriends: (state) => {
      state.friends = [];
      state.dividedAmount = 0;
    },
    clearAndDivideAmount: (state, action) => {
      const dividedAmount = parseFloat(state.amount) / state.friends.length;
    console.log("i am divide amount",dividedAmount)
      state.friends = state.friends.map((friend, index) => ({
        ...friend,
        amount: parseFloat(dividedAmount).toFixed(2),
        id: index,
      }));

      state.dividedAmount = dividedAmount;
    },
  },
});

export const { addFriend, clearFriends, clearAndDivideAmount,setAmount,addOrderinfo } = friendSlice.actions;
export default friendSlice.reducer;