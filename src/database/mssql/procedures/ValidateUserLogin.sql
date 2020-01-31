SET QUOTED_IDENTIFIER ON 
GO
SET ANSI_NULLS ON 
GO
CREATE PROCEDURE [dbo].[ValidateUserLogin] (
	@VCC varchar(50) = NULL, @UserId varchar(50) = NULL, @Password varchar(50) = NULL
	)
AS
BEGIN
	SET NOCOUNT ON
	
	IF EXISTS (
		SELECT [ID]
		FROM [User] (NOLOCK) 
		WHERE [ID] = @UserId
		AND [Password] = @Password
	)
		SELECT 1 AS 'result'
	ELSE
		SELECT 0 AS 'result'

	SET NOCOUNT OFF
END
GO
SET QUOTED_IDENTIFIER OFF 
GO
SET ANSI_NULLS OFF 
GO

GO
