import { connect } from "mongoose";
const dbConnect = async () => {
    try {
        const mongoDbConnection = await connect(process.env.CONNECTION_STRING);
        console.log(`MongoDB Connected At: ${mongoDbConnection.connection.host}`);
    } catch (error) {
        console.log(`DataBase Connection Failed ${error}`);
        process.exit(1);
    }
};

export default dbConnect;