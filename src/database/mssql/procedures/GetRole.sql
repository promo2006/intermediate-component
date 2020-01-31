SET QUOTED_IDENTIFIER ON 
GO
SET ANSI_NULLS ON 
GO
CREATE PROCEDURE [dbo].[GetRole] (
	@RoleId Varchar(50) = NULL
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
	WHERE [ID] = CASE WHEN ISNULL(@RoleId, '') = '' THEN [ID] ELSE @RoleId END

	EXEC [GetRolePermission] @RoleId
	EXEC [GetRoleRoutePermission] @RoleId
	EXEC [GetRoleSinglePermission] @RoleId
	
	SET NOCOUNT OFF
END
GO
SET QUOTED_IDENTIFIER OFF 
GO
SET ANSI_NULLS OFF 
GO

GO
