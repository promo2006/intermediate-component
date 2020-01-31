SET QUOTED_IDENTIFIER ON 
GO
SET ANSI_NULLS ON 
GO
CREATE PROCEDURE [dbo].[GetPlatformAvailableLicenses] (
	@PlatformHash Varchar(100) = NULL,
	@InstallationId Varchar(100) = NULL
	)
AS
BEGIN
	SET NOCOUNT ON

	-- DECLARAMOS UNA VARIABLE PARA ALCENAR EL ESTADO DE LA CUENTA 
	DECLARE @PLATFORM_STATUS BIT

	SET @PLATFORM_STATUS = 0

	-- SETTEAMOS EL ESTADO DE LA PLATAFORMA SEGUN LA FECHA DE EXPIRACION
	SELECT @PLATFORM_STATUS = P.[IsActivated]
		FROM [dbo].[Platform] P (NOLOCK)
		WHERE P.[PlatformHash] = @PlatformHash
			AND P.[InstallationId] = @InstallationId

	-- SI LA PLATAFORMA ESTA ACTIVA, HACEMOS LA BUSQUEDA DE CUENTAS
	IF (@PLATFORM_STATUS = 1) 
	BEGIN
		SELECT AL.[InstallationId] 'installationId',
				AL.[Product] 'product',
				AL.[TotalLicense] - AL.[AssignedLicense] 'totalLicense'
			FROM dbo.[PlatformLicense] AL (NOLOCK)
			WHERE AL.[PlatformHash] = @PlatformHash
				AND AL.[InstallationId] = @InstallationId
	END
	ELSE
	BEGIN
		SELECT 0
	END

	SET NOCOUNT OFF
END 
GO
SET QUOTED_IDENTIFIER OFF 
GO
SET ANSI_NULLS OFF 
GO

GO
