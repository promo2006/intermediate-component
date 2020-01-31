SET QUOTED_IDENTIFIER ON 
GO
SET ANSI_NULLS ON 
GO
CREATE PROCEDURE [dbo].[SavePlatformHash] (
	@PlatformHash VARCHAR(100) = NULL,
	@User VARCHAR(50) = NULL
	)
AS
BEGIN
	SET NOCOUNT ON

	-- INSERTAMOS EL NUEVO PLATFORMHASH EN LA TABLA PLATFORM
	INSERT INTO [dbo].[Platform]
			   ([PlatformHash]
			   ,[IsActivated]
			   ,[CreatedDate]
			   ,[CreatedByUserId]
			   ,[TimeStamp])
		 VALUES
			   (@PlatformHash
			   ,0
			   ,GETUTCDATE()
			   ,@User
			   ,GETUTCDATE())

	-- RETORNAMOS UN VALOR DE RESPUESTA
	SELECT 1 AS 'result'

    SET NOCOUNT OFF
END 
GO
SET QUOTED_IDENTIFIER OFF 
GO
SET ANSI_NULLS OFF 
GO

GO
