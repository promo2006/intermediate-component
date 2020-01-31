SET QUOTED_IDENTIFIER ON 
GO
SET ANSI_NULLS ON 
GO
CREATE PROCEDURE [dbo].[CreateMainAccount] (
	@PlatformHash VARCHAR(100) = NULL,
	@AccountId VARCHAR(50) = NULL,
	@User VARCHAR(50) = NULL,
	@Token VARCHAR(50) = NULL,
	@TranscriptionRatePerHour DECIMAL(18,5) = 0,
	@TranscriptionRatePerSecond DECIMAL(18,5) = 0,
	@SemanticAnalysisRatePerTransaction DECIMAL(18,5) = 0,
	@CognitiveAnalysisRatePerTransaction DECIMAL(18,5) = 0,
	@CreatedByUserId VARCHAR(50) = NULL
	)
AS
BEGIN
	SET NOCOUNT ON

	-- DECLARAMOS UNA VARIABLE PARA DETERMINAR SI YA EXISTE UNA CUENTA PRINCIPAL
	DECLARE @MAIN_ACCOUNT_EXISTS BIT

	-- SETTEAMOS FALSE POR DEFECTO
	SET @MAIN_ACCOUNT_EXISTS = 0

	-- DECLARAMOS UNA VARIABLE PARA GUARDAR EL NIVEL DE LA CUENTA
	DECLARE @ACCOUNT_LEVEL INT

	-- SETTEAMOS NIVEL 2 POR DEFECTO(CUENTAS COMUNES)
	SET @ACCOUNT_LEVEL = 2

	-- CONSULTAMOS SI YA EXISTE UNA CUENTA LEVEL 1 PARA ESE PLATFORMHASH
	SELECT @MAIN_ACCOUNT_EXISTS = 1
		FROM [dbo].[Account] A 
		WHERE A.[PlatformHash] = @PlatformHash
			AND A.[AccountLevel] = 1

	-- VERIFICAMOS SI LA CUENTA PRINCIPAL NO EXISTE
	IF @MAIN_ACCOUNT_EXISTS = 0 
	BEGIN	
		--SETEAMOS NIVEL PARA LA CUENTA
		SET @ACCOUNT_LEVEL = 1
	END

	-- INSERTAMOS EL NUEVO REGISTRO EN LA TABLA PLATFORMDATA
	INSERT INTO [dbo].[Account]
			   ([ID]
			   ,[PlatformHash]
			   ,[AccountId]
			   ,[User]
			   ,[Token]
			   ,[AccountLevel]
			   ,[TranscriptionRatePerHour]
			   ,[TranscriptionRatePerSecond]
			   ,[SemanticAnalysisRatePerTransaction]
			   ,[CognitiveAnalysisRatePerTransaction]
			   ,[CreatedDate]
			   ,[CreatedByUserId]
			   ,[TimeStamp])
		 VALUES
			   (NEWID()
			   ,@PlatformHash
			   ,@AccountId
			   ,@User
			   ,@Token
			   ,@ACCOUNT_LEVEL
			   ,@TranscriptionRatePerHour
			   ,@TranscriptionRatePerSecond
			   ,@SemanticAnalysisRatePerTransaction
			   ,@CognitiveAnalysisRatePerTransaction
			   ,GETUTCDATE()
			   ,@CreatedByUserId
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
