SET QUOTED_IDENTIFIER ON 
GO
SET ANSI_NULLS ON 
GO
CREATE FUNCTION [dbo].[GetUserCampaigns] (
    @Instance Varchar(50) = '', @UserId Varchar(50) = ''
)
RETURNS @Campaigns TABLE (CampaignId Varchar(50))
AS
BEGIN

	INSERT INTO @Campaigns
	
	SELECT [ID] AS 'CampaignId'
	FROM [Campaign] (NOLOCK)
	WHERE [Instance] = @Instance
	AND [Client] IN (
		SELECT [ClientId]
		FROM [UserClient] (NOLOCK)
		WHERE [Instance] = @Instance
		AND [UserId] = @UserId
		AND [Deleted] = 0
	)
	AND [Deleted] = 0

    RETURN

END
GO
SET QUOTED_IDENTIFIER OFF 
GO
SET ANSI_NULLS OFF 
GO

GO
