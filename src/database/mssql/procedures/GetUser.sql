SET QUOTED_IDENTIFIER ON 
GO
SET ANSI_NULLS ON 
GO
CREATE PROCEDURE [dbo].[GetUser] (
	@UserId Varchar(50) = NULL
	)
AS
BEGIN
	SET NOCOUNT ON

	SELECT
		[ID]								'id',
		[Email] 							'email',
		[Firstname] 						'firstname',
		[Lastname] 							'lastname',
		[Role]								'role',
		[Language] 							'language',
		[TimeZone] 							'timeZone',
		[IsSystemUser] 						'isSystemUser',
		[CreatedDate]						'createdDate',
		[CreatedByUserId]					'createdByUserId',
		[LastModifiedDate]					'lastModifiedDate',
		[LastModifiedByUserId]				'lastModifiedByUserId'
	FROM [User] (NOLOCK)
	WHERE [ID] = @UserId
	
	SET NOCOUNT OFF
END
GO
SET QUOTED_IDENTIFIER OFF 
GO
SET ANSI_NULLS OFF 
GO

GO
