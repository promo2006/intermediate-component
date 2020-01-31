export interface ICleaner {
	Execute(executionCode: string): Promise<boolean>;
}
