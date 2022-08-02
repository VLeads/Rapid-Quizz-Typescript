export type userType = {
    uid: string;
    firstName: string;
    lastName: string;
    email: string;
    quizzesAttempted: any;
    totalScore: number;
}

export type authContextType = {
    user: userType;
    authLoading: boolean;
    setUser: any;
    setAuthLoading: React.Dispatch<React.SetStateAction<boolean>>;
}