SET QUOTED_IDENTIFIER ON 
GO
SET ANSI_NULLS ON 
GO
CREATE  PROCEDURE [dbo].[GetAccountSubAccountExists] (
	@InstallationId Varchar(100) = NULL,
	@AccountId Varchar(50) = NULL,
	@SubAccountId Varchar(50) = NULL
	)
AS
BEGIN
	SET NOCOUNT ON

	IF @SubAccountId IS NULL 
	BEGIN 
		-- HACEMOS LA BUSQUEDA DE LA CUENTA DONDE SUBCUENTA ES NULL
		SELECT A.[AccountId] 'accountId', 
					A.[SubAccountId] 'subaccountId'
				FROM dbo.[Account] A (NOLOCK) 
				WHERE A.[InstallationId] = @InstallationId 
					AND A.[AccountId] = @AccountId
					AND A.[SubAccountId] IS NULL
	END
	ELSE 
	BEGIN
		-- HACEMOS LA BUSQUEDA DE LA SUBCUENTA DONDE SUBCUENTA ES DIFERENTE DE NULLO
		SELECT A.[AccountId] 'accountId', 
					A.[SubAccountId] 'subaccountId'
				FROM dbo.[Account] A (NOLOCK) 
				WHERE A.[InstallationId] = @InstallationId 
					AND A.[AccountId] = @AccountId
					AND A.[SubAccountId] = @SubAccountId
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
