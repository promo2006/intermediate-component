SET QUOTED_IDENTIFIER ON 
GO
SET ANSI_NULLS ON 
GO
CREATE PROCEDURE [dbo].[GetAccountUser] (
	@InstallationId Varchar(100) = NULL,
	@AccountId Varchar(50) = NULL,
	@SubAccountId Varchar(50) = NULL
	)
AS
BEGIN
	SET NOCOUNT ON

	-- SI LA SUBCUENTA ES DIFERENTE DE NULO
	IF (@SubAccountId IS NOT NULL)
	BEGIN
		SELECT A.[AccountId] 'accountId', 
				A.[SubAccountId] 'subaccountId',
				A.[User] 'user',
				A.[Token] 'token'
			FROM dbo.[Account] A (NOLOCK) 
			WHERE A.[InstallationId] = @InstallationId 
				AND A.[AccountId] = @AccountId
				AND A.[SubAccountId] = @SubAccountId
				AND A.[Enabled] = 1
	END

	-- SI LA SUBCUENTA ES NULO
	ELSE
	BEGIN
		SELECT A.[AccountId] 'accountId', 
				A.[SubAccountId] 'subaccountId',
				A.[User] 'user',
				A.[Token] 'token'
			FROM dbo.[Account] A (NOLOCK) 
			WHERE A.[InstallationId] = @InstallationId 
				AND A.[AccountId] = @AccountId
				AND A.[SubAccountId] IS NULL
				AND A.[Enabled] = 1
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
