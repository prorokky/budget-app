export type Budget = {
	name: string;
}

export type AppState = {
	budgets: Budget[];
	budgetNameInput: string;
	budgetSumInput: string;
	budgetDateInput: string;
}
