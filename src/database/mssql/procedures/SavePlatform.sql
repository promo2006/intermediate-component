SET QUOTED_IDENTIFIER ON 
GO
SET ANSI_NULLS ON 
GO
CREATE PROCEDURE [dbo].[SavePlatform]
(
	@PlatformHash			VARCHAR(100),
	@InstallationId			VARCHAR(50),
	@MacAddress				VARCHAR(50),
	@BaseBoardSerialNumber	VARCHAR(50)
)
AS
BEGIN
	SET NOCOUNT ON

	UPDATE [dbo].[Platform] 
		SET [InstallationId] = @InstallationId,
			[MacAddress] = @MacAddress,
			[BaseBoardSerialNumber] = @BaseBoardSerialNumber,
			[IsActivated] = 1,
			[TimeStamp] = GETUTCDATE()
	WHERE
		[PlatformHash] = @PlatformHash

	/*
	IF @@ROWCOUNT = 0
	BEGIN
		INSERT INTO [dbo].[Auditor](
			[Instance],
			[ID],
			[Description],
			[CreatedDate],
			[CreatedByUserId],
			[LastModifiedDate],
			[LastModifiedByUserId],
			[TimeStamp]
		)
		VALUES(
			@Instance,
			@ID,
			@Description,
			@CreatedDate,
			@CreatedByUserId,
			@LastModifiedDate,
			@LastModifiedByUserId,
			GETUTCDATE()
		)
	END
	*/

	-- SELECT 1 AS 'result'
	SELECT P.[InstallationId] 'installationId', 
			P.[MacAddress] 'macAddress', 
			P.[BaseBoardSerialNumber] 'baseBoardSerialNumber',
			P.[IsActivated] 'isActivated',
			CASE WHEN P.[ExpirationDate] > GETUTCDATE() THEN 1 ELSE 0 END 'status'
		FROM [dbo].[Platform] P
		WHERE P.[PlatformHash] = @PlatformHash 

	SET NOCOUNT OFF
END 
GO
SET QUOTED_IDENTIFIER OFF 
GO
SET ANSI_NULLS OFF 
GO

GO
