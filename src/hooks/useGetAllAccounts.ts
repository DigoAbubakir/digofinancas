import { useQuery } from "react-query";
import { api } from "../services/api";

type Account = {
    id: number;
    amount: number;
    description: string;
    accountType: string;
    dashboard: boolean;
    bankType: string;
}

async function getAllAccounts(userId: number): Promise<Account[]> {
    const response = await api.get('v1/account', {
        params: {
            id: userId
        }
    })

    return response.data;
}

export function useAccounts(userId: number) {
    return useQuery(['account', userId], () => getAllAccounts(userId), {
        staleTime: 0,
        cacheTime: 0
    })
}