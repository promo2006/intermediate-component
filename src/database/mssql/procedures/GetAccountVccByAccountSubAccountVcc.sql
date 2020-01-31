SET QUOTED_IDENTIFIER ON 
GO
SET ANSI_NULLS ON 
GO
create PROCEDURE [dbo].[GetAccountVccByAccountSubAccountVcc] (
	@InstallationId Varchar(100) = NULL,
	@AccountId Varchar(50) = NULL,
	@SubAccountId Varchar(50) = NULL
	)
AS
BEGIN
	SET NOCOUNT ON

	-- HACEMOS LA BUSQUEDA DEL VCC
	SELECT AV.[AccountId] 'accountId', 
				AV.[SubAccountId] 'subaccountId',
				AV.[VCC] 'vcc'
			FROM dbo.[AccountVCC] AV (NOLOCK) 
			WHERE AV.[InstallationId] = @InstallationId 
				AND AV.[AccountId] = @AccountId
				AND AV.[SubAccountId] = @SubAccountId

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
