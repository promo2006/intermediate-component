SET QUOTED_IDENTIFIER ON 
GO
SET ANSI_NULLS ON 
GO
CREATE PROCEDURE [dbo].[GetVccRates] (
	@InstallationId Varchar(100) = NULL, 
	@Vcc Varchar(50) = NULL
	)
AS
BEGIN
	SET NOCOUNT ON

	-- HACEMOS LA CONSULTA A LA BASE DE DATOS
	SELECT AV.[TranscriptionRatePerHour] 'transcriptionRatePerHour',
		AV.[TranscriptionRatePerSecond] 'transcriptionRatePerSecond',
		AV.[SemanticAnalysisRatePerTransaction] 'semanticAnalysisRatePerTransaction',
		AV.[CognitiveAnalysisRatePerTransaction] 'cognitiveAnalysisRatePerTransaction'
	FROM dbo.[AccountVCC] AV (NOLOCK)
	WHERE AV.[InstallationId] = @InstallationId
		AND AV.[VCC] = @Vcc
	
	SET NOCOUNT OFF
END 
GO
SET QUOTED_IDENTIFIER OFF 
GO
SET ANSI_NULLS OFF 
GO

GO
