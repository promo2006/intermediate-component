export interface ISupervisor {
	Execute(executionCode: string): Promise<boolean>;
}
