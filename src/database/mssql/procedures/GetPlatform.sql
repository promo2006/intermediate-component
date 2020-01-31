SET QUOTED_IDENTIFIER ON 
GO
SET ANSI_NULLS ON 
GO
CREATE PROCEDURE [dbo].[GetPlatform]
(
	@PlatformHash						VARCHAR(100)
)
AS
BEGIN
	SET NOCOUNT ON

	-- OBTENEMOS LOS DATOS DE LA SECCION DE PLATFORMA. SOLO RETORNA UNA FILA.
	BEGIN
		SELECT
			P.[PlatformHash]														'platformHash',
			PD.[ClientName]															'clientName',
			P.[PublicIP]															'publicIP',
			PD.[ClientContactName]													'clientContactName',
			PD.[ClientContactEmail]													'clientContactEmail',
			CAST(PD.[TranscriptionRatePerHour] AS DECIMAL(15, 8))					'transcriptionRatePerHour',
			CAST(PD.[SemanticAnalysisRatePerTransaction] AS DECIMAL(15, 8))			'semanticAnalysisRatePerTransaction',
			CAST(PD.[CognitiveAnalysisRatePerTransaction] AS DECIMAL(15, 8))		'cognitiveAnalysisRatePerTransaction'
		FROM
			[dbo].[Platform] P (NOLOCK)
			INNER JOIN [dbo].[PlatformData] PD (NOLOCK) ON P.[PlatformHash] = PD.[PlatformHash]
		WHERE
			P.[PlatformHash]  = @PlatformHash
	END

	-- OBTENEMOS LOS DATOS DE USUARIO DE ACTIVACION. SÓLO RETORNA UNA FILA.
	BEGIN
		SELECT TOP 1
			P.[PlatformHash]														'platformHash',
			A.[User]																'user',
			A.[Token]																'password',
			A.[AccountId]															'name',
			CAST(AB.[CountableBalance] AS DECIMAL(18, 5))							'balance',
			CAST(A.[TranscriptionRatePerHour] AS DECIMAL(18, 5))					'transcriptionRatePerHour',
			CAST(A.[SemanticAnalysisRatePerTransaction] AS DECIMAL(18, 5))			'semanticAnalysisRatePerTransaction',
			CAST(A.[CognitiveAnalysisRatePerTransaction] AS DECIMAL(18, 5))			'cognitiveAnalysisRatePerTransaction'
		FROM
			[dbo].[Platform] P (NOLOCK)
			INNER JOIN [dbo].[Account] A ON P.PlatformHash = A.PlatformHash
			INNER JOIN [dbo].[AccountBalance] AB ON A.[AccountId] = AB.[AccountId]
		WHERE
			P.[PlatformHash]  = @PlatformHash
		ORDER BY A.[TimeStamp] DESC
	END

	-- OBTENEMOS DATOS DE LICENCIAS.
	BEGIN
		SELECT
			P.[PlatformHash]														'platformHash',
			PL.[Product]															'product',
			PL.[TotalLicense]														'totalLicense',
			PL.[ExpirationDate]														'expirationDate'
		FROM
			[dbo].[Platform] P (NOLOCK)
			INNER JOIN [dbo].[PlatformLicense] PL (NOLOCK) ON P.[PlatformHash] = PL.[PlatformHash]
		WHERE
			P.[PlatformHash]  = @PlatformHash
	END

	SET NOCOUNT OFF
END
GO
SET QUOTED_IDENTIFIER OFF 
GO
SET ANSI_NULLS OFF 
GO

GO
