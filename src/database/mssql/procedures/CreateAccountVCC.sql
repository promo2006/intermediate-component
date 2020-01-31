SET QUOTED_IDENTIFIER ON 
GO
SET ANSI_NULLS ON 
GO
CREATE PROCEDURE [dbo].[CreateAccountVCC] (
	@InstallationId Varchar(100) = NULL,
	@AccountId Varchar(50) = NULL,
	@SubAccountId Varchar(50) = NULL,
	@AccountVCC Varchar(50) = NULL,
	@TranscriptionRatePerHour Decimal(18, 5) = 0, 
	@TranscriptionRatePerSecond Decimal(18, 5) = 0, 
	@SemanticAnalysisRatePerTransaction Decimal(18, 5) = 0,  
	@CognitiveAnalysisRatePerTransaction Decimal(18, 5) = 0, 
	@Product Varchar(250) = NULL
	)
AS
BEGIN

	SET XACT_ABORT, NOCOUNT ON;

    BEGIN TRY
        BEGIN TRANSACTION;

        --SELECT 1/0; -- An error!

		-- DECLARAMOS UNA VARIABLE PARA ALMACENAR EL PRODUCTO RECORRIDO
		DECLARE @VCC_PRODUCT VARCHAR(50)

		-- DECLARAMOS UNA VARIABLE PARA ALMACENAR EL SPLIT DE PRODUCTOS
		DECLARE MY_CURSOR CURSOR 
		LOCAL STATIC READ_ONLY FORWARD_ONLY
			FOR 
			SELECT Value FROM [dbo].[split](@Product, ',')

		-- ABRIMOS Y RECORREMOS EL ARRAY DE PRODUCTOS
		OPEN MY_CURSOR
		FETCH NEXT FROM MY_CURSOR INTO @VCC_PRODUCT
		WHILE @@FETCH_STATUS = 0
		BEGIN 

			-- EJECUTAMOS EL PROCEDURE QUE INSERTA VCCPRODUCT
			EXEC AddAccountVCCProduct @InstallationId=@InstallationId, @AccountId=@AccountId, @SubAccountId=@SubAccountId, @VCC = @AccountVCC, @Product = @VCC_PRODUCT

			--Do something with Id here
			--PRINT @VCC_PRODUCT
			FETCH NEXT FROM MY_CURSOR INTO @VCC_PRODUCT
		END
		CLOSE MY_CURSOR
		DEALLOCATE MY_CURSOR

		-- DECLARAMOS UNA VARIABLE PARA PARA ALMACENAR EL USUARIO DE LA CUENTA
		DECLARE @ACCOUNT_USER VARCHAR(50)

		-- RECUPERAMOS LA FECHA DE EXPIRACION DE LA CUENTA
		-- SI LA SUBCUENTA ES DIFERENTE DE NULO
		IF (@SubAccountId IS NOT NULL)
		BEGIN
			SELECT @ACCOUNT_USER = A.[User]
				FROM dbo.[Account] A (NOLOCK) 
				WHERE A.[InstallationId] = @InstallationId 
					AND A.[AccountId] = @AccountId
					AND A.[SubAccountId] = @SubAccountId
					AND A.[Enabled] = 1
		END

		-- SI LA SUBCUENTA ES NULO
		ELSE
		BEGIN
			SELECT @ACCOUNT_USER = A.[User]
				FROM dbo.[Account] A (NOLOCK) 
				WHERE A.[InstallationId] = @InstallationId 
					AND A.[AccountId] = @AccountId
					AND A.[SubAccountId] IS NULL
					AND A.[Enabled] = 1
		END

		-- INSERTAMOS EL REGISTRO EN VCC-ACCOUNT
		INSERT INTO [dbo].[AccountVCC]
				   ([InstallationId]
				   ,[AccountId]
				   ,[SubAccountId]
				   ,[VCC]
				   ,[TranscriptionRatePerHour]
				   ,[TranscriptionRatePerSecond]
				   ,[SemanticAnalysisRatePerTransaction]
				   ,[CognitiveAnalysisRatePerTransaction]
				   ,[CreatedDate]
				   ,[CreatedByUserId]
				   ,[TimeStamp])
			 VALUES
				   (@InstallationId
				   ,@AccountId
				   ,@SubAccountId
				   ,@AccountVCC
				   ,@TranscriptionRatePerHour
				   ,@TranscriptionRatePerSecond
				   ,@SemanticAnalysisRatePerTransaction
				   ,@CognitiveAnalysisRatePerTransaction 
				   ,GETUTCDATE()
				   ,@ACCOUNT_USER
				   ,GETUTCDATE())

		SELECT 1 'Result'
        /* Other good code omitted*/

        COMMIT TRANSACTION;
    END TRY
    BEGIN CATCH
        IF @@TRANCOUNT > 0 ROLLBACK TRANSACTION;

        DECLARE @Message nvarchar(2048) = ERROR_MESSAGE();
        DECLARE @Severity integer = ERROR_SEVERITY();
        DECLARE @State integer = ERROR_STATE();

        RAISERROR(@Message, @Severity, @State);
        RETURN -1;
    END CATCH;

END 
GO
SET QUOTED_IDENTIFIER OFF 
GO
SET ANSI_NULLS OFF 
GO

GO
