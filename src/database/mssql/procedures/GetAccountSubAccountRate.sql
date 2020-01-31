SET QUOTED_IDENTIFIER ON 
GO
SET ANSI_NULLS ON 
GO
-- ESTA FUNCION RETORNA LAS TARIFAS SETTEADAS DE UNA CUENTA O SUBCUENTA
CREATE  PROCEDURE [dbo].[GetAccountSubAccountRate] (
	@InstallationId Varchar(100) = NULL,
	@AccountId Varchar(50) = NULL,
	@SubAccountId Varchar(50) = NULL,
	@SearchType Varchar(50) = NULL
	)
AS
BEGIN
	SET NOCOUNT ON

	IF @SearchType = 'CTA'
	BEGIN 
		-- HACEMOS LA BUSQUEDA DE LA CUENTA DONDE SUBCUENTA ES NULL
		SELECT A.[AccountId] 'accountId', 
				A.[SubAccountId] 'subaccountId',
				A.[TranscriptionRatePerHour] 'transcriptionRatePerHour',
				A.[TranscriptionRatePerSecond] 'transcriptionRatePerSecond',
				A.[SemanticAnalysisRatePerTransaction] 'semanticAnalysisRatePerTransaction',
				A.[CognitiveAnalysisRatePerTransaction] 'cognitiveAnalysisRatePerTransaction'
			FROM dbo.[Account] A (NOLOCK)
			WHERE A.[InstallationId] = @InstallationId
				AND A.[AccountId] = CASE WHEN @AccountId IS NULL THEN A.[AccountId] ELSE @AccountId END
				AND A.[SubAccountId] IS NULL
	END
	ELSE 
	BEGIN
		-- HACEMOS LA BUSQUEDA DE LA SUBCUENTA DONDE SUBCUENTA ES DIFERENTE DE NULO
		SELECT A.[AccountId] 'accountId', 
				A.[SubAccountId] 'subaccountId',
				A.[TranscriptionRatePerHour] 'transcriptionRatePerHour',
				A.[TranscriptionRatePerSecond] 'transcriptionRatePerSecond',
				A.[SemanticAnalysisRatePerTransaction] 'semanticAnalysisRatePerTransaction',
				A.[CognitiveAnalysisRatePerTransaction] 'cognitiveAnalysisRatePerTransaction'
			FROM dbo.[Account] A (NOLOCK)
			WHERE A.[InstallationId] = @InstallationId
				AND A.[AccountId] = CASE WHEN @AccountId IS NULL THEN A.[AccountId] ELSE @AccountId END
				AND A.[SubAccountId] = CASE WHEN @SubAccountId IS NULL THEN A.[SubAccountId] ELSE @SubAccountId END
				
	END

	--CREATE TABLE #DUMMY ( a Int, b VarChar(42) )
	--SELECT * FROM #DUMMY
	
	SET NOCOUNT OFF
END 
GO
SET QUOTED_IDENTIFIER OFF 
GO
SET ANSI_NULLS OFF 
GO

GO
