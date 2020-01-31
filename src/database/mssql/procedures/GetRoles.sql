SET QUOTED_IDENTIFIER ON 
GO
SET ANSI_NULLS ON 
GO
CREATE PROCEDURE [dbo].[GetRoles] (
	@SearchCriteria Varchar(50) = NULL, 
	@SearchExpression Varchar(50) = NULL
	)
AS
BEGIN
	SET NOCOUNT ON
	
	SELECT
		[ID]							'id',
		[Description]					'description',
		[CreatedDate]					'createdDate',
		[CreatedByUserId]				'createdByUserId',
		[LastModifiedDate]				'lastModifiedDate',
		[LastModifiedByUserId]			'lastModifiedByUserId'
	FROM [Role] (NOLOCK)
	WHERE ISNULL([ID], '') LIKE CASE WHEN @SearchCriteria = 'id' THEN '%' + @SearchExpression + '%' ELSE '%' END
	AND ISNULL([Description], '') LIKE CASE WHEN @SearchCriteria = 'description' THEN '%' + @SearchExpression + '%' ELSE '%' END

	SET NOCOUNT OFF
END
GO
SET QUOTED_IDENTIFIER OFF 
GO
SET ANSI_NULLS OFF 
GO

GO
