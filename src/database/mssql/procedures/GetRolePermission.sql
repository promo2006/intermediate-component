SET QUOTED_IDENTIFIER ON 
GO
SET ANSI_NULLS ON 
GO
CREATE PROCEDURE [dbo].[GetRolePermission] (
	@RoleId Varchar(50) = NULL
	)
AS
BEGIN
	SET NOCOUNT ON

	SELECT
		rp.[RoleId]							'roleId',
		rp.[GroupId] 							'groupId'
	FROM [RolePermission] rp(NOLOCK)
	LEFT JOIN RolePermissionsGroup rpg on rpg.GroupId = rp.[GroupId]
	WHERE rp.[RoleId] = CASE WHEN ISNULL(@RoleId, '') = '' THEN rp.[RoleId] ELSE @RoleId END
	AND rpg.[GroupId] IN (
		SELECT GroupId
		FROM [RolePermission] (NOLOCK) WHERE RoleId = @RoleId)
	GROUP BY rp.[RoleId], rp.GroupId
	ORDER BY rp.[RoleId] ASC, rp.[GroupId] ASC
	
	
	SET NOCOUNT OFF
END
GO
SET QUOTED_IDENTIFIER OFF 
GO
SET ANSI_NULLS OFF 
GO

GO
