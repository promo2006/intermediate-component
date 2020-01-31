SET QUOTED_IDENTIFIER ON 
GO
SET ANSI_NULLS ON 
GO
CREATE PROCEDURE [dbo].[GetPlatformAccounts] (
	@InstallationId Varchar(50) = NULL
	)
AS
BEGIN
	-- ESTE SERVICIO RETORNA TODAS LAS CUENTAS Y SUBCUENTAS ASOCIADAS A UNA PLATAFORMA

	SET NOCOUNT ON

	-- DECLARAMOS UNA VARIABLE PARA ALCENAR EL ESTADO DE LA CUENTA 
	DECLARE @ACCOUNT_STATUS BIT

	SET @ACCOUNT_STATUS = 0

	-- SETTEAMOS EL ESTADO DE LA PLATAFORMA SEGUN SU CAMPO ISACTIVATED
	SELECT @ACCOUNT_STATUS = P.[IsActivated]
		FROM [dbo].[Platform] P (NOLOCK)
		WHERE P.[InstallationId] = @InstallationId

	-- SI LA PLATAFORMA ESTA ACTIVA, HACEMOS LA BUSQUEDA DE CUENTAS
	IF (@ACCOUNT_STATUS = 1) 
	BEGIN
		SELECT A.[InstallationId] 'installationId',
				PD.[ClientName] 'clientName',
				A.[AccountId] 'accountId', 
				A.[SubAccountId] 'subAccountId',
				A.[User] 'user',
				A.[Token] 'token'
			FROM dbo.[Account] A (NOLOCK) 
			LEFT JOIN dbo.[PlatformData] PD (NOLOCK)
				ON PD.[PlatformHash] = A.[PlatformHash]
					AND PD.[InstallationId] = A.[InstallationId]
			WHERE A.[InstallationId] = @InstallationId
				AND A.[Enabled] = 1
	END
	-- SI LA PLATAFORMA NO ESTA ACTIVA, RETORNAMOS UN RESULT 0
	ELSE 
	BEGIN 
		SELECT 0 'result'
	END
	
	SET NOCOUNT OFF
END 
GO
SET QUOTED_IDENTIFIER OFF 
GO
SET ANSI_NULLS OFF 
GO

GO
