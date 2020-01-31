SET QUOTED_IDENTIFIER ON 
GO
SET ANSI_NULLS ON 
GO
CREATE PROCEDURE [dbo].[GetPlatformByHash] (
	@PlatformHash Varchar(100) = NULL
	)
AS
BEGIN
	SET NOCOUNT ON

	-- HACEMOS BUSQUEDA LA PLATAFORMA POR EL PLATFORMHASH
	SELECT P.[InstallationId] 'installationId', 
			P.[MacAddress] 'macAddress', 
			P.[BaseBoardSerialNumber] 'baseBoardSerialNumber',
			P.[IsActivated] 'isActivated'
		FROM [dbo].[Platform] P (NOLOCK)
		WHERE P.[PlatformHash] = @PlatformHash 
	
	SET NOCOUNT OFF
END 
GO
SET QUOTED_IDENTIFIER OFF 
GO
SET ANSI_NULLS OFF 
GO

GO
