SET QUOTED_IDENTIFIER ON 
GO
SET ANSI_NULLS ON 
GO
CREATE FUNCTION [dbo].[SplitStringXML] (
    @String Varchar(MAX) = '', @Delimiter Char(1) = 'Â§'
)
RETURNS @Parts TABLE (value Varchar(500))
AS
BEGIN
	DECLARE @X xml
	SELECT @X = CONVERT(xml,'<root><s>'+ REPLACE(@String,@Delimiter,'</s> <s>')+ '</s></root>')
	
	insert into @Parts (value)
	SELECT T.c.value('.','varchar(500)')
	FROM @X.nodes('/root/s') T(c)
		
    RETURN

END
GO
SET QUOTED_IDENTIFIER OFF 
GO
SET ANSI_NULLS OFF 
GO

GO
