export type quizAction = {
	type: string;
	payload?: any;
};

export type quizOption = {
	value: string;
	isCorrect: boolean;
};

export type attemptedQuizzes = {
	quizCategory: string;
	quizScore: number;
	quizPass: boolean;
	quizId: string;
};

export type quizReducerState = {
    currQuestion: number;
    selectedOptions: quizOption[],
    totalScore: number,
    quizzesAttempted: attemptedQuizzes[],
    quizStarted: boolean,
}

export type quizContextType = {
    quizState: quizReducerState;
    quizDispatch: (action: quizAction) => void;
}


export type quizSingleDataType = {
	_id: number;
	heading: string;
	desc: string;
	src: string;
	questions: {
		question: string;
		options: {
			value: string;
			isCorrect: boolean;
		}[];
	}[];
}


export type quizCategoryType= {
    cardData : {
		_id: number;
		heading: string;
		desc: string;
		src: string;
		questions: {
			question: string;
			options: {
				value: string;
				isCorrect: boolean;
			}[];
    	}[]
	};
}


export type quizDataType = quizSingleDataType[]

