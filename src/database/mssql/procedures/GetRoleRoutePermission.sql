SET QUOTED_IDENTIFIER ON 
GO
SET ANSI_NULLS ON 
GO
CREATE PROCEDURE [dbo].[GetRoleRoutePermission] (
	@RoleId Varchar(50) = NULL
	)
AS
BEGIN
	SET NOCOUNT ON

	SELECT
		rp.[ID]							    'routeId',
		rp.[Route] 							'route',
		rp.[Level] 							'level',
		rp.[GroupId] 							'groupId'
	FROM [RoutePermission] rp (NOLOCK)
	LEFT JOIN RolePermissionsGroup rpg on rpg.GroupId = rp.[GroupId]
	WHERE rp.[GroupId] IN (
		SELECT [GroupId]
		FROM [RolePermission] (NOLOCK)
		WHERE [RoleId] = CASE WHEN ISNULL(@RoleId, '') = '' THEN [RoleId] ELSE @RoleId END
		
	)
	GROUP BY rp.[ID], rp.[Route],rp.[Level],rp.GroupId
	ORDER BY rp.[ID] ASC
	

	SET NOCOUNT OFF
END
GO
SET QUOTED_IDENTIFIER OFF 
GO
SET ANSI_NULLS OFF 
GO

GO
