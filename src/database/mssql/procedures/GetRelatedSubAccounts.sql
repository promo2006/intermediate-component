SET QUOTED_IDENTIFIER ON 
GO
SET ANSI_NULLS ON 
GO
CREATE PROCEDURE [dbo].[GetRelatedSubAccounts] (
	@InstallationId Varchar(100) = NULL
	--@UserId Varchar(50) = NULL
	)
AS
BEGIN
	SET NOCOUNT ON

	-- DECLARAMOS UNA VARIABLE PARA ALCENAR EL NIVEL DE LA CUENTA 
	DECLARE @ACCOUNT_LEVEL INT

	SET @ACCOUNT_LEVEL = 1

	/*
	-- RECUPERAMOS EL NIVEL DE LA CUENTA
	SELECT @ACCOUNT_LEVEL = A.[AccountLevel]
		FROM Account A (NOLOCK)
	WHERE A.[AccountId] = @AccountId
		AND [Enabled] = 1
	*/
	
	-- SI EL NIVEL DE LA CUENTA ES 1, SE REFIERE AL DUENO DE LA PLATAFORMA
	IF (@ACCOUNT_LEVEL = 1)
	BEGIN 

		-- BUSCAMOS TODAS LAS SUBCUENTAS ENABLED 1 GUARDADAS
		SELECT A.[InstallationId] 'installationId',
			   A.[AccountId] 'accountId',
			   A.[SubAccountId] 'subAccountId',
			   A.[User] 'user',
			   A.[Token] 'token'
		FROM Account A (NOLOCK)
		WHERE A.[InstallationId] = @InstallationId
			AND A.[SubAccountId] IS NOT NULL 
			AND A.[Enabled] = 1
		ORDER BY A.[AccountId] ASC

	END
	ELSE
	BEGIN 
		
		-- BUSCAMOS TODAS LAS SUBCUENTAS RELACIONADAS A LA CUENTA 
		SELECT A.[InstallationId] 'installationId',
			   A.[AccountId] 'accountId',
			   A.[SubAccountId] 'subAccountId',
			   A.[User] 'user',
			   A.[Token] 'token'
		FROM Account A (NOLOCK)
		WHERE A.[InstallationId] = @InstallationId
			AND A.[Enabled] = 1
			--AND A.[AccountOwner] = @AccountId 
		ORDER BY A.[AccountId] ASC

	END
	
	SET NOCOUNT OFF
END 
GO
SET QUOTED_IDENTIFIER OFF 
GO
SET ANSI_NULLS OFF 
GO

GO
