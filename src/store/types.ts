export type Budget = {
	name: string;
	sum: number;
	spendSum: number;
	date: number;
}

export type OperationInput = {
	budgetNameInput: string;
	catgoryNameInput: string;
	sumAmountInput: string;
	dateInput: string;
}

export type AppState = {
	budgets: Budget[];
	operationInput: OperationInput;
	budgetNameInput: string;
	budgetSumInput: string;
	budgetDateInput: string;
	budgetNameEdit: string;
	budgetSumEdit: string;
	budgetDateEdit: string;
	error: {
		code: number;
		message: string;
	};
}

// eslint-disable-next-line no-shadow
export enum Months {
	'January' = 0,
	'February' = 1,
	'March' = 2,
	'April' = 3,
	'May' = 4,
	'June' = 5,
	'July' = 6,
	'August' = 7,
	'September' = 8,
	'October' = 9,
	'November' = 10,
	'December' = 11,
}
