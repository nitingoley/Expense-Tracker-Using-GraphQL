import Transaction from "../model/transaction.model.js";
import User from "../model/user.model.js";

const transactionResolver = {
  Query: {
    transactions: async (_, __, context) => {
      try {
        if (!context.getUser()) throw new Error("Unauthorized");
        const userId = context.getUser()._id;

        return await Transaction.find({ userId });
      } catch (error) {
        console.error("Error getting transactions:", error);
        throw new Error("Error getting transactions");
      }
    },
    transaction: async (_, { transactionId }) => {
      try {
        return await Transaction.findById(transactionId);
      } catch (error) {
        console.error("Error getting transaction:", error);
        throw new Error("Error getting transaction");
      }
    },
    categoryStatistics: async (_, __, context) => {
      try {
        if (!context.getUser()) throw new Error("Unauthorized");
        const userId = context.getUser()._id;

        const transactions = await Transaction.find({ userId });
        const categoryStats = transactions.reduce((acc, tx) => {
          acc[tx.category] = (acc[tx.category] || 0) + tx.amount;
          return acc;
        }, {});

        return Object.entries(categoryStats).map(([category, totalAmount]) => ({
          category,
          totalAmount,
        }));
      } catch (error) {
        console.error("Error getting category statistics:", error);
        throw new Error("Error getting category statistics");
      }
    },
  },
  Mutation: {
    createTransaction: async (_, { input }, context) => {
      try {
        const user = context.getUser();
        if (!user) throw new Error("Unauthorized");

        const newTransaction = new Transaction({
          ...input,
          userId: user._id,
        });
        await newTransaction.save();
        return newTransaction;
      } catch (error) {
        console.error("Error creating transaction:", error);
        throw new Error("Error creating transaction");
      }
    },
    updateTransaction: async (_, { input }) => {
      try {
        return await Transaction.findByIdAndUpdate(input.transactionId, input, {
          new: true,
        });
      } catch (error) {
        console.error("Error updating transaction:", error);
        throw new Error("Error updating transaction");
      }
    },
    deleteTransaction: async (_, { transactionId }) => {
      try {
        return await Transaction.findByIdAndDelete(transactionId);
      } catch (error) {
        console.error("Error deleting transaction:", error);
        throw new Error("Error deleting transaction");
      }
    },
  },
};

export default transactionResolver;
