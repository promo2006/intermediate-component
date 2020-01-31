SET QUOTED_IDENTIFIER ON 
GO
SET ANSI_NULLS ON 
GO
CREATE PROCEDURE [dbo].[ActivatePlatform]
(
	@PlatformHash			VARCHAR(100),
	@InstallationId			VARCHAR(50),
	@MacAddress				VARCHAR(50),
	@BaseBoardSerialNumber	VARCHAR(50),
	@User					VARCHAR(50),
	@Token					VARCHAR(50)
)
AS
BEGIN
	SET NOCOUNT ON

	-- DECLARAMOS UNA VARIABLE PARA ALMACENAR UN FLAG SI EXISTE EL PLATFORM HASH
	DECLARE @PLATFORMHASH_EXISTS BIT

	-- DECLARAMOS UNA VARIABLE PARA ALMACENAR UN FLAG SI EXISTE LA CUENTA PRINCIPAL O CUENTA DE ACTIVACION
	DECLARE @MAINACCOUNT VARCHAR(50)

	-- SETTEAMOS UN VALOR FALSE POR DEFECTO
	SET @PLATFORMHASH_EXISTS = 0

	-- SETTEAMOS UN VALOR FALSE POR DEFECTO
	SET @MAINACCOUNT = NULL

	-- VALIDAMOS QUE EL PLATFORMHASH ESTA REGISTRADO EN LA TABLA PLATFORM
	SELECT TOP 1 @PLATFORMHASH_EXISTS = CASE WHEN P.[PlatformHash] IS NOT NULL THEN 1 END
		FROM dbo.[Platform] P (NOLOCK) 
		WHERE P.[PlatformHash] = @PlatformHash 

	-- VALIDAMOS QUE EL USUARIO, TOKEN E INSTALLATIONID COINCIDEN CON LOS DE LA TABLA ACCOUNT
	SELECT TOP 1 @MAINACCOUNT = A.[AccountId] 
		FROM dbo.[Account] A (NOLOCK)
		WHERE A.[PlatformHash] = @PlatformHash 
			AND A.[User] = @User
			AND A.[Token] = @Token
			AND A.[AccountLevel] = 1 
			AND A.[InstallationId] IS NULL
			AND A.[SubAccountId] IS NULL

	-- VERIFICAMOS QUE AMBOS RESULTADOS EXISTAN
	IF @PLATFORMHASH_EXISTS = 1 AND @MAINACCOUNT IS NOT NULL
	BEGIN
		
		-- ACTUALIZAMOS LA PLATAFORMA CON SUS DATOS DE INFRAESTRUCTURA
		UPDATE [dbo].[Platform] 
			SET [InstallationId] = @InstallationId,
				[MacAddress] = @MacAddress,
				[BaseBoardSerialNumber] = @BaseBoardSerialNumber,
				[IsActivated] = 1,
				[ActivationDate] = GETUTCDATE(),
				[LastModifiedDate] = GETUTCDATE(),
				[LastModifiedByUserId] = @User,
				[TimeStamp] = GETUTCDATE()
			WHERE
				[PlatformHash] = @PlatformHash

		-- ACTUALIZAMOS LA COLUMNA INSTALLATIONID EN LA TABLA PLATFORMDATA
		UPDATE dbo.[PlatformData] 
			SET [InstallationId] = @InstallationId,
				[LastModifiedDate] = GETUTCDATE(),
				[LastModifiedByUserId] = @User,
				[TimeStamp] = GETUTCDATE()
			WHERE [PlatformHash] = @PlatformHash

		-- ACTUALIZAMOS LA COLUMNA INSTALLATIONID EN LA TABLA ACCOUNT PARA LA MAIN ACCOUNT
		UPDATE dbo.[Account] 
			SET [InstallationId] = @InstallationId,
				[LastModifiedDate] = GETUTCDATE(),
				[LastModifiedByUserId] = @User,
				[TimeStamp] = GETUTCDATE()
			WHERE [PlatformHash] = @PlatformHash
				AND [User] = @User
				AND [Token] = @Token
				AND [AccountLevel] = 1

		-- ACTUALIZAMOS LA COLUMNA INSTALLATIONID EN LA TABLA ACCOUNTBALANCE PARA LA MAIN ACCOUNT
		UPDATE dbo.[AccountBalance] 
			SET [InstallationId] = @InstallationId,
				[LastModifiedDate] = GETUTCDATE(),
				[LastModifiedByUserId] = @User,
				[TimeStamp] = GETUTCDATE()
			WHERE [PlatformHash] = @PlatformHash 
				AND [AccountId] = @MAINACCOUNT

		-- ACTUALIZAMOS LA COLUMNA INSTALLATIONID EN LA TABLA PLATFORMLICENSE
		UPDATE dbo.[PlatformLicense] 
			SET [InstallationId] = @InstallationId,
				[LastModifiedDate] = GETUTCDATE(),
				[LastModifiedByUserId] = @User,
				[TimeStamp] = GETUTCDATE()
			WHERE [PlatformHash] = @PlatformHash 

		-- SELECT 1 AS 'result'
		SELECT P.[InstallationId] 'installationId', 
				P.[MacAddress] 'macAddress', 
				P.[BaseBoardSerialNumber] 'baseBoardSerialNumber',
				P.[IsActivated] 'isActivated'
			FROM [dbo].[Platform] P
			WHERE P.[PlatformHash] = @PlatformHash 

	END
	ELSE
	BEGIN 
		CREATE TABLE #DUMMY ( A Int, B VarChar(42) )
		SELECT * FROM #DUMMY
	END

	SET NOCOUNT OFF
END 
GO
SET QUOTED_IDENTIFIER OFF 
GO
SET ANSI_NULLS OFF 
GO

GO
