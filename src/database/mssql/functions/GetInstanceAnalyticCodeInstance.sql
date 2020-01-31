SET QUOTED_IDENTIFIER ON 
GO
SET ANSI_NULLS ON 
GO
CREATE FUNCTION [dbo].[GetInstanceAnalyticCodeInstance] (
     @Code Varchar(100) = ''
)
RETURNS Varchar(50)
AS
BEGIN
	
	RETURN ISNULL((SELECT TOP 1 [Instance] 
		FROM [AnalyticCodeInstance] (NOLOCK)
		WHERE [Code] = @Code
		AND ISNULL([Deleted], 0) = 0),'')

END
GO
SET QUOTED_IDENTIFIER OFF 
GO
SET ANSI_NULLS OFF 
GO

GO
