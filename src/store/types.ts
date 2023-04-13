export type Budget = {
	name: string;
	sum: number;
	date: number;
}

export type AppState = {
	budgets: Budget[];
	budgetNameInput: string;
	budgetSumInput: string;
	budgetDateInput: string;
	error: {
		code: number;
		message: string;
	};
}
