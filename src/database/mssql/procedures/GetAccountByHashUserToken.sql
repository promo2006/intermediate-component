SET QUOTED_IDENTIFIER ON 
GO
SET ANSI_NULLS ON 
GO
CREATE PROCEDURE [dbo].[GetAccountByHashUserToken] (
	@PlatformHash Varchar(100) = NULL,
	@User Varchar(50) = NULL,
	@Token Varchar(50) = NULL
	)
AS
BEGIN
	SET NOCOUNT ON

	-- HACEMOS LA BUSQUEDA DE CUENTA
	SELECT A.[AccountId] 'accountId', 
				A.[SubAccountId] 'subaccountId',
				A.[User] 'user',
				A.[Token] 'token', 
				A.[AccountLevel] 'level'
			FROM dbo.[Account] A (NOLOCK) 
			WHERE A.[PlatformHash] = @PlatformHash 
				AND A.[User] = @User
				AND A.[Token] = @Token
				AND A.[Enabled] = 1

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
