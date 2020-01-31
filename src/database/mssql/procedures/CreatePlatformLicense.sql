SET QUOTED_IDENTIFIER ON 
GO
SET ANSI_NULLS ON 
GO
CREATE PROCEDURE [dbo].[CreatePlatformLicense] (
	@PlatformHash VARCHAR(100) = NULL,
	@QualityLicense INT = 0,
	@SpeechLicense INT = 0,
	@ExpirationDate DATE = NULL,
	@User VARCHAR(50) = NULL
	)
AS
BEGIN
	SET NOCOUNT ON

	-- INSERTAMOS EL NUEVO REGISTRO PARA QUALITY EN LA TABLA PLATFORMLICENSE
	INSERT INTO [dbo].[PlatformLicense]
			   ([PlatformHash]
			   ,[Product]
			   ,[TotalLicense]
			   ,[ExpirationDate]
			   ,[CreatedDate]
			   ,[CreatedByUserId]
			   ,[TimeStamp])
		 VALUES
			   (@PlatformHash
			   ,'QUALITY'
			   ,@QualityLicense
			   ,@ExpirationDate
			   ,GETUTCDATE()
			   ,@User
			   ,GETUTCDATE())

	-- INSERTAMOS EL NUEVO REGISTRO PARA QUALITY EN LA TABLA PLATFORMLICENSE
	INSERT INTO [dbo].[PlatformLicense]
			   ([PlatformHash]
			   ,[Product]
			   ,[TotalLicense]
			   ,[ExpirationDate]
			   ,[CreatedDate]
			   ,[CreatedByUserId]
			   ,[TimeStamp])
		 VALUES
			   (@PlatformHash
			   ,'SPEECH'
			   ,@SpeechLicense
			   ,@ExpirationDate
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
