SET QUOTED_IDENTIFIER ON 
GO
SET ANSI_NULLS ON 
GO
create PROCEDURE [dbo].[GetRoleSinglePermission] (
	@RoleId Varchar(50) = NULL
	)
AS
BEGIN
	SET NOCOUNT ON

	SELECT
		sp.[ID]							    'singleId',
		sp.[GroupId] 							'groupId',
		sp.[Type] 								'type',
		sp.[Element] 							'element'
	FROM [SinglePermission] sp(NOLOCK)
	LEFT JOIN RolePermissionsGroup rpg on rpg.GroupId = sp.[GroupId]
	WHERE sp.[GroupId] IN (
		SELECT [GroupId]
		FROM [RolePermission] (NOLOCK)
		WHERE [RoleId] = @RoleId
	)
	GROUP BY sp.[ID], sp.[GroupId] ,sp.[Type], sp.[Element]
	ORDER BY sp.[ID] ASC
	

	SET NOCOUNT OFF
END
GO
SET QUOTED_IDENTIFIER OFF 
GO
SET ANSI_NULLS OFF 
GO

GO
