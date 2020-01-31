SET QUOTED_IDENTIFIER ON 
GO
SET ANSI_NULLS ON 
GO
CREATE PROCEDURE [dbo].[AddAccountVCCProduct] (
	@InstallationId Varchar(100) = NULL,
	@AccountId Varchar(50) = NULL,
	@SubAccountId Varchar(50) = NULL,
	@VCC Varchar(50) = NULL,
	@Product Varchar(50) = NULL
	)
AS
BEGIN

	-- DECLARAMOS UNA VARIABLE PARA DETERMINAR SI EXISTEN LICENCIAS DISPONIBLES
	DECLARE @AVAILABLE_LICENSE BIT

	-- ASIGNAMOS FALSE POR DEFECTO
	SET @AVAILABLE_LICENSE = 0

	-- ACTUALIZAMOS EL VALOR SEGUN TENGAMOS LICENCIAS DISPONIBLES O NO
	SELECT @AVAILABLE_LICENSE = CASE WHEN PL.[TotalLicense] > PL.[AssignedLicense] THEN  1 END 
		FROM dbo.[PlatformLicense] PL 
		WHERE PL.[InstallationId] = @InstallationId 
			AND PL.[Product] = @Product

	-- SI TENEMOS LICENCIAS DISPONIBLES CONTINUAMOS
	IF @AVAILABLE_LICENSE = 1
	BEGIN
		-- DECLARAMOS UNA VARIABLE PARA PARA ALMACENAR EL USUARIO DE LA CUENTA
		DECLARE @ACCOUNT_USER VARCHAR(50)

		-- DECLARAMOS UNA VARIABLE PARA PARA ALMACENAR LA FECHA DE EXPIRACION DE LA LICENCIA DE PRODUCTO
		DECLARE @PLATFORM_LICENSE_EXPIRATION_DATE DATE 

		-- RECUPERAMOS LA FECHA DE EXPIRACION DE LA CUENTA
		-- SI LA SUBCUENTA ES DIFERENTE DE NULO
		IF (@SubAccountId IS NOT NULL)
		BEGIN
			SELECT @ACCOUNT_USER = A.[User], 
							@PLATFORM_LICENSE_EXPIRATION_DATE = PL.[ExpirationDate]
				FROM dbo.[Account] A (NOLOCK)
				LEFT JOIN dbo.[PlatformLicense] PL (NOLOCK)
					ON PL.[PlatformHash] = A.[PlatformHash]
						AND PL.[InstallationId] = A.[InstallationId]
				WHERE A.[InstallationId] = @InstallationId 
					AND A.[AccountId] = @AccountId
					AND A.[SubAccountId] = @SubAccountId
					AND A.[Enabled] = 1
					AND PL.[Product] = @Product
		END

		-- SI LA SUBCUENTA ES NULO
		ELSE
		BEGIN
			SELECT @ACCOUNT_USER = A.[User], 
					@PLATFORM_LICENSE_EXPIRATION_DATE = PL.[ExpirationDate]
				FROM dbo.[Account] A (NOLOCK)
				LEFT JOIN dbo.[PlatformLicense] PL (NOLOCK)
					ON PL.[PlatformHash] = A.[PlatformHash]
						AND PL.[InstallationId] = A.[InstallationId]
				WHERE A.[InstallationId] = @InstallationId 
					AND A.[AccountId] = @AccountId
					AND A.[SubAccountId] IS NULL
					AND A.[Enabled] = 1
					AND PL.[Product] = @Product
		END

		-- PROCEDEMOS A BLOQUEAR TEMPORALMENTE EL REGISTRO HASTA TERMINAR DE AGREGAR EL PRODUCTO
		UPDATE dbo.[PlatformLicense] 
			SET [IsLocked] = 1,
				[LastModifiedByUserId] = @ACCOUNT_USER,
				[LastModifiedDate] = GETUTCDATE(),
				[TimeStamp] = GETUTCDATE()
			WHERE [InstallationId] = @InstallationId 
			AND [Product] = @Product

		-- RAISERROR('DATABABASE_ERROR_DEMOSTRATION', 16, 16)
		
		-- VERIFICAMOS NUEVAMENTE QUE AUN TENEMOS LICENCIAS DISPONIBLES 
		SELECT @AVAILABLE_LICENSE = CASE WHEN PL.[TotalLicense] > PL.[AssignedLicense] THEN  1 END 
			FROM dbo.[PlatformLicense] PL 
			WHERE PL.[InstallationId] = @InstallationId 
				AND PL.[Product] = @Product
				AND PL.[IsLocked] = 1

		-- SI TENEMOS LICENCIAS DISPONIBLES CONTINUAMOS A AGREGAR EL PRODUCTO PARA EL VCC
		IF @AVAILABLE_LICENSE = 1
		BEGIN
			-- HACEMOS EL INSERT A LA TABLA
			INSERT INTO [dbo].[PlatformLicenseUsage] ([ID]
					   ,[InstallationId]
					   ,[AccountId]
					   ,[SubAccountId]
					   ,[Product]
					   ,[VCC]
					   ,[LicenseActivationDate]
					   ,[LicenseExpirationDate]
					   ,[CreatedDate]
					   ,[CreatedByUserId]
					   ,[TimeStamp])
				VALUES (NEWID()
						,@InstallationId 
						,@AccountId
						,@SubAccountId
						,@Product
						,@VCC
						,GETUTCDATE()
						,@PLATFORM_LICENSE_EXPIRATION_DATE
						,GETUTCDATE()
						,@ACCOUNT_USER
						,GETUTCDATE()
						)

			-- ACTUALIZAMOS EL CAMPO [AssignedLicense] DE LA TABLA dbo.[PlatformLicense] Y DESBLOQUEAMOS EL REGISTRO
			UPDATE dbo.[PlatformLicense] 
				SET [AssignedLicense] = [AssignedLicense] + 1,
					[IsLocked] = 0,
					[LastModifiedByUserId] = @ACCOUNT_USER,
					[LastModifiedDate] = GETUTCDATE(),
					[TimeStamp] = GETUTCDATE()
				WHERE [InstallationId] = @InstallationId 
					AND [Product] = @Product
					AND [IsLocked] = 1

			SELECT 1
		END
		-- SI NO TENEMOS LICENCIAS DISPONIBLES RETORNAMOS 0
		ELSE
		BEGIN
			SELECT 0
			RAISERROR('DATABABASE_ERROR_NOT_AVAILABLE_LICENSE', 16, 16)
		END
	END
	-- SI NO TENEMOS LICENCIAS DISPONIBLES RETORNAMOS 0
	ELSE
	BEGIN
		SELECT 0
		RAISERROR('DATABABASE_ERROR_NOT_AVAILABLE_LICENSE', 16, 16)
	END
END 
GO
SET QUOTED_IDENTIFIER OFF 
GO
SET ANSI_NULLS OFF 
GO

GO
