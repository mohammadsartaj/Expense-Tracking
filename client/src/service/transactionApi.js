import api from "./api.js";

export const getTotalBalance = async (username) => {
    return await api.get(`/transactions/getTotalBalance?username=${username}`,
        {
            withCredentials: true,

        }
    );
}


// export const getTransactions = async (username) => {
//     return await api.get(`/transactions/getTransactions?username=${username}`,
//         {
//             withCredentials: true,

//         }
//     );
// }


export const getTransactions = async (query) => {
    // Dynamically build the query string
    const queryString = new URLSearchParams(query).toString();

    // Send the API request with the constructed query string
    return await api.get(`/transactions/getTransactions?${queryString}`, {
        withCredentials: true,
    });
};
