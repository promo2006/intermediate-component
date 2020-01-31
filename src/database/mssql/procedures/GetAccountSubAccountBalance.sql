SET QUOTED_IDENTIFIER ON 
GO
SET ANSI_NULLS ON 
GO
-- ESTA FUNCION RETORNA LOS SALDO DE UNA CUENTA O SUBCUENTA DE TODOS LOS PRODUCTOS O UNO ESPECIFICO
CREATE  PROCEDURE [dbo].[GetAccountSubAccountBalance] (
	@InstallationId Varchar(100) = NULL,
	@AccountId Varchar(50) = NULL,
	@SubAccountId Varchar(50) = NULL,
	@SystemService Varchar(50) = NULL,
	@SearchType Varchar(50) = NULL
	)
AS
BEGIN
	SET NOCOUNT ON
	-- SI @AccountId LLEGA COMO NULL SE BUSCA SOBRE TODAS LAS CUENTAS, CASO CONTRARIO UNICAMENTE SOBRE EL VALOR RECIBIDO
	-- SI @SubAccountId LLEGA COMO NULL SE BUSCA SOBRE TODAS LAS SUBCUENTAS, CASO CONTRARIO UNICAMENTE SOBRE EL VALOR RECIBIDO
	-- SI @SystemService LLEGA COMO NULL SE BUSCA SOBRE TODOS LOS PRODUCTOS, CASO CONTRARIO UNICAMENTE SOBRE EL VALOR RECIBIDO
	-- LA VARIABLE @SearchType NOS INDICA SI VAMOS A BUSCAR CUENTA(S) O SUBCUENTA(S)

	IF @SearchType = 'CTA'
	BEGIN 
		-- HACEMOS LA BUSQUEDA DE LA CUENTA DONDE SUBCUENTA ES NULL
		SELECT AB.[AccountId] 'accountId', 
				AB.[SubAccountId] 'subaccountId',
				AB.[SystemService] 'systemService',
				AB.[CountableBalance] 'countableBalance',
				AB.[AvailableBalance] 'availableBalance',
				AB.[RetainedBalance] 'retainedBalance'
			FROM dbo.[AccountBalance] AB (NOLOCK) 
			WHERE AB.[InstallationId] = @InstallationId 
				AND AB.[AccountId] = CASE WHEN @AccountId IS NULL THEN AB.[AccountId] ELSE @AccountId END
				AND AB.[SubAccountId] IS NULL
				AND AB.[SystemService] = CASE WHEN @SystemService IS NULL THEN AB.[SystemService] ELSE @SystemService END
	END
	ELSE 
	BEGIN
		-- HACEMOS LA BUSQUEDA DE LA SUBCUENTA DONDE SUBCUENTA ES DIFERENTE DE NULO
		SELECT AB.[AccountId] 'accountId', 
				AB.[SubAccountId] 'subaccountId',
				AB.[SystemService] 'systemService',
				AB.[CountableBalance] 'countableBalance',
				AB.[AvailableBalance] 'availableBalance',
				AB.[RetainedBalance] 'retainedBalance'
			FROM dbo.[AccountBalance] AB (NOLOCK) 
			WHERE AB.[InstallationId] = @InstallationId 
				AND AB.[AccountId] = CASE WHEN @AccountId IS NULL THEN AB.[AccountId] ELSE @AccountId END
				AND AB.[SubAccountId] = CASE WHEN @SubAccountId IS NULL THEN AB.[SubAccountId] ELSE @SubAccountId END
				AND AB.[SystemService] = CASE WHEN @SystemService IS NULL THEN AB.[SystemService] ELSE @SystemService END
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
