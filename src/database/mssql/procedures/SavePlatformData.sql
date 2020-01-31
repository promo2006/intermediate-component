SET QUOTED_IDENTIFIER ON 
GO
SET ANSI_NULLS ON 
GO
CREATE PROCEDURE [dbo].[SavePlatformData] (
	@PlatformHash VARCHAR(100) = NULL,
	@ClientName VARCHAR(50) = NULL,
	@ClientContactName VARCHAR(50) = NULL,
	@ClientContactEmail VARCHAR(50) = NULL,
	@TranscriptionRatePerHour DECIMAL(18,5) = 0,
	@TranscriptionRatePerSecond DECIMAL(18,5) = 0,
	@SemanticAnalysisRatePerTransaction DECIMAL(18,5) = 0,
	@CognitiveAnalysisRatePerTransaction DECIMAL(18,5) = 0,
	@User VARCHAR(50) = NULL
	)
AS
BEGIN
	SET NOCOUNT ON

	-- ACTUALIZAMOS LOS CAMPOS CLIENTCONTACTEMAIL, TRANSCRIPTIONRATEPERHOUR, SEMANTICANALYSISRATEPERTRANSACTION, COGNITIVEANALYSISRATEPERTRANSACTION, LASTMODIFIEDDATE, LASTMODIFIEDBYUSERID y TIMESTAMP DE ACUERDO EL PLATFORMHASH.
	UPDATE [dbo].[PlatformData] SET
		[ClientContactEmail] = @ClientContactEmail,
		[TranscriptionRatePerHour] = @TranscriptionRatePerHour,
		[SemanticAnalysisRatePerTransaction] = @SemanticAnalysisRatePerTransaction,
		[CognitiveAnalysisRatePerTransaction] = @CognitiveAnalysisRatePerTransaction,
		[LastModifiedDate] = GETUTCDATE(),
		[TimeStamp] = GETUTCDATE()
	WHERE PlatformHash = @PlatformHash

	IF(@@ROWCOUNT = 0)
	BEGIN
		-- INSERTAMOS EL NUEVO REGISTRO EN LA TABLA PLATFORMDATA.
		INSERT INTO [dbo].[PlatformData]
			   ([PlatformHash]
			   ,[ClientName]
			   ,[ClientContactName]
			   ,[ClientContactEmail]
			   ,[TranscriptionRatePerHour]
			   ,[TranscriptionRatePerSecond]
			   ,[SemanticAnalysisRatePerTransaction]
			   ,[CognitiveAnalysisRatePerTransaction]
			   ,[CreatedDate]
			   ,[CreatedByUserId]
			   ,[TimeStamp])
		 VALUES
			   (@PlatformHash
			   ,@ClientName
			   ,@ClientContactName
			   ,@ClientContactEmail
			   ,@TranscriptionRatePerHour
			   ,@TranscriptionRatePerSecond
			   ,@SemanticAnalysisRatePerTransaction
			   ,@CognitiveAnalysisRatePerTransaction
			   ,GETUTCDATE()
			   ,@User
			   ,GETUTCDATE())

	END
	
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
