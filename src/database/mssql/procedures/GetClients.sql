SET QUOTED_IDENTIFIER ON 
GO
SET ANSI_NULLS ON 
GO
CREATE PROCEDURE [dbo].[GetClients]
(
	@SearchCriteria					VARCHAR(50) = NULL,
	@SearchExpression				VARCHAR(50) = NULL
)
AS
BEGIN
	SET NOCOUNT ON

	SELECT
		[ClientId]					'clientId',
		[ClientName]				'clientName',
		[CreatedDate]				'createdDate',
		[CreatedByUserId]			'createdByUserId',
		[LastModifiedDate]			'lastModifiedDate',
		[LastModifiedByUserId]		'lastModifiedByUserId'
	FROM [dbo].[Client] (NOLOCK)
	WHERE
		ISNULL([ClientId], '') LIKE CASE WHEN @SearchCriteria = 'clientId' THEN '%' + @SearchExpression + '%' ELSE '%' END
		AND ISNULL([ClientName], '') LIKE CASE WHEN @SearchCriteria = 'clientName' THEN '%' + @SearchExpression + '%' ELSE '%' END

	SET NOCOUNT OFF
END
GO
SET QUOTED_IDENTIFIER OFF 
GO
SET ANSI_NULLS OFF 
GO

GO
