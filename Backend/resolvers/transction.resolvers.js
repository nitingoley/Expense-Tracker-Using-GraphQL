import Transaction from "../model/transaction.model.js";
import User from "../model/user.model.js";

const transactionResolver = {
  Query: {
    transactions: async (_, _, context) => {
      try {
        if (!context.getUser()) throw new Error("Unauthorized");
        const userId = await context.getUser()._id;

        const transactions = await Transaction.find({ userId });
        return transactions;
      } catch (error) {
        console.error("Error getting transactions:", error);
        throw new Error("Error getting transactions");
      }
    },
    transaction: async (_, { transactionId }) => {
      try {
        const transaction = await Transaction.findById(transactionId);
        return transaction;
      } catch (error) {
        console.error("Error getting transactions:", error);
        throw new Error("Error getting transactions");
      }
    },
    Mutation: {
      createTransaction: async (_, { input }, context) => {
        try {
          const newTransaction = new Transaction({
            ...input,
            userId: context.getUser()._id,
          });
          await newTransaction.save();
          return newTransaction;
        } catch (error) {
          console.error("Error getting transactions:", error);
          throw new Error("Error getting transactions");
        }
      },
      updateTransaction: async (_, { input }) => {
        try {
          const updatedTransaction = await Transaction.findByIdAndUpdate(
            input.transactionId,
            input,
            {
              new: true,
            }
          );
          return updatedTransaction;
        } catch (error) {
          console.error("Error update transactions:", error);
          throw new Error("Error getting transactions");
        }
      },
      deleteTransaction: async (_, { transactionId }) => {
        try {
          const deleteTransaction = await Transaction.findByIdAndDelete(
            transactionId
          );
          return deleteTransaction;
        } catch (error) {
          console.error("Error delete transactions:", error);
          throw new Error("Error delete transactions");
        }
      },
    },
  },
};

export default transactionResolver;
