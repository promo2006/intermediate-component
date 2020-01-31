SET QUOTED_IDENTIFIER ON 
GO
SET ANSI_NULLS ON 
GO
CREATE PROCEDURE [dbo].[GetPlatformByData] (
	@InstallationId Varchar(50) = NULL, 
	@MacAddress Varchar(50) = NULL, 
	@BaseBoardSerialNumber Varchar(50) = NULL
	)
AS
BEGIN
	SET NOCOUNT ON

	-- HACEMOS BUSQUEDA LA PLATAFORMA POR SUS DATOS BASICOS
	SELECT P.[InstallationId] 'installationId', 
			P.[MacAddress] 'macAddress', 
			P.[BaseBoardSerialNumber] 'baseBoardSerialNumber',
			P.[IsActivated] 'isActivated'
		FROM [dbo].[Platform] P
		WHERE P.[InstallationId] = @InstallationId
			AND P.[MacAddress] = @MacAddress
			AND P.[BaseBoardSerialNumber] = @BaseBoardSerialNumber 
	
	SET NOCOUNT OFF
END 
GO
SET QUOTED_IDENTIFIER OFF 
GO
SET ANSI_NULLS OFF 
GO

GO
