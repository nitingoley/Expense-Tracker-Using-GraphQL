import { mergeResolvers } from "@graphql-tools/merge";

 
import transactionResolver from "./transction.resolvers.js";
import userResolver from "./user.resolvers.js";



const mergedResolvers = mergeResolvers([userResolver  ,transactionResolver])


export default mergedResolvers;