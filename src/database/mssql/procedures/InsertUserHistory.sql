SET QUOTED_IDENTIFIER ON 
GO
SET ANSI_NULLS ON 
GO
Create PROCEDURE [dbo].[InsertUserHistory](
	@UserId Varchar(50) = NULL, 
	@UserRole Varchar(50) = NULL,
	@Event Varchar(50) = NULL, 
	@EventDate Datetime = NULL, 
	@EventDetail Varchar(200) = NULL
	)
AS
BEGIN
	SET NOCOUNT ON

	INSERT INTO [UserHistory] (
		[UserId], [UserRole],
		[Event], [EventDate], [EventDetail],
		[TimeStamp]
		) 
	VALUES (
		@UserId, @UserRole,
		@Event, @EventDate, @EventDetail,
		GETUTCDATE()
	)

    SELECT 1 AS 'result'
    
	SET NOCOUNT OFF
END
GO
SET QUOTED_IDENTIFIER OFF 
GO
SET ANSI_NULLS OFF 
GO

GO
