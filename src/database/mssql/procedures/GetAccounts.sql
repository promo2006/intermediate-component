SET QUOTED_IDENTIFIER ON 
GO
SET ANSI_NULLS ON 
GO

CREATE PROCEDURE [dbo].[GetAccounts]
(
	@SearchCriteria				VARCHAR(50) = NULL,
	@SearchExpression			VARCHAR(50) = NULL
)
AS
BEGIN
	-- ESTE SP RECUPERA TODAS CUENTAS PRESENTES EN EL SERVIDOR CENTRALIZADO
	-- TIENE TRES CRITERIOS DE BUSQUEDA POR EL COMBO EN LA VISTA (INSTALLATIONID, CLIENTNAME, ACCOUNTID)
	SET NOCOUNT ON

	-- EJECUTAMOS LA FUNCION QUE RECUPERA LAS CUENTAS
	SELECT A.[PlatformHash]				'platformHash',
			A.[InstallationId]				'installationId',
			A.[AccountId]					'accountId',
			PD.[ClientName]					'clientName',
			PD.[ClientContactName]			'clientContactName',
			PD.[ClientContactEmail]			'clientContactEmail',
			PD.[CreatedDate]				'createdDate'
	FROM [dbo].[Account] A (NOLOCK)
	INNER JOIN [dbo].[PlatformData] PD (NOLOCK) 
		ON PD.[PlatformHash] = A.[PlatformHash]
	/*
	INNER JOIN [dbo].[AccountVCC] AV (NOLOCK) 
		ON AV.[AccountId] = A.[AccountId]
			AND AV.[SubAccountId] = A.[SubAccountId]
	*/
	WHERE A.[Enabled] = 1
		AND ISNULL(PD.[InstallationId], '') LIKE CASE WHEN @SearchCriteria = 'installationId' THEN '%' + @SearchExpression + '%' ELSE '%' END
		AND ISNULL(PD.[ClientName], '') LIKE CASE WHEN @SearchCriteria = 'clientName' THEN '%' + @SearchExpression + '%' ELSE '%' END
		AND ISNULL(A.[AccountId], '') LIKE CASE WHEN @SearchCriteria = 'accountId' THEN '%' + @SearchExpression + '%' ELSE '%' END

	SET NOCOUNT OFF
END
GO
SET QUOTED_IDENTIFIER OFF 
GO
SET ANSI_NULLS OFF 
GO

GO
