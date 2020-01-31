SET QUOTED_IDENTIFIER ON 
GO
SET ANSI_NULLS ON 
GO

CREATE PROCEDURE [dbo].[GetPlatforms]
(
	@SearchCriteria				VARCHAR(50) = NULL,
	@SearchExpression			VARCHAR(50) = NULL
)
AS
BEGIN
	SET NOCOUNT ON

	SELECT
		P.[PlatformHash]				'platformHash',
		P.[InstallationId]				'installationId',
		P.[PublicIP]					'publicIp',
		P.[MacAddress]					'macAddress',
		P.[BaseBoardSerialNumber]		'baseBoardSerialNumber',
		P.[ActivationDate]				'activationDate',
		P.[ActivationHash]				'activationHash',
		PD.[ClientName]					'clientName',
		PD.[ClientContactName]			'clientContactName',
		PD.[ClientContactEmail]			'clientContactEmail',
		PD.[CreatedDate]				'createdDate'
	FROM
		[dbo].[Platform] P (NOLOCK)
		INNER JOIN [dbo].[PlatformData] PD (NOLOCK) ON P.[PlatformHash] = PD.[PlatformHash]
	WHERE
		ISNULL(PD.[ClientContactName], '') LIKE CASE WHEN @SearchCriteria = 'clientContactName' THEN '%' + @SearchExpression + '%' ELSE '%' END
		AND ISNULL(PD.[ClientContactEmail], '') LIKE CASE WHEN @SearchCriteria = 'clientContactEmail' THEN '%' + @SearchExpression + '%' ELSE '%' END

	SET NOCOUNT OFF
END
GO
SET QUOTED_IDENTIFIER OFF 
GO
SET ANSI_NULLS OFF 
GO

GO
