SET QUOTED_IDENTIFIER ON 
GO
SET ANSI_NULLS ON 
GO
CREATE FUNCTION [dbo].[SplitString] (
    @String Varchar(MAX) = '', @Delimiter Char(1) = 'Â§'
)
RETURNS @Parts TABLE (value Varchar(500))
AS
BEGIN

    IF @String IS NULL RETURN
    
    DECLARE	@Start INT,
    		@Pos INT
    		
    if SUBSTRING(@String, 1, 1) = @Delimiter 
		BEGIN
    	SET	@Start = 2
    	INSERT INTO @Parts
    	VALUES (NULL)
		END
    ELSE 
    	SET	@Start = 1
    	
    WHILE 1=1
		BEGIN
		
    	SET	@Pos = CHARINDEX(@Delimiter, @String, @Start)
    	
    	IF @Pos = 0
    		SET	@Pos = LEN(@String) + 1
    		
    	IF @Pos - @Start > 0			
    		INSERT INTO @Parts
    		VALUES (LTRIM(RTRIM(SUBSTRING(@String, @Start, @Pos - @Start))))
    		
    	ELSE
    		INSERT INTO @Parts
    		VALUES (NULL)
    		
    	SET	@Start = @Pos + 1
    	
    	IF @Start > LEN( @String ) 
    		BREAK
    		
		END
		
    RETURN

END
GO
SET QUOTED_IDENTIFIER OFF 
GO
SET ANSI_NULLS OFF 
GO

GO
